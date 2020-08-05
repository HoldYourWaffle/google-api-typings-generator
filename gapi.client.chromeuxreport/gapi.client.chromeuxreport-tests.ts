/* This is stub file for gapi.client.chromeuxreport definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
**/
gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('chromeuxreport', 'v1', () => {
        /** now we can use gapi.client.chromeuxreport */

        run();
    });

    async function run() {
        /**
         * Queries the Chrome User Experience for a single `record` for a given site. Returns a `record` that contains one or more `metrics` corresponding to
         * performance data about the requested site.
         */
        await gapi.client.chromeuxreport.records.queryRecord({
        }, {
            effectiveConnectionType: "Test string",
            formFactor: "Test string",
            metrics: [
                "Test string"            ],
            origin: "Test string",
            url: "Test string",
        });
    }
});
