// Type definitions for non-npm package Firebase ML API v1beta2 1.0
// Project: https://firebase.google.com
// Definitions by: Maxim Mazurok <https://github.com/Maxim-Mazurok>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

// IMPORTANT
// This file was generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
// In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
// Generated from: https://firebaseml.googleapis.com/$discovery/rest?version=v1beta2
// Revision: 20200513

/// <reference types="gapi.client" />

declare namespace gapi.client {
    /** Load Firebase ML API v1beta2 */
    function load(name: "firebaseml", version: "v1beta2"): PromiseLike<void>;
    function load(name: "firebaseml", version: "v1beta2", callback: () => any): void;

    namespace firebaseml {
        // tslint:disable-next-line:no-empty-interface
        interface Empty {
        }
        interface ListModelsResponse {
            /** The list of models */
            models?: Model[];
            /**
             * Token to retrieve the next page of results, or empty if there are no
             * more results in the list.
             */
            nextPageToken?: string;
        }
        interface Model {
            /** Output only. Lists operation ids associated with this model whose status is NOT done. */
            activeOperations?: Operation[];
            /** Output only. Timestamp when this model was created in Firebase ML. */
            createTime?: string;
            /**
             * Required. The name of the model to create. The name can be up to 32 characters long
             * and can consist only of ASCII Latin letters A-Z and a-z, underscores(_)
             * and ASCII digits 0-9. It must start with a letter.
             */
            displayName?: string;
            /**
             * Output only. See RFC7232
             * https://tools.ietf.org/html/rfc7232#section-2.3
             */
            etag?: string;
            /** Output only. The model_hash will change if a new file is available for download. */
            modelHash?: string;
            /**
             * The resource name of the Model.
             * Model names have the form `projects/{project_id}/models/{model_id}`
             * The name is ignored when creating a model.
             */
            name?: string;
            /**
             * State common to all model types.
             * Includes publishing and validation information.
             */
            state?: ModelState;
            /** User defined tags which can be used to group/filter models during listing */
            tags?: string[];
            /** A TFLite Model */
            tfliteModel?: TfLiteModel;
            /** Output only. Timestamp when this model was updated in Firebase ML. */
            updateTime?: string;
        }
        interface ModelOperationMetadata {
            basicOperationStatus?: string;
            /**
             * The name of the model we are creating/updating
             * The name must have the form `projects/{project_id}/models/{model_id}`
             */
            name?: string;
        }
        interface ModelState {
            /** Indicates if this model has been published. */
            published?: boolean;
            /**
             * Output only. Indicates the latest validation error on the model if any.
             * A model may have validation errors if there were problems during
             * the model creation/update.
             * e.g. in the case of a TfLiteModel, if a tflite model file was
             * missing or in the wrong format.
             * This field will be empty for valid models.
             */
            validationError?: Status;
        }
        interface Operation {
            /**
             * If the value is `false`, it means the operation is still in progress.
             * If `true`, the operation is completed, and either `error` or `response` is
             * available.
             */
            done?: boolean;
            /** The error result of the operation in case of failure or cancellation. */
            error?: Status;
            /**
             * Service-specific metadata associated with the operation.  It typically
             * contains progress information and common metadata such as create time.
             * Some services might not provide such metadata.  Any method that returns a
             * long-running operation should document the metadata type, if any.
             */
            metadata?: Record<string, any>;
            /**
             * The server-assigned name, which is only unique within the same service that
             * originally returns it. If you use the default HTTP mapping, the
             * `name` should be a resource name ending with `operations/{unique_id}`.
             */
            name?: string;
            /**
             * The normal response of the operation in case of success.  If the original
             * method returns no data on success, such as `Delete`, the response is
             * `google.protobuf.Empty`.  If the original method is standard
             * `Get`/`Create`/`Update`, the response should be the resource.  For other
             * methods, the response should have the type `XxxResponse`, where `Xxx`
             * is the original method name.  For example, if the original method name
             * is `TakeSnapshot()`, the inferred response type is
             * `TakeSnapshotResponse`.
             */
            response?: Record<string, any>;
        }
        interface Status {
            /** The status code, which should be an enum value of google.rpc.Code. */
            code?: number;
            /**
             * A list of messages that carry the error details.  There is a common set of
             * message types for APIs to use.
             */
            details?: Array<Record<string, any>>;
            /**
             * A developer-facing error message, which should be in English. Any
             * user-facing error message should be localized and sent in the
             * google.rpc.Status.details field, or localized by the client.
             */
            message?: string;
        }
        interface TfLiteModel {
            /**
             * The TfLite file containing the model. (Stored in Google Cloud).
             * The gcs_tflite_uri should have form: gs://some-bucket/some-model.tflite
             * Note: If you update the file in the original location, it is
             * necessary to call UpdateModel for ML to pick up and validate the
             * updated file.
             */
            gcsTfliteUri?: string;
            /** Output only. The size of the TFLite model */
            sizeBytes?: string;
        }
        interface ModelsResource {
            /**
             * Creates a model in Firebase ML.
             * The longrunning operation will eventually return a Model
             */
            create(request: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** JSONP */
                callback?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /**
                 * Required. The parent project resource where the model is to be created.
                 * The parent must have the form `projects/{project_id}`
                 */
                parent: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Request body */
                resource: Model;
            }): Request<Operation>;
            create(request: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** JSONP */
                callback?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /**
                 * Required. The parent project resource where the model is to be created.
                 * The parent must have the form `projects/{project_id}`
                 */
                parent: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            },
            body: Model): Request<Operation>;
            /** Deletes a model */
            delete(request?: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** JSONP */
                callback?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /**
                 * Required. The name of the model to delete.
                 * The name must have the form `projects/{project_id}/models/{model_id}`
                 */
                name: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            }): Request<{}>;
            /** Gets a model resource. */
            get(request?: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** JSONP */
                callback?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /**
                 * Required. The name of the model to get.
                 * The name must have the form `projects/{project_id}/models/{model_id}`
                 */
                name: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            }): Request<Model>;
            /** Lists the models */
            list(request?: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** JSONP */
                callback?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /**
                 * A filter for the list
                 * e.g. 'tags: abc' to list models which are tagged with "abc"
                 */
                filter?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** The maximum number of items to return */
                pageSize?: number;
                /** The next_page_token value returned from a previous List request, if any. */
                pageToken?: string;
                /**
                 * Required. The name of the parent to list models for.
                 * The parent must have the form `projects/{project_id}'
                 */
                parent: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            }): Request<ListModelsResponse>;
            /** Updates a model. The longrunning operation will eventually return a Model. */
            patch(request: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** JSONP */
                callback?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /**
                 * The resource name of the Model.
                 * Model names have the form `projects/{project_id}/models/{model_id}`
                 * The name is ignored when creating a model.
                 */
                name: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** The update mask */
                updateMask?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Request body */
                resource: Model;
            }): Request<Operation>;
            patch(request: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** JSONP */
                callback?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /**
                 * The resource name of the Model.
                 * Model names have the form `projects/{project_id}/models/{model_id}`
                 * The name is ignored when creating a model.
                 */
                name: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** The update mask */
                updateMask?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            },
            body: Model): Request<Operation>;
        }
        interface OperationsResource {
            /**
             * Gets the latest state of a long-running operation.  Clients can use this
             * method to poll the operation result at intervals as recommended by the API
             * service.
             */
            get(request?: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** JSONP */
                callback?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** The name of the operation resource. */
                name: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            }): Request<Operation>;
        }
        interface ProjectsResource {
            models: ModelsResource;
            operations: OperationsResource;
        }

        const projects: ProjectsResource;
    }
}
