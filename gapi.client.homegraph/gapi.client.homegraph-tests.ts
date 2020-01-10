/* This is stub file for gapi.client.homegraph definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
**/
gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('homegraph', 'v1', () => {
        /** now we can use gapi.client.homegraph */

        run();
    });

    async function run() {
        /**
         * Unlinks an agent user from Google. As a result, all data related to this
         * user will be deleted.
         *
         * Here is how the agent user is created in Google:
         *
         * 1.  When a user opens their Google Home App, they can begin linking a 3p
         * partner.
         * 2.  User is guided through the OAuth process.
         * 3.  After entering the 3p credentials, Google gets the 3p OAuth token and
         * uses it to make a Sync call to the 3p partner and gets back all of the
         * user's data, including `agent_user_id` and devices.
         * 4.  Google creates the agent user and stores a mapping from the
         * `agent_user_id` -> Google ID mapping. Google also
         * stores all of the user's devices under that Google ID.
         *
         * The mapping from `agent_user_id` to Google ID is many to many, since one
         * Google user can have multiple 3p accounts, and multiple Google users can
         * map to one `agent_user_id` (e.g., a husband and wife share one Nest account
         * username/password).
         *
         * The third-party user's identity is passed in as `agent_user_id`.
         * The agent is identified by the JWT signed by the partner's service account.
         *
         * Note: Special characters (except "/") in `agent_user_id` must be
         * URL-encoded.
         */
        await gapi.client.homegraph.agentUsers.delete({
            agentUserId: "Test string",
            requestId: "Test string",
        });
        /**
         * Gets the device states for the devices in QueryRequest.
         * The third-party user's identity is passed in as `agent_user_id`. The agent
         * is identified by the JWT signed by the third-party partner's service
         * account.
         */
        await gapi.client.homegraph.devices.query({
        }, {
            agentUserId: "Test string",
            inputs: [
                {
                    payload: {
                        devices: [
                            {
                                id: "Test string",
                            }                        ],
                    },
                }            ],
            requestId: "Test string",
        });
        /**
         * Reports device state and optionally sends device notifications. Called by
         * an agent when the device state of a third-party changes or the agent wants
         * to send a notification about the device. See
         * [Implement Report State](/actions/smarthome/report-state) for more
         * information.
         * This method updates a predefined set of states for a device, which all
         * devices have according to their prescribed traits (for example, a light
         * will have the [OnOff](/actions/smarthome/traits/onoff) trait that reports
         * the state `on` as a boolean value).
         * A new state may not be created and an INVALID_ARGUMENT code will be thrown
         * if so. It also optionally takes in a list of Notifications that may be
         * created, which are associated to this state change.
         *
         * The third-party user's identity is passed in as `agent_user_id`.
         * The agent is identified by the JWT signed by the partner's service account.
         */
        await gapi.client.homegraph.devices.reportStateAndNotification({
        }, {
            agentUserId: "Test string",
            eventId: "Test string",
            followUpToken: "Test string",
            payload: {
                devices: {
                    notifications: {
                        A: 42                    },
                    states: {
                        A: 42                    },
                },
            },
            requestId: "Test string",
        });
        /**
         * Requests a `SYNC` call from Google to a 3p partner's home control agent for
         * a user.
         *
         *
         * The third-party user's identity is passed in as `agent_user_id`
         * (see RequestSyncDevicesRequest) and forwarded back to the agent.
         * The agent is identified by the API key or JWT signed by the partner's
         * service account.
         */
        await gapi.client.homegraph.devices.requestSync({
        }, {
            agentUserId: "Test string",
            async: true,
        });
        /**
         * Gets all the devices associated with the given third-party user.
         * The third-party user's identity is passed in as `agent_user_id`. The agent
         * is identified by the JWT signed by the third-party partner's service
         * account.
         */
        await gapi.client.homegraph.devices.sync({
        }, {
            agentUserId: "Test string",
            requestId: "Test string",
        });
    }
});
