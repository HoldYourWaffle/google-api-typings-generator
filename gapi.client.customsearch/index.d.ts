// Type definitions for non-npm package CustomSearch API v1 1.0
// Project: https://developers.google.com/custom-search/v1/using_rest
// Definitions by: Maxim Mazurok <https://github.com/Maxim-Mazurok>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

// IMPORTANT
// This file was generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
// In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
// Generated from: https://www.googleapis.com/discovery/v1/apis/customsearch/v1/rest
// Revision: 20181001

/// <reference types="gapi.client" />

declare namespace gapi.client {
    /** Load CustomSearch API v1 */
    function load(name: "customsearch", version: "v1"): PromiseLike<void>;
    function load(name: "customsearch", version: "v1", callback: () => any): void;

    namespace customsearch {
        interface Context {
            facets?: Array<Array<{
                anchor?: string;
                label?: string;
                label_with_op?: string;
            }>>;
            title?: string;
        }
        interface Promotion {
            bodyLines?: Array<{
                htmlTitle?: string;
                link?: string;
                title?: string;
                url?: string;
            }>;
            displayLink?: string;
            htmlTitle?: string;
            image?: {
                height?: number;
                source?: string;
                width?: number;
            };
            link?: string;
            title?: string;
        }
        interface Query {
            count?: number;
            cr?: string;
            cx?: string;
            dateRestrict?: string;
            disableCnTwTranslation?: string;
            exactTerms?: string;
            excludeTerms?: string;
            fileType?: string;
            filter?: string;
            gl?: string;
            googleHost?: string;
            highRange?: string;
            hl?: string;
            hq?: string;
            imgColorType?: string;
            imgDominantColor?: string;
            imgSize?: string;
            imgType?: string;
            inputEncoding?: string;
            language?: string;
            linkSite?: string;
            lowRange?: string;
            orTerms?: string;
            outputEncoding?: string;
            relatedSite?: string;
            rights?: string;
            safe?: string;
            searchTerms?: string;
            searchType?: string;
            siteSearch?: string;
            siteSearchFilter?: string;
            sort?: string;
            startIndex?: number;
            startPage?: number;
            title?: string;
            totalResults?: string;
        }
        interface Result {
            cacheId?: string;
            displayLink?: string;
            fileFormat?: string;
            formattedUrl?: string;
            htmlFormattedUrl?: string;
            htmlSnippet?: string;
            htmlTitle?: string;
            image?: {
                byteSize?: number;
                contextLink?: string;
                height?: number;
                thumbnailHeight?: number;
                thumbnailLink?: string;
                thumbnailWidth?: number;
                width?: number;
            };
            kind?: string;
            labels?: Array<{
                displayName?: string;
                label_with_op?: string;
                name?: string;
            }>;
            link?: string;
            mime?: string;
            pagemap?: Record<string, Array<Record<string, any>>>;
            snippet?: string;
            title?: string;
        }
        interface Search {
            context?: Context;
            items?: Result[];
            kind?: string;
            promotions?: Promotion[];
            queries?: Record<string, Query[]>;
            searchInformation?: {
                formattedSearchTime?: string;
                formattedTotalResults?: string;
                searchTime?: number;
                totalResults?: string;
            };
            spelling?: {
                correctedQuery?: string;
                htmlCorrectedQuery?: string;
            };
            url?: {
                template?: string;
                type?: string;
            };
        }
        interface SiterestrictResource {
            /**
             * Returns metadata about the search performed, metadata about the custom search engine used for the search, and the search results. Uses a small set of
             * url patterns.
             */
            list(request?: {
                /** Data format for the response. */
                alt?: string;
                /** Turns off the translation between zh-CN and zh-TW. */
                c2coff?: string;
                /** Country restrict(s). */
                cr?: string;
                /** The custom search engine ID to scope this search query */
                cx?: string;
                /** Specifies all search results are from a time period */
                dateRestrict?: string;
                /** Identifies a phrase that all documents in the search results must contain */
                exactTerms?: string;
                /** Identifies a word or phrase that should not appear in any documents in the search results */
                excludeTerms?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** Returns images of a specified type. Some of the allowed values are: bmp, gif, png, jpg, svg, pdf, ... */
                fileType?: string;
                /** Controls turning on or off the duplicate content filter. */
                filter?: string;
                /** Geolocation of end user. */
                gl?: string;
                /** The local Google domain to use to perform the search. */
                googlehost?: string;
                /** Creates a range in form as_nlo value..as_nhi value and attempts to append it to query */
                highRange?: string;
                /** Sets the user interface language. */
                hl?: string;
                /** Appends the extra query terms to the query. */
                hq?: string;
                /** Returns black and white, grayscale, or color images: mono, gray, and color. */
                imgColorType?: string;
                /** Returns images of a specific dominant color: red, orange, yellow, green, teal, blue, purple, pink, white, gray, black and brown. */
                imgDominantColor?: string;
                /** Returns images of a specified size, where size can be one of: icon, small, medium, large, xlarge, xxlarge, and huge. */
                imgSize?: string;
                /** Returns images of a type, which can be one of: clipart, face, lineart, news, and photo. */
                imgType?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** Specifies that all search results should contain a link to a particular URL */
                linkSite?: string;
                /** Creates a range in form as_nlo value..as_nhi value and attempts to append it to query */
                lowRange?: string;
                /** The language restriction for the search results */
                lr?: string;
                /** Number of search results to return */
                num?: number;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /**
                 * Provides additional search terms to check for in a document, where each document in the search results must contain at least one of the additional
                 * search terms
                 */
                orTerms?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Query */
                q: string;
                /** An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
                quotaUser?: string;
                /** Specifies that all search results should be pages that are related to the specified URL */
                relatedSite?: string;
                /**
                 * Filters based on licensing. Supported values include: cc_publicdomain, cc_attribute, cc_sharealike, cc_noncommercial, cc_nonderived and combinations of
                 * these.
                 */
                rights?: string;
                /** Search safety level */
                safe?: string;
                /** Specifies the search type: image. */
                searchType?: string;
                /** Specifies all search results should be pages from a given site */
                siteSearch?: string;
                /** Controls whether to include or exclude results from the site named in the as_sitesearch parameter */
                siteSearchFilter?: string;
                /** The sort expression to apply to the results */
                sort?: string;
                /** The index of the first result to return */
                start?: number;
                /** Deprecated. Please use quotaUser instead. */
                userIp?: string;
            }): Request<Search>;
        }
        interface CseResource {
            /** Returns metadata about the search performed, metadata about the custom search engine used for the search, and the search results. */
            list(request?: {
                /** Data format for the response. */
                alt?: string;
                /** Turns off the translation between zh-CN and zh-TW. */
                c2coff?: string;
                /** Country restrict(s). */
                cr?: string;
                /** The custom search engine ID to scope this search query */
                cx?: string;
                /** Specifies all search results are from a time period */
                dateRestrict?: string;
                /** Identifies a phrase that all documents in the search results must contain */
                exactTerms?: string;
                /** Identifies a word or phrase that should not appear in any documents in the search results */
                excludeTerms?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** Returns images of a specified type. Some of the allowed values are: bmp, gif, png, jpg, svg, pdf, ... */
                fileType?: string;
                /** Controls turning on or off the duplicate content filter. */
                filter?: string;
                /** Geolocation of end user. */
                gl?: string;
                /** The local Google domain to use to perform the search. */
                googlehost?: string;
                /** Creates a range in form as_nlo value..as_nhi value and attempts to append it to query */
                highRange?: string;
                /** Sets the user interface language. */
                hl?: string;
                /** Appends the extra query terms to the query. */
                hq?: string;
                /** Returns black and white, grayscale, or color images: mono, gray, and color. */
                imgColorType?: string;
                /** Returns images of a specific dominant color: red, orange, yellow, green, teal, blue, purple, pink, white, gray, black and brown. */
                imgDominantColor?: string;
                /** Returns images of a specified size, where size can be one of: icon, small, medium, large, xlarge, xxlarge, and huge. */
                imgSize?: string;
                /** Returns images of a type, which can be one of: clipart, face, lineart, news, and photo. */
                imgType?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** Specifies that all search results should contain a link to a particular URL */
                linkSite?: string;
                /** Creates a range in form as_nlo value..as_nhi value and attempts to append it to query */
                lowRange?: string;
                /** The language restriction for the search results */
                lr?: string;
                /** Number of search results to return */
                num?: number;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /**
                 * Provides additional search terms to check for in a document, where each document in the search results must contain at least one of the additional
                 * search terms
                 */
                orTerms?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Query */
                q: string;
                /** An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
                quotaUser?: string;
                /** Specifies that all search results should be pages that are related to the specified URL */
                relatedSite?: string;
                /**
                 * Filters based on licensing. Supported values include: cc_publicdomain, cc_attribute, cc_sharealike, cc_noncommercial, cc_nonderived and combinations of
                 * these.
                 */
                rights?: string;
                /** Search safety level */
                safe?: string;
                /** Specifies the search type: image. */
                searchType?: string;
                /** Specifies all search results should be pages from a given site */
                siteSearch?: string;
                /** Controls whether to include or exclude results from the site named in the as_sitesearch parameter */
                siteSearchFilter?: string;
                /** The sort expression to apply to the results */
                sort?: string;
                /** The index of the first result to return */
                start?: number;
                /** Deprecated. Please use quotaUser instead. */
                userIp?: string;
            }): Request<Search>;
            siterestrict: SiterestrictResource;
        }

        const cse: CseResource;
    }
}
