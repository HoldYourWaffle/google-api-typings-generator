// Type definitions for non-npm package HomeGraph API v1 1.0
// Project: https://developers.google.com/actions/smarthome/create-app#request-sync
// Definitions by: Maxim Mazurok <https://github.com/Maxim-Mazurok>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

// IMPORTANT
// This file was generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
// In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
// Generated from: https://homegraph.googleapis.com/$discovery/rest?version=v1
// Revision: 20200219

/// <reference types="gapi.client" />

declare namespace gapi.client {
    /** Load HomeGraph API v1 */
    function load(name: "homegraph", version: "v1"): PromiseLike<void>;
    function load(name: "homegraph", version: "v1", callback: () => any): void;

    namespace homegraph {
        interface AgentDeviceId {
            /** Third-party partner's device ID. */
            id?: string;
        }
        interface AgentOtherDeviceId {
            /** The agent's ID. Generally it is the agent's AoG project id. */
            agentId?: string;
            /** Device ID defined by the agent. The device_id must be unique. */
            deviceId?: string;
        }
        interface Device {
            /** Attributes for the traits supported by the device. */
            attributes?: Record<string, any>;
            /**
             * Custom JSON data provided by the manufacturer and attached to QUERY and
             * EXECUTE requests in AoG.
             */
            customData?: Record<string, any>;
            /** Device manufacturer, model, hardware version, and software version. */
            deviceInfo?: DeviceInfo;
            /** Third-party partner's device ID. */
            id?: string;
            /**
             * Name of the device given by the third party. This includes names given to
             * the device via third party device manufacturer's app, model names for the
             * device, etc.
             */
            name?: DeviceNames;
            /**
             * Indicates whether the device is capable of sending notifications. This
             * field will be set by the agent (partner) on an incoming SYNC. If a device
             * is not capable of generating notifications, the partner should set this
             * flag to false. If a partner is not capable of calling
             * ReportStateAndNotification to send notifications to Google, the partner
             * should set this flag to false. If there is a user setting in the partner
             * app to enable notifications and it is turned off, the partner should set
             * this flag to false.
             */
            notificationSupportedByAgent?: boolean;
            /**
             * IDs of other devices associated with this device. This is used to
             * represent a device group (e.g. bonded zone) or "facets" synced
             * through different flows (e.g. Google Nest Hub Max with a Nest Camera).
             *
             * This may also be used to pass in alternate IDs used to identify a cloud
             * synced device for local execution (i.e. local verification). If used for
             * local verification, this field is synced from the cloud.
             */
            otherDeviceIds?: AgentOtherDeviceId[];
            /**
             * If the third-party partner's cloud configuration includes placing devices
             * in rooms, the name of the room can be provided here.
             */
            roomHint?: string;
            /** As in roomHint, for structures that users set up in the partner's system. */
            structureHint?: string;
            /** Traits supported by the device. */
            traits?: string[];
            /** Hardware type of the device (e.g. light, outlet, etc). */
            type?: string;
            /**
             * Indicates whether the state of this device is being reported to Google
             * through ReportStateAndNotification call.
             */
            willReportState?: boolean;
        }
        interface DeviceInfo {
            /** Device hardware version. */
            hwVersion?: string;
            /** Device manufacturer. */
            manufacturer?: string;
            /** Device model. */
            model?: string;
            /** Device software version. */
            swVersion?: string;
        }
        interface DeviceNames {
            /**
             * List of names provided by the partner rather than the user, often
             * manufacturer names, SKUs, etc.
             */
            defaultNames?: string[];
            /** Primary name of the device, generally provided by the user. */
            name?: string;
            /** Additional names provided by the user for the device. */
            nicknames?: string[];
        }
        // tslint:disable-next-line:no-empty-interface
        interface Empty {
        }
        interface QueryRequest {
            /** Required. Third-party user ID. */
            agentUserId?: string;
            /**
             * Required. Inputs containing third-party partner's device IDs for which to
             * get the device states.
             */
            inputs?: QueryRequestInput[];
            /** Request ID used for debugging. */
            requestId?: string;
        }
        interface QueryRequestInput {
            /** Payload containing third-party partner's device IDs. */
            payload?: QueryRequestPayload;
        }
        interface QueryRequestPayload {
            /** Third-party partner's device IDs for which to get the device states. */
            devices?: AgentDeviceId[];
        }
        interface QueryResponse {
            /** Device states for the devices given in the request. */
            payload?: QueryResponsePayload;
            /** Request ID used for debugging. Copied from the request. */
            requestId?: string;
        }
        interface QueryResponsePayload {
            /**
             * States of the devices. Map of third-party device ID to struct of device
             * states.
             */
            devices?: Record<string, Record<string, any>>;
        }
        interface ReportStateAndNotificationDevice {
            /** Notifications metadata for devices. */
            notifications?: Record<string, any>;
            /** States of devices to update. */
            states?: Record<string, any>;
        }
        interface ReportStateAndNotificationRequest {
            /** Required. Third-party user ID. */
            agentUserId?: string;
            /** Unique identifier per event (for example, a doorbell press). */
            eventId?: string;
            /** Token to maintain state in the follow up notification response. */
            followUpToken?: string;
            /**
             * Required. State of devices to update and notification metadata for devices. For
             * example, if a user turns a light on manually, a state update should be
             * sent so that the information is always the current status of the device.
             * Notifications are independent from the state and its piece of the payload
             * should contain everything necessary to notify the user. Although it may be
             * related to a state change, it does not need to be. For example, if a
             * device can turn on/off and change temperature, the states reported would
             * include both "on" and "70 degrees" but the 3p may choose not to send any
             * notification for that, or to only say that the "the room is heating up",
             * keeping state and notification independent.
             */
            payload?: StateAndNotificationPayload;
            /** Request ID used for debugging. */
            requestId?: string;
        }
        interface ReportStateAndNotificationResponse {
            /** Request ID copied from ReportStateAndNotificationRequest. */
            requestId?: string;
        }
        interface RequestSyncDevicesRequest {
            /**
             * Required. Third-party user ID issued by agent's third-party identity
             * provider.
             */
            agentUserId?: string;
            /**
             * Optional. If set, the request will be added to a queue and a response will
             * be returned immediately. The queue allows for de-duplication of
             * simultaneous requests.
             */
            async?: boolean;
        }
        // tslint:disable-next-line:no-empty-interface
        interface RequestSyncDevicesResponse {
        }
        interface StateAndNotificationPayload {
            /** The devices for updating state and sending notifications. */
            devices?: ReportStateAndNotificationDevice;
        }
        interface SyncRequest {
            /** Required. Third-party user ID. */
            agentUserId?: string;
            /** Request ID used for debugging. */
            requestId?: string;
        }
        interface SyncResponse {
            /** Devices associated with the third-party user. */
            payload?: SyncResponsePayload;
            /** Request ID used for debugging. Copied from the request. */
            requestId?: string;
        }
        interface SyncResponsePayload {
            /** Third-party user ID */
            agentUserId?: string;
            /** Devices associated with the third-party user. */
            devices?: Device[];
        }
        interface AgentUsersResource {
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
            delete(request?: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Required. Third-party user ID. */
                agentUserId: string;
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
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Request ID used for debugging. */
                requestId?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            }): Request<{}>;
        }
        interface DevicesResource {
            /**
             * Gets the device states for the devices in QueryRequest.
             * The third-party user's identity is passed in as `agent_user_id`. The agent
             * is identified by the JWT signed by the third-party partner's service
             * account.
             */
            query(request: {
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
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Request body */
                resource: QueryRequest;
            }): Request<QueryResponse>;
            query(request: {
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
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            },
            body: QueryRequest): Request<QueryResponse>;
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
            reportStateAndNotification(request: {
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
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Request body */
                resource: ReportStateAndNotificationRequest;
            }): Request<ReportStateAndNotificationResponse>;
            reportStateAndNotification(request: {
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
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            },
            body: ReportStateAndNotificationRequest): Request<ReportStateAndNotificationResponse>;
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
            requestSync(request: {
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
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Request body */
                resource: RequestSyncDevicesRequest;
            }): Request<{}>;
            requestSync(request: {
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
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            },
            body: RequestSyncDevicesRequest): Request<{}>;
            /**
             * Gets all the devices associated with the given third-party user.
             * The third-party user's identity is passed in as `agent_user_id`. The agent
             * is identified by the JWT signed by the third-party partner's service
             * account.
             */
            sync(request: {
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
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Request body */
                resource: SyncRequest;
            }): Request<SyncResponse>;
            sync(request: {
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
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            },
            body: SyncRequest): Request<SyncResponse>;
        }

        const agentUsers: AgentUsersResource;

        const devices: DevicesResource;
    }
}
