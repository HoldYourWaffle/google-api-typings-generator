import * as doT from 'dot';
import * as fs from 'fs';
import * as _ from 'lodash';
import * as path from 'path';
import * as request from 'request';

const typesMap = {
  'integer': 'number',
  'object': 'any',
  'any': 'any',
  'string': 'string',
};

interface ITextWriter {
  write(chunk?);

  end();
}

class StreamWriter implements ITextWriter {

  constructor(private stream: fs.WriteStream) {

  }

  write(chunk: string) {
    this.stream.write(chunk);
  }

  end() {
    this.stream.end();
  }
}

const excludedApi = [
  'dialogflow',
  'replicapool',
  'replicapoolupdater',
];

const irregularSpaces = [
  /\u000B/g,// Line Tabulation (\v) - <VT>
  /\u000C/g,// Form Feed (\f) - <FF>
  /\u00A0/g,// No-Break Space - <NBSP>
  /\u0085/g,// Next Line
  /\u1680/g,// Ogham Space Mark
  /\u180E/g,// Mongolian Vowel Separator - <MVS>
  /\ufeff/g,// Zero Width No-Break Space - <BOM>
  /\u2000/g,// En Quad
  /\u2001/g,// Em Quad
  /\u2002/g,// En Space - <ENSP>
  /\u2003/g,// Em Space - <EMSP>
  /\u2004/g,// Tree-Per-Em
  /\u2005/g,// Four-Per-Em
  /\u2006/g,// Six-Per-Em
  /\u2007/g,// Figure Space
  /\u2008/g,// Punctuation Space - <PUNCSP>
  /\u2009/g,// Thin Space
  /\u200A/g,// Hair Space
  /\u200B/g,// Zero Width Space - <ZWSP>
  /\u2028/g,// Line Separator
  /\u2029/g,// Paragraph Separator
  /\u202F/g,// Narrow No-Break Space
  /\u205f/g,// Medium Mathematical Space
  /\u3000/g,// Ideographic Space
];

class IndentedTextWriter {
  constructor(private writer: ITextWriter, public newLine = '\n', public tabString = '    ') {

  }

  public indent = 0;

  public write(chunk: string) {
    this.writer.write(chunk);
  }

  public startIndentedLine(chunk = '') {
    this.write(Array(this.indent + 1).join(this.tabString) + chunk);
  }

  public endIndentedLine(chunk = '') {
    this.write(chunk + Array(this.indent + 1).join(this.tabString));
  }

  public writeLine(chunk = '') {
    this.startIndentedLine(chunk + this.newLine);
  }

  public writeNewLine(chunk = '') {
    this.endIndentedLine(chunk + this.newLine);
  }

  public end() {
    this.writer.end();
  }
}

interface ITypescriptTextWriter {
  namespace(name: string, context: (writer: TypescriptTextWriter) => void);
}

type TypescriptWriterCallback = (writer: TypescriptTextWriter) => void;

function formatPropertyName(name: string) {
  if (name.indexOf('.') >= 0 || name.indexOf('-') >= 0 || name.indexOf('@') >= 0) {
    return `"${name}"`;
  }
  return name;
}

function convertVersion(version: string) {
  const m = version.match(/v(\d+)?\.?(\d+)?/);

  if (m) {
    const [full, major, minor] = m;
    return `${major || 0}.${minor || 0}`;
  } else {
    return '0.0';
  }
}

function ensureDirectoryExists(directory: string) {
  if (!fs.existsSync(directory)) {
    ensureDirectoryExists(path.dirname(directory));
    fs.mkdirSync(directory);
  }
}

class TypescriptTextWriter implements ITypescriptTextWriter {
  constructor(private writer: IndentedTextWriter) {
  }

  private braces(text: string, context: (writer: TypescriptTextWriter) => void) {
    this.writer.writeLine(text + ' {');
    this.writer.indent++;
    context(this);
    this.writer.indent--;
    this.writer.writeLine('}');
  }

