/* This is stub file for gapi.client.bigquerydatatransfer definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
**/
gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('bigquerydatatransfer', 'v1', () => {
        /** now we can use gapi.client.bigquerydatatransfer */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [
            /** View and manage your data in Google BigQuery */
            'https://www.googleapis.com/auth/bigquery',
            /** View your data in Google BigQuery */
            'https://www.googleapis.com/auth/bigquery.readonly',
            /** View and manage your data across Google Cloud Platform services */
            'https://www.googleapis.com/auth/cloud-platform',
            /** View your data across Google Cloud Platform services */
            'https://www.googleapis.com/auth/cloud-platform.read-only',
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
    }
});