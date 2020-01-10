/* This is stub file for gapi.client.servicebroker definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
**/
gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('servicebroker', 'v1', () => {
        /** now we can use gapi.client.servicebroker */

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
         * Gets the access control policy for a resource.
         * Returns an empty policy if the resource exists and does not have a policy
         * set.
         */
        await gapi.client.servicebroker.v1.getIamPolicy({
            "options.requestedPolicyVersion": 42,
            resource: "Test string",
        });
        /**
         * Sets the access control policy on the specified resource. Replaces any
         * existing policy.
         *
         * Can return Public Errors: NOT_FOUND, INVALID_ARGUMENT and PERMISSION_DENIED
         */
        await gapi.client.servicebroker.v1.setIamPolicy({
            resource: "Test string",
        }, {
            policy: {
                bindings: [
                    {
                        condition: {
                            description: "Test string",
                            expression: "Test string",
                            location: "Test string",
                            title: "Test string",
                        },
                        members: [
                            "Test string"                        ],
                        role: "Test string",
                    }                ],
                etag: "Test string",
                version: 42,
            },
        });
        /**
         * Returns permissions that a caller has on the specified resource.
         * If the resource does not exist, this will return an empty set of
         * permissions, not a NOT_FOUND error.
         *
         * Note: This operation is designed to be used for building permission-aware
         * UIs and command-line tools, not for authorization checking. This operation
         * may "fail open" without warning.
         */
        await gapi.client.servicebroker.v1.testIamPermissions({
            resource: "Test string",
        }, {
            permissions: [
                "Test string"            ],
        });
    }
});