  public referenceTypes(type: string) {
    this.writer.writeLine(`/// <reference types="${type}" />`);
  }

  public namespace(name: string, context: TypescriptWriterCallback) {
    this.braces(`namespace ${name}`, context);
  }

  public declareNamespace(name: string, context: TypescriptWriterCallback) {
    this.writer.writeLine();
    this.braces(`declare namespace ${name}`, context);
  }

  public interface(name: string, context: TypescriptWriterCallback) {
    // this.writer.writeLine();
    this.braces(`interface ${name}`, context);
  }

  public anonymousType(context: TypescriptWriterCallback) {
    this.endLine('{');
    this.writer.indent++;
    context(this);
    this.writer.indent--;
    this.writer.startIndentedLine('}');
  }

  public newLine(chunk: string) {
    this.writer.startIndentedLine(chunk);
  }

  public endLine(chunk = '') {
    this.writer.write(chunk);
    this.writer.write(this.writer.newLine);
  }

  public scope(context: TypescriptWriterCallback, startTag = '{', endTag = '}') {
    this.writer.write(startTag);
    this.writer.write(this.writer.newLine);
    this.writer.indent++;
    context(this);
    this.writer.indent--;
    this.writer.startIndentedLine(endTag);
  }

  public property(name: string, type: string | TypescriptWriterCallback, required = true) {
    if (typeof type === 'function') {
      this.writer.startIndentedLine(`${formatPropertyName(name)}${required ? '' : '?'}: `);
      type(this);
      this.endLine(';');
    } else if (typeof type === 'string') {
      this.writer.writeLine(`${formatPropertyName(name)}${required ? '' : '?'}: ${type};`);
    }

  }

  public comment(text: string = '') {
    if (!text || text === '') {
      return;
    }

    const maxLine = 150;

    let lines: string[] = [];

    for (const line of text.trim().split(/\r\n|\r|\n|\u000a\u000d|\u000a|\u000d|\u240a/g)) {
      if (line.length > maxLine) {
        const words = line.split(' ');
        let newLine = '';

        for (const word of words) {
          if (newLine.length + word.length > maxLine) {
            lines.push(newLine);
            newLine = word;
          } else if (newLine === '') {
            newLine = word;
          } else {
            newLine += (' ' + word);
          }
        }

        lines.push(newLine);
      } else {
        lines.push(line);
      }
    }

    lines = lines.map(x => x.replace(/\*/g, '&#42;').trim());

    for (let irregularSpace of irregularSpaces) {
      lines = lines.map(line => line.replace(irregularSpace, ' '));
    }

    if (lines.length == 1) {
      this.writer.writeLine(`/** ${lines[0]} */`);
    } else if (lines.length > 1) {
      this.writer.writeLine(`/**`);
      _.forEach(lines, line => line ? this.writer.writeLine(` * ${line}`) : this.writer.writeLine(` *`));
      this.writer.writeLine(` */`);
    }
  }

  public method(name: string, parameters: { parameter: string, type: string | TypescriptWriterCallback }[], returnType: string, singleLine = false) {
    this.writer.startIndentedLine(`${name}(`);

    if (!singleLine) {
      this.writer.indent++;
      this.writeNewLine();
    }
    _.forEach(parameters, (parameter, index) => {
      this.write(parameter.parameter + ': ');
      this.write(parameter.type);

      if (index + 1 < parameters.length) {
        this.write(',');

        if (singleLine) {
          this.write(' ');
        } else {
          this.writeNewLine();
        }
      }
    });
    if (!singleLine) {
      this.write(',');
      this.writer.indent--;
      this.writeNewLine();
    }

    this.writer.write(`): ${returnType};`);

    this.endLine();
    //this.writer.writeLine(`${name}(${parameters.map(p => p.parameter + ": " + p.type).join(", ")}): ${returnType};`);
  }

  public writeLine(chunk = '') {
    this.writer.writeLine(chunk);
  }

