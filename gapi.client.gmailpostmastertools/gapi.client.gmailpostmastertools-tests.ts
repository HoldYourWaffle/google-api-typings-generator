/* This is stub file for gapi.client.gmailpostmastertools definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
**/
gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('gmailpostmastertools', 'v1beta1', () => {
        /** now we can use gapi.client.gmailpostmastertools */

        run();
    });

    async function run() {
        /**
         * Gets a specific domain registered by the client.
         * Returns NOT_FOUND if the domain does not exist.
         */
        await gapi.client.gmailpostmastertools.domains.get({
            name: "Test string",
        });
        /**
         * Get traffic statistics for a domain on a specific date.
         * Returns PERMISSION_DENIED if user does not have permission to access
         * TrafficStats for the domain.
         */
        await gapi.client.gmailpostmastertools.domains.trafficStats.get({
            name: "Test string",
        });
        /**
         * List traffic statistics for all available days.
         * Returns PERMISSION_DENIED if user does not have permission to access
         * TrafficStats for the domain.
         */
        await gapi.client.gmailpostmastertools.domains.trafficStats.list({
            "endDate.day": 42,
            "endDate.month": 42,
            "endDate.year": 42,
            pageSize: 42,
            pageToken: "Test string",
            parent: "Test string",
            "startDate.day": 42,
            "startDate.month": 42,
            "startDate.year": 42,
        });
        /**
         * Lists the domains that have been registered by the client. The order of
         * domains in the response is unspecified and non-deterministic. Newly created
         * domains will not necessarily be added to the end of this list.
         */
        await gapi.client.gmailpostmastertools.domains.list({
            pageSize: 42,
            pageToken: "Test string",
        });
        /**
         * Get traffic statistics for a domain on a specific date.
         * Returns PERMISSION_DENIED if user does not have permission to access
         * TrafficStats for the domain.
         */
        await gapi.client.gmailpostmastertools.domains.trafficStats.get({
            name: "Test string",
        });
        /**
         * List traffic statistics for all available days.
         * Returns PERMISSION_DENIED if user does not have permission to access
         * TrafficStats for the domain.
         */
        await gapi.client.gmailpostmastertools.domains.trafficStats.list({
            "endDate.day": 42,
            "endDate.month": 42,
            "endDate.year": 42,
            pageSize: 42,
            pageToken: "Test string",
            parent: "Test string",
            "startDate.day": 42,
            "startDate.month": 42,
            "startDate.year": 42,
        });
    }
});
