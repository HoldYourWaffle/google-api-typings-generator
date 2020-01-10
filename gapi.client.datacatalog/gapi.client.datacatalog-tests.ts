/* This is stub file for gapi.client.datacatalog definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
**/
gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('datacatalog', 'v1beta1', () => {
        /** now we can use gapi.client.datacatalog */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [
            /** View and manage your data across Google Cloud Platform services */
            'https://www.googleapis.com/auth/cloud-platform',
        ];
        const immediate = false;
        gapi.auth.authorize({ client_id, scope, immediate }, authResult => {
            if (authResult && !authResult.error) {
                /** handle successful authorization */
                run();
            } else {
                /** handle authorization error */
            }
        });
    });

    async function run() {
        /**
         * Searches Data Catalog for multiple resources like entries, tags that
         * match a query.
         *
         * This is a custom method
         * (https://cloud.google.com/apis/design/custom_methods) and does not return
         * the complete resource, only the resource identifier and high level
         * fields. Clients can subsequentally call `Get` methods.
         *
         * Note that searches do not have full recall. There may be results that match
         * your query but are not returned, even in subsequent pages of results. These
         * missing results may vary across repeated calls to search. Do not rely on
         * this method if you need to guarantee full recall.
         *
         * See [Data Catalog Search
         * Syntax](/data-catalog/docs/how-to/search-reference) for more information.
         */
        await gapi.client.datacatalog.catalog.search({
        }, {
            orderBy: "Test string",
            pageSize: 42,
            pageToken: "Test string",
            query: "Test string",
            scope: {
                includeGcpPublicDatasets: true,
                includeOrgIds: [
                    "Test string"                ],
                includeProjectIds: [
                    "Test string"                ],
            },
        });
        /**
         * Get an entry by target resource name. This method allows clients to use
         * the resource name from the source Google Cloud Platform service to get the
         * Data Catalog Entry.
         */
        await gapi.client.datacatalog.entries.lookup({
            linkedResource: "Test string",
            sqlResource: "Test string",
        });
    }
});