  public writeNewLine(chunk = '') {
    this.writer.writeNewLine(chunk);
  }

  public write(chunk: string | TypescriptWriterCallback = '') {
    if (typeof chunk === 'string') {
      this.writer.write(chunk);
    } else if (typeof chunk === 'function') {
      chunk(this);
    }
  }

  public end() {
    this.writer.end();
  }
}

function processResource(resource: gapi.client.discovery.RestDescription): any[] {
  const children = _.flatten(_.map(resource.resources || {}, value => processResource(value)));
  const methodsArray = _.map(resource.methods || {}, value => value);

  return [...methodsArray, ...children];
}

function getNamespace(path: string) {
  const parts = path.split('.');

  if (parts.length > 0) {
    parts.splice(parts.length - 1);

    const n: string = _.camelCase(parts.join('.'));
    return parts.join('.');
  } else
    return undefined;
}

function getName(path: string | undefined): string | undefined {
  if (path == null) {
    return undefined;
  }
  const parts = path.split('.');

  if (parts.length > 0)
    return _.last(parts);
  else
    return undefined;
}

function firstLetterUp(text: string) {
  return text[0].toUpperCase() + text.substring(1);
}

function checkExists<T>(t: T): NonNullable<T> {
  if (t == null) {
    throw new Error('Expected non-null reference, but got null');
  }
  return t as NonNullable<T>;
}

function getType(type: gapi.client.discovery.JsonSchema, schemas: Record<string, gapi.client.discovery.JsonSchema>): string | TypescriptWriterCallback {
  if (type.type === 'array') {
    const child = getType(checkExists(type.items), schemas);

    if (typeof child === 'string') {
      return `${child}[]`;
    } else if (typeof child === 'function') {
      return (writer: TypescriptTextWriter) => {
        writer.write('Array<');
        child(writer);
        writer.write('>');
      };
    } else {
      return '[]';
    }
  } else if (type.type === 'object' && type.properties) {
    return (writer: TypescriptTextWriter) => {
      writer.anonymousType(() => {
        forEachOrdered(type.properties, (property, propertyName) => {
          if (property.description) {
            writer.comment(formatComment(property.description));
          }
          writer.property(propertyName, getType(property, schemas), property.required || false);
        });

        if (type.additionalProperties) {
          writer.property('[key: string]', getType(type.additionalProperties, schemas));
        }
      });
    };
  } else if (type.type === 'object' && type.additionalProperties) {
    return (writer: TypescriptTextWriter) => {
      const child = getType(checkExists(type.additionalProperties), schemas);
      writer.write('Record<string, ');
      writer.write(child);
      writer.write('>');
    };
  } else if (type.type) {
    const tsType = typesMap[type.type] || type.type;
    return type.repeated ? `${tsType} | ${tsType}[]` : tsType;
  } else if (type.$ref) {
    const referencedType = schemas[type.$ref];

    if (isEmptySchema(referencedType)) {
      return 'any';
    }

    return type.$ref;
  } else throw Error();
}

function formatComment(comment: string) {
  if (!comment) return '';

  return comment;
}

function getMethodReturn(method: gapi.client.discovery.RestMethod, schemas: Record<string, gapi.client.discovery.JsonSchema>) {
  const name = schemas['Request'] ? 'client.Request' : 'Request';

  if (method.response) {
    const schemaName = method.response.$ref;
    const schema = schemaName && schemas[schemaName];

    if (schema && !isEmptySchema(schema)) {
      return `${name}<${schemaName}>`;
    } else {
      return `${name}<{}>`;
    }
  } else {
    return `${name}<void>`;
  }
}

function loadTemplate(name: string) {
  let filename = '';

  if (fs.existsSync(name)) {
    filename = name;
  } else if (fs.existsSync(path.join('..', name))) {
    filename = path.join('..', name);
  } else {
    throw Error(`Can\'t find ${name} file template`);
  }

  doT.templateSettings.strip = false;

  return doT.template(fs.readFileSync(filename, 'utf-8'));
}

