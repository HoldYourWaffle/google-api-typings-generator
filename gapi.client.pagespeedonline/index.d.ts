// Type definitions for non-npm package PageSpeed Insights API v5 5.0
// Project: https://developers.google.com/speed/docs/insights/v5/about
// Definitions by: Maxim Mazurok <https://github.com/Maxim-Mazurok>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

// IMPORTANT
// This file was generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
// In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
// Generated from: https://www.googleapis.com/discovery/v1/apis/pagespeedonline/v5/rest
// Revision: 20200625

/// <reference types="gapi.client" />

declare namespace gapi.client {
    /** Load PageSpeed Insights API v5 */
    function load(name: "pagespeedonline", version: "v5"): PromiseLike<void>;
    function load(name: "pagespeedonline", version: "v5", callback: () => any): void;

    namespace pagespeedonline {
        interface AuditRefs {
            /** The category group that the audit belongs to (optional). */
            group?: string;
            /** The audit ref id. */
            id?: string;
            /** The weight this audit's score has on the overall category score. */
            weight?: number;
        }
        interface Bucket {
            /** Upper bound for a bucket's range. */
            max?: number;
            /** Lower bound for a bucket's range. */
            min?: number;
            /** The proportion of data in this bucket. */
            proportion?: number;
        }
        interface Categories {
            /** The accessibility category, containing all accessibility related audits. */
            accessibility?: LighthouseCategoryV5;
            /**
             * The best practices category, containing all best practices related
             * audits.
             */
            "best-practices"?: LighthouseCategoryV5;
            /** The performance category, containing all performance related audits. */
            performance?: LighthouseCategoryV5;
            /**
             * The Progressive-Web-App (PWA) category, containing all pwa related
             * audits.
             */
            pwa?: LighthouseCategoryV5;
            /**
             * The Search-Engine-Optimization (SEO) category, containing all seo related
             * audits.
             */
            seo?: LighthouseCategoryV5;
        }
        interface CategoryGroupV5 {
            /** The description of what the category is grouping */
            description?: string;
            /** The human readable title of the group */
            title?: string;
        }
        interface ConfigSettings {
            /**
             * How Lighthouse was run, e.g. from the Chrome extension or from the npm
             * module.
             */
            channel?: string;
            /** The form factor the emulation should use. */
            emulatedFormFactor?: string;
            /** The locale setting. */
            locale?: string;
            /** List of categories of audits the run should conduct. */
            onlyCategories?: any;
        }
        interface Environment {
            /** The benchmark index number that indicates rough device class. */
            benchmarkIndex?: number;
            /** The user agent string of the version of Chrome used. */
            hostUserAgent?: string;
            /** The user agent string that was sent over the network. */
            networkUserAgent?: string;
        }
        // tslint:disable-next-line:interface-name
        interface I18n {
            /**
             * Internationalized strings that are formatted to the locale in
             * configSettings.
             */
            rendererFormattedStrings?: RendererFormattedStrings;
        }
        interface LighthouseAuditResultV5 {
            /** The description of the audit. */
            description?: string;
            /** Freeform details section of the audit. */
            details?: { [P in string]: any };
            /** The value that should be displayed on the UI for this audit. */
            displayValue?: string;
            /** An error message from a thrown error inside the audit. */
            errorMessage?: string;
            /** An explanation of the errors in the audit. */
            explanation?: string;
            /** The audit's id. */
            id?: string;
            /**
             * A numeric value that has a meaning specific to the audit, e.g. the number
             * of nodes in the DOM or the timestamp of a specific load event. More
             * information can be found in the audit details, if present.
             */
            numericValue?: number;
            /** The score of the audit, can be null. */
            score?: any;
            /** The enumerated score display mode. */
            scoreDisplayMode?: string;
            /** The human readable title. */
            title?: string;
            /** Possible warnings that occurred in the audit, can be null. */
            warnings?: any;
        }
        interface LighthouseCategoryV5 {
            /** An array of references to all the audit members of this category. */
            auditRefs?: AuditRefs[];
            /** A more detailed description of the category and its importance. */
            description?: string;
            /** The string identifier of the category. */
            id?: string;
            /** A description for the manual audits in the category. */
            manualDescription?: string;
            /**
             * The overall score of the category, the weighted average of all its audits.
             * (The category's score, can be null.)
             */
            score?: any;
            /** The human-friendly name of the category. */
            title?: string;
        }
        interface LighthouseResultV5 {
            /** Map of audits in the LHR. */
            audits?: { [P in string]: LighthouseAuditResultV5 };
            /** Map of categories in the LHR. */
            categories?: Categories;
            /** Map of category groups in the LHR. */
            categoryGroups?: { [P in string]: CategoryGroupV5 };
            /** The configuration settings for this LHR. */
            configSettings?: ConfigSettings;
            /** Environment settings that were used when making this LHR. */
            environment?: Environment;
            /** The time that this run was fetched. */
            fetchTime?: string;
            /** The final resolved url that was audited. */
            finalUrl?: string;
            /** The internationalization strings that are required to render the LHR. */
            i18n?: I18n;
            /** The lighthouse version that was used to generate this LHR. */
            lighthouseVersion?: string;
            /** The original requested url. */
            requestedUrl?: string;
            /**
             * A top-level error message that, if present, indicates a serious enough
             * problem that this Lighthouse result may need to be discarded.
             */
            runtimeError?: RuntimeError;
            /** List of all run warnings in the LHR.  Will always output to at least `[]`. */
            runWarnings?: any[];
            /** The Stack Pack advice strings. */
            stackPacks?: StackPack[];
            /** Timing information for this LHR. */
            timing?: Timing;
            /** The user agent that was used to run this LHR. */
            userAgent?: string;
        }
        interface PagespeedApiLoadingExperienceV5 {
            /** The url, pattern or origin which the metrics are on. */
            id?: string;
            /** The requested URL, which may differ from the resolved "id". */
            initial_url?: string;
            /** The map of <metrics, data>. */
            metrics?: { [P in string]: UserPageLoadMetricV5 };
            /** True if the result is an origin fallback from a page, false otherwise. */
            origin_fallback?: boolean;
            /** The human readable speed "category" of the id. */
            overall_category?: string;
        }
        interface PagespeedApiPagespeedResponseV5 {
            /** The UTC timestamp of this analysis. */
            analysisUTCTimestamp?: string;
            /** The captcha verify result */
            captchaResult?: string;
            /**
             * Canonicalized and final URL for the document, after following page
             * redirects (if any).
             */
            id?: string;
            /** Kind of result. */
            kind?: string;
            /** Lighthouse response for the audit url as an object. */
            lighthouseResult?: LighthouseResultV5;
            /** Metrics of end users' page loading experience. */
            loadingExperience?: PagespeedApiLoadingExperienceV5;
            /** Metrics of the aggregated page loading experience of the origin */
            originLoadingExperience?: PagespeedApiLoadingExperienceV5;
            /** The version of PageSpeed used to generate these results. */
            version?: PagespeedVersion;
        }
        interface PagespeedVersion {
            /** The major version number of PageSpeed used to generate these results. */
            major?: string;
            /** The minor version number of PageSpeed used to generate these results. */
            minor?: string;
        }
        interface RendererFormattedStrings {
            /** The tooltip text on an expandable chevron icon. */
            auditGroupExpandTooltip?: string;
            /** The label for the initial request in a critical request chain. */
            crcInitialNavigation?: string;
            /** The label for values shown in the summary of critical request chains. */
            crcLongestDurationLabel?: string;
            /** The label shown next to an audit or metric that has had an error. */
            errorLabel?: string;
            /** The error string shown next to an erroring audit. */
            errorMissingAuditInfo?: string;
            /** The title of the lab data performance category. */
            labDataTitle?: string;
            /**
             * The disclaimer shown under performance explaning that the network can
             * vary.
             */
            lsPerformanceCategoryDescription?: string;
            /**
             * The heading shown above a list of audits that were not computerd in the
             * run.
             */
            manualAuditsGroupTitle?: string;
            /** The heading shown above a list of audits that do not apply to a page. */
            notApplicableAuditsGroupTitle?: string;
            /**
             * The heading for the estimated page load savings opportunity of an
             * audit.
             */
            opportunityResourceColumnLabel?: string;
            /** The heading for the estimated page load savings of opportunity audits. */
            opportunitySavingsColumnLabel?: string;
            /** The heading that is shown above a list of audits that are passing. */
            passedAuditsGroupTitle?: string;
            /** The label that explains the score gauges scale (0-49, 50-89, 90-100). */
            scorescaleLabel?: string;
            /**
             * The label shown preceding important warnings that may have invalidated
             * an entire report.
             */
            toplevelWarningsMessage?: string;
            /** The disclaimer shown below a performance metric value. */
            varianceDisclaimer?: string;
            /** The label shown above a bulleted list of warnings. */
            warningHeader?: string;
        }
        interface RuntimeError {
            /** The enumerated Lighthouse Error code. */
            code?: string;
            /** A human readable message explaining the error code. */
            message?: string;
        }
        interface StackPack {
            /** The stack pack advice strings. */
            descriptions?: { [P in string]: string };
            /** The stack pack icon data uri. */
            iconDataURL?: string;
            /** The stack pack id. */
            id?: string;
            /** The stack pack title. */
            title?: string;
        }
        interface Timing {
            /** The total duration of Lighthouse's run. */
            total?: number;
        }
        interface UserPageLoadMetricV5 {
            /** The category of the specific time metric. */
            category?: string;
            /** Metric distributions. Proportions should sum up to 1. */
            distributions?: Bucket[];
            /** Identifies the form factor of the metric being collected. */
            formFactor?: string;
            /** The median number of the metric, in millisecond. */
            median?: number;
            /** Identifies the type of the metric. */
            metricId?: string;
            /**
             * We use this field to store certain percentile value for this metric.
             * For v4, this field contains pc50.
             * For v5, this field contains pc90.
             */
            percentile?: number;
        }
        interface PagespeedapiResource {
            /**
             * Runs PageSpeed analysis on the page at the specified URL, and returns
             * PageSpeed scores, a list of suggestions to make that page faster, and other
             * information.
             */
            runpagespeed(request?: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** JSONP */
                callback?: string;
                /** The captcha token passed when filling out a captcha. */
                captchaToken?: string;
                /**
                 * A Lighthouse category to run; if none are given, only Performance category
                 * will be run
                 */
                category?: string | string[];
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** The locale used to localize formatted results */
                locale?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /**
                 * The analysis strategy (desktop or mobile) to use, and desktop is the
                 * default
                 */
                strategy?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** The URL to fetch and analyze */
                url?: string;
                /** Campaign name for analytics. */
                utm_campaign?: string;
                /** Campaign source for analytics. */
                utm_source?: string;
            }): Request<PagespeedApiPagespeedResponseV5>;
        }

        const pagespeedapi: PagespeedapiResource;
    }
}