const readmeTpl = loadTemplate('readme.dot');
const tsconfigTpl = loadTemplate('tsconfig.dot');
const tslintTpl = loadTemplate('tslint.dot');

function isEmptySchema(schema: gapi.client.discovery.JsonSchema) {
  return _.isEmpty(schema.properties) && !schema.additionalProperties;
}

function forEachOrdered<T>(record: Record<string, T> | undefined, iterator: (value: T, key: string, index: number) => void) {
  if (record == null) {
    return;
  }
  const keys = _.keys(record).sort((a, b) => a > b ? 1 : -1);
  let index = 0;
  for (const key of keys) {
    iterator(record[key], key, index++);
  }
}

function sortKeys<T>(record: Record<string, T>): Record<string, T> {
  return _.map(record, (resource, resourceKey) => ({ resource, resourceKey }))
    .sort(({ resourceKey: a }, { resourceKey: b }) => a > b ? 1 : -1)
    .reduce((curr, { resource, resourceKey }) => ({ ...curr, [resourceKey]: resource }), {}) as Record<string, T>;
}

export class App {
  private readonly typingsDirectory: string;
  private seenSchemaRefs: Set<string> = new Set();

  constructor(private base = __dirname + '/../types/') {
    this.typingsDirectory = base;

    if (!fs.existsSync(this.base)) {
      fs.mkdirSync(this.base);
    }

    if (!fs.existsSync(this.typingsDirectory)) {
      fs.mkdirSync(this.typingsDirectory);
    }

    console.log(`base directory: ${this.base}`);
    console.log(`typings directory: ${this.typingsDirectory}`);
    console.log();
  }

  static parseVersion(version: string) {
    let major, minor, patch;
    const match = version.match(/v(\d+)?(?:\.(\d+))?(.*)?/);

    if (match) {
      major = match[1] || 0;
      minor = match[2];
      patch = match[3];

      return `${major}${minor ? '.' + minor : ''}${patch ? '-' + patch : ''}`;
    }
  }

  static parseOutPath(dir: string) {
    if (!fs.existsSync(dir)) {
      throw new Error(`Directory not found: ${dir}`);
    }

    return dir;
  }

  private static getResourceTypeName(resourceName: string) {
    resourceName = resourceName.split('-').map(x => `${x[0].toUpperCase()}${x.substring(1)}`).join('');
    return resourceName[0].toUpperCase() + resourceName.substring(1) + 'Resource';
  }

  // writes specified resource definition
  private writeResources(out: TypescriptTextWriter, resources: Record<string, gapi.client.discovery.RestResource>, parameters: Record<string, gapi.client.discovery.JsonSchema> = {}, schemas: Record<string, gapi.client.discovery.JsonSchema>) {
    const requestTypeWriters: (() => void)[] = [];

    // Write all resource interfaces, then all request types.
    forEachOrdered(resources, (resource, resourceName) => {
      const resourceInterfaceName = App.getResourceTypeName(resourceName);

      if (resource.resources) {
        this.writeResources(out, resource.resources, parameters, schemas);
      }


      out.interface(resourceInterfaceName, () => {
        if (resource.resources) {
          forEachOrdered(resource.resources, (_, childResourceName) => {
            const childResourceInterfaceName = App.getResourceTypeName(childResourceName);
            out.property(childResourceName, childResourceInterfaceName);
          });
        }

        forEachOrdered(resource.methods, method => {
          if (method.description) {
            out.comment(formatComment(method.description));
          }

          const methodName = checkExists(getName(method.id));
          // get() on InvitationsResource -> GetInvitationsResourceRequest
          const requestTypeName = methodName.slice(0, 1).toUpperCase() + methodName.slice(1) + resourceInterfaceName + 'Request';

          const requestParameters: Record<string, gapi.client.discovery.JsonSchema> = { ...parameters, ...method.parameters };
          const requestBodyType = method.request && method.request['$ref'];

          requestTypeWriters.push(() => {
            out.interface(requestTypeName, (writer: TypescriptTextWriter) => {

              forEachOrdered(requestParameters, (data, key) => {
                if (data.description) {
                  writer.comment(formatComment(data.description));
                }
                writer.property(key, getType(data, schemas), data.required || false);
              });

              // Only generate 'resource' property for body if the request parameters doesn't have an existing 'resource' property.
              if (requestParameters.resource == null && requestBodyType) {
                writer.comment('Request body');
                writer.property('resource', requestBodyType, true);
              }
            });
          });

          const methodReturn = getMethodReturn(method, schemas);
          if (requestParameters.resource != null && requestBodyType) {
            // If the request has an existing 'resource' property, we drop the additional request body 'resource' parameter
            // and only generate the dual-parameter method.

            // Generates:
            // patch(request: PatchCourseWorkResourceRequest, body: CourseWork): Request<CourseWork>;
            out.method(methodName, [{
              parameter: 'request',
              type: requestTypeName,
            }, {
              parameter: 'body',
              type: requestBodyType,
            }], methodReturn);
          } else {
            // Generates:
            // patch(request: PatchCourseWorkResourceRequest): Request<CourseWork>;
            out.method(methodName, [{
              parameter: 'request',
              type: requestTypeName,
            }], methodReturn, true);

            // Generates:
            // patch(
            //   request: Omit<PatchCourseWorkResourceRequest, 'resource'>,
            //   resource: PatchCourseWorkResourceRequest['resource'],
            // ): Request<CourseWork>;
            if (requestBodyType) {
              out.method(methodName, [{
                parameter: 'request',
                type: `Omit<${requestTypeName}, 'resource'>`,
              }, {
                parameter: 'body',
                type: `${requestTypeName}['resource']`,
              }], methodReturn);
            }
          }
        });
      });
    });

    requestTypeWriters.forEach(write => write());
  }


  private static getTypingsName(api: string, version: string) {
    if (version == null)
      return `gapi.client.${api}`;
    else
      return path.join(`gapi.client.${api}`, version);
  }

  private getTypingsDirectory(api: string, version: string) {
    return path.join(this.typingsDirectory, App.getTypingsName(api, version));
  }

  /// writes api description for specified JSON object
  private processApi(destinationDirectory: string, api: gapi.client.discovery.RestDescription, actualVersion: boolean, url: string) {

    console.log(`Generating ${api.id} definitions... ${api.labels && api.labels.join(', ') || ''}`);

    const rawMethods = processResource(api);

    const methods = rawMethods.map((x: any) => ({
        namespace: getNamespace(x.id),
        name: getName(x.id),
        method: x,
      })),
      filename = 'index.d.ts',//"gapi.client." + api.name + (actualVersion ? "" : "-" + api.version) + ".d.ts",
      stream = fs.createWriteStream(path.join(destinationDirectory, filename)),
      writer = new TypescriptTextWriter(new IndentedTextWriter(new StreamWriter(stream)));

    writer.writeLine(`// Type definitions for non-npm package ${api.title} ${api.version} ${convertVersion(checkExists(api.version))}`);
    writer.writeLine(`// Project: ${api.documentationLink}`);
    writer.writeLine(`// Definitions by: Maxim Mazurok <https://github.com/Maxim-Mazurok>`);
    writer.writeLine(`// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped`);
    writer.writeLine(`// TypeScript Version: 2.8`);
    writer.writeLine();
    writer.writeLine(`// IMPORTANT`);
    writer.writeLine(`// This file was generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.`);
    writer.writeLine(`// In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator`);
    writer.writeLine(`// Generated from: ${url}`);
    writer.writeLine();
    writer.referenceTypes("gapi.client");

    // write main namespace
    writer.declareNamespace(`gapi.client`, () => {

      writer.comment(formatComment(`Load ${api.title} ${api.version}`));

      writer.method(`function load`, [
        { parameter: `name`, type: `"${api.name}"` },
        { parameter: `version`, type: `"${api.version}"` },
      ], 'PromiseLike<void>', true);

      writer.method(`function load`, [
        { parameter: `name`, type: `"${api.name}"` },
        { parameter: `version`, type: `"${api.version}"` },
        { parameter: `callback`, type: `() => any` },
      ], 'void', true);

      // expose root resources to gapi.client namespace

      writer.endLine();


      writer.namespace(checkExists(api.name), () => {
        const schemas = checkExists(api.schemas);

        forEachOrdered(schemas, (schema) => {
          if (isEmptySchema(schema)) {
            writer.writeLine(`// tslint:disable-next-line:no-empty-interface`);
          }
          writer.interface(checkExists(schema.id), () => {
            if (schema.properties) {
              forEachOrdered(schema.properties, (data, key) => {
                if (data.description) {
                  writer.comment(formatComment(data.description));
                }
                writer.property(key, getType(data, schemas), data.required || false);
              });
            }

            if (schema.additionalProperties) {
              writer.property('[key: string]', getType(schema.additionalProperties, schemas));
            }
          });
        });

        if (api.resources) {
          this.writeResources(writer, api.resources, api.parameters, schemas);

          forEachOrdered(api.resources, (_, resourceName) => {
            if (resourceName !== 'debugger') {
              writer.endLine();
              writer.writeLine(`const ${resourceName}: ${App.getResourceTypeName(resourceName)};`);
            }
          });
        }
      });
    });

    writer.end();
  }

  private request(url: string): Promise<gapi.client.discovery.DirectoryList> {
    return new Promise((resolve, reject) => {
      request(url, (error, response, body) => {
        if (!error && response.statusCode == 200) {
          const api = JSON.parse(body) as gapi.client.discovery.DirectoryList;
          resolve(api);
        } else {
          console.error('Got an error: ', error, ', status code: ', response.statusCode, `, while fetching ${url}`);
          reject(error);
        }
      });
    });
  }

  public writeTemplate(filepath: string, template: (data: any) => string, api: gapi.client.discovery.RestDescription) {
    const stream = fs.createWriteStream(filepath),
      writer = new StreamWriter(stream);

    try {
      writer.write(template({ ...api, formatPropertyName }));
    } finally {
      writer.end();
    }
  }

  public async processService(url: string, actualVersion: boolean) {
    let api;

    try {
      api = await this.request(url) as gapi.client.discovery.RestDescription;
    } catch (e) {
      console.warn(e);
      return;
    }

    api.name = api.name.toLocaleLowerCase();
    api.version = api.version.toLocaleLowerCase();
    api.resources = sortKeys(api.resources);

    if (api.auth && api.auth.oauth2 && api.auth.oauth2.scopes) {
      api.auth.oauth2.scopes = sortKeys(api.auth.oauth2.scopes);
    }

    _.forEach(api.resources, (resource) => {
      resource.methods = sortKeys(resource.methods);
    });

    const destinationDirectory = this.getTypingsDirectory(api.name, actualVersion ? null : api.version);

    ensureDirectoryExists(destinationDirectory);

    await this.processApi(destinationDirectory, api, actualVersion, url);

    const templateData = { ...api, actualVersion };

    this.writeTemplate(path.join(destinationDirectory, 'readme.md'), readmeTpl, templateData);
    this.writeTemplate(path.join(destinationDirectory, `tsconfig.json`), tsconfigTpl, templateData);
    this.writeTemplate(path.join(destinationDirectory, `tslint.json`), tslintTpl, templateData);

    this.writeTests(destinationDirectory, api);
  }

  private writePropertyValue(scope: TypescriptTextWriter, api: gapi.client.discovery.RestDescription, property: gapi.client.discovery.JsonSchema) {
    switch (property.type) {
      case "number":
      case "integer":
        scope.write(`42`);
        break;
      case "boolean":
        scope.write(`true`);
        break;
      case "string":
        scope.write(`"Test string"`);
        break;
      case "array":
        this.writeArray(scope, api, checkExists(property.items));
        break;
      case "object":
        this.writeObject(scope, api, property);
        break;
      case "any":
        scope.write(`42`);
        break;
      default:
        throw new Error(`Unknown scalar type ${property.type}`);
    }
  }

  private writeArray(scope: TypescriptTextWriter, api: gapi.client.discovery.RestDescription, items: gapi.client.discovery.JsonSchema) {
    const schemaName = items.$ref;
    if (schemaName && this.seenSchemaRefs.has(schemaName)) {
      // Break out of recursive reference by writing undefined
      scope.write(`undefined`);
      return;
    }

    scope.scope(() => {
      scope.newLine('');
      if (schemaName) {
        this.writeSchemaRef(scope, api, schemaName);
      } else {
        this.writePropertyValue(scope, api, items);
      }
    }, `[`, `]`);
  }

  private writeObject(scope: TypescriptTextWriter, api: gapi.client.discovery.RestDescription, object: gapi.client.discovery.JsonSchema) {
    const schemaName = object.additionalProperties?.$ref;
    if (schemaName && this.seenSchemaRefs.has(schemaName)) {
      scope.write(`undefined`);
      return;
    }
    if (object.properties) {
      // If the object has properties, only write that structure
      scope.scope(() => {
        this.writeProperties(scope, api, object.properties!);
      });
      return;
    } else if (object.additionalProperties) {
      // Otherwise, we have a Record<K, V> and we should write a placeholder key
      scope.scope(() => {
        scope.newLine(`A: `);
        if (schemaName) {
          this.writeSchemaRef(scope, api, schemaName);
        } else {
          this.writePropertyValue(scope, api, object.additionalProperties!);
        }
      });
    } else {
      this.writePropertyValue(scope, api, object);
    }
  }

  // Performs a lookup of the specified interface/schema type and recursively generates stubbed values
  private writeSchemaRef(scope: TypescriptTextWriter, api: gapi.client.discovery.RestDescription, schemaName: string) {
    if (this.seenSchemaRefs.has(schemaName)) {
      // Break out of recursive reference by writing undefined
      scope.write(`undefined`);
      return;
    }

    const schema = checkExists(api.schemas)[schemaName];
    if (!schema) {
      throw new Error(`Attempted to generate stub for unknown schema '${schemaName}'`);
    }

    this.seenSchemaRefs.add(schemaName);
    this.writeObject(scope, api, schema);
    this.seenSchemaRefs.delete(schemaName);
  }

  private writeProperties(scope: TypescriptTextWriter, api: gapi.client.discovery.RestDescription, record: Record<string, gapi.client.discovery.JsonSchema>) {
    forEachOrdered(record, (parameter, name) => {
      scope.newLine(`${formatPropertyName(name)}: `);
      if (parameter.type === 'object') {
        this.writeObject(scope, api, parameter);
      } else if (parameter.$ref) {
        this.writeSchemaRef(scope, api, parameter.$ref);
      } else {
        this.writePropertyValue(scope, api, parameter);
      }
      scope.endLine(`,`);
    });
  }

  private writeResourceTests(scope: TypescriptTextWriter, api: gapi.client.discovery.RestDescription, ancestors: string, resourceName: string, resource: gapi.client.discovery.RestResource) {
    for (const methodName in resource.methods) {
      scope.comment(resource.methods[methodName].description);
      scope.newLine(`await ${ancestors}.${resourceName}.${methodName}(`);
      const params: Record<string, gapi.client.discovery.JsonSchema> = { ...resource['parameters'], ...resource.methods![methodName].parameters };
      if (params) {
        scope.scope(() => {
          this.writeProperties(scope, api, params);
        });
      }
      const ref = resource.methods[methodName].request?.$ref;
      if (ref != null) {
        scope.write(`, `);
        this.writeSchemaRef(scope, api, ref);
      }

      scope.endLine(`);`);

      for (const subResource in resource.resources) {
        this.writeResourceTests(scope, api, `${ancestors}.${resourceName}`, subResource, resource.resources[subResource]);
      }
    }
  }

  private writeTests(destinationDirectory: string, api: gapi.client.discovery.RestDescription) {
    const stream = fs.createWriteStream(path.join(destinationDirectory, `gapi.client.${api.name}-tests.ts`)),
      writer = new TypescriptTextWriter(new IndentedTextWriter(new StreamWriter(stream)));

    writer.write(`/* This is stub file for gapi.client.${api.name} definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
**/`);

    writer.writeLine();
    writer.newLine('gapi.load(\'client\', () => ');
    writer.scope((writer3) => {
      writer3.comment('now we can use gapi.client');
      writer3.newLine(`gapi.client.load('${api.name}', '${api.version}', () => `);
      writer3.scope(() => {
        writer3.comment(`now we can use gapi.client.${api.name}`);
        writer3.endLine();
        if (api.auth) {
          writer3.comment(`don't forget to authenticate your client before sending any request to resources:`);
          writer3.comment(`declare client_id registered in Google Developers Console`);

          writer3.writeLine(`const client_id = '<<PUT YOUR CLIENT ID HERE>>';`);
          writer3.newLine(`const scope = `);
          writer3.scope(() => {
            const oauth2 = checkExists(api?.auth?.oauth2);
            for (let a in oauth2.scopes) {
              writer3.comment(oauth2.scopes[a].description);
              writer3.writeLine(`'${a}',`);
            }
          }, '[', ']');

          writer3.endLine(';');
          writer3.writeLine(`const immediate = false;`);
          writer3.newLine(`gapi.auth.authorize({ client_id, scope, immediate }, authResult => `);

          writer3.scope((scope) => {
            writer3.newLine(`if (authResult && !authResult.error) `);
            scope.scope((a) => {
              a.comment(`handle successful authorization`);
              a.writeLine(`run();`);
            });
            scope.write(` else `);
            scope.scope(() => {
              scope.comment(`handle authorization error`);
            });
            writer3.endLine();
          });

          writer3.endLine(');');
        } else {
          writer3.writeLine(`run();`);
        }
      });

      writer3.endLine(');');
      writer3.endLine();
      writer3.newLine(`async function run() `);
      writer.scope((scope) => {
        for (const resourceName in api.resources) {
          this.writeResourceTests(scope, api, `gapi.client.${api.name}`, resourceName, api.resources[resourceName]);
        }
      });

      writer3.endLine();
    });
    writer.endLine(');');
  }

  public async discover(service: string | undefined, allVersions: boolean = false) {
    console.log('Discovering Google services...');

    const list: gapi.client.discovery.DirectoryList = await this.request('https://www.googleapis.com/discovery/v1/apis');

    const apis = _.filter(list.items, api => service == null || api.name === service)
      .filter(api => excludedApi.indexOf(checkExists(api.name)) < 0);


    if (apis.length === 0) {
      console.error('Can\'t find services');
      throw Error('Can\'t find services');
    }

    const apisLookup = _.groupBy(apis, item => item.name);

    for (const apiKey in apisLookup) {

      const associatedApis = apisLookup[apiKey];

      const preferredApi = associatedApis.find(x => x.preferred)
        || associatedApis.sort((a, b) => checkExists(a.version) > checkExists(b.version) ? 1 : -1)[0];

      if (preferredApi) {
        await this.processService(checkExists(preferredApi.discoveryRestUrl), checkExists(preferredApi.preferred));
      } else {
        console.warn(`Can't find preferred API for ${apiKey}`);
      }

      if (allVersions) {
        for (const api of associatedApis.filter(x => x != preferredApi)) {
          try {
            await this.processService(checkExists(api.discoveryRestUrl), checkExists(api.preferred));
          } catch (e) {
            console.error(e);
          }
        }
      }
    }
  }
}
