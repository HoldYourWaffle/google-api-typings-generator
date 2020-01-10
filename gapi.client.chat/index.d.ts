// Type definitions for non-npm package Hangouts Chat API v1 1.0
// Project: https://developers.google.com/hangouts/chat
// Definitions by: Maxim Mazurok <https://github.com/Maxim-Mazurok>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

// IMPORTANT
// This file was generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
// In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
// Generated from: https://chat.googleapis.com/$discovery/rest?version=v1

/// <reference types="gapi.client" />

declare namespace gapi.client {
    /** Load Hangouts Chat API v1 */
    function load(name: "chat", version: "v1"): PromiseLike<void>;
    function load(name: "chat", version: "v1", callback: () => any): void;

    namespace chat {
        interface ActionParameter {
            /** The name of the parameter for the action script. */
            key?: string;
            /** The value of the parameter. */
            value?: string;
        }
        interface ActionResponse {
            /** The type of bot response. */
            type?: string;
            /** URL for users to auth or config. (Only for REQUEST_CONFIG response types.) */
            url?: string;
        }
        interface Annotation {
            /**
             * Length of the substring in the plain-text message body this annotation
             * corresponds to.
             */
            length?: number;
            /**
             * Start index (0-based, inclusive) in the plain-text message body this
             * annotation corresponds to.
             */
            startIndex?: number;
            /** The type of this annotation. */
            type?: string;
            /** The metadata of user mention. */
            userMention?: UserMentionMetadata;
        }
        interface Button {
            /** A button with image and onclick action. */
            imageButton?: ImageButton;
            /** A button with text and onclick action. */
            textButton?: TextButton;
        }
        interface Card {
            /** The actions of this card. */
            cardActions?: CardAction[];
            /** The header of the card. A header usually contains a title and an image. */
            header?: CardHeader;
            /** Name of the card. */
            name?: string;
            /** Sections are separated by a line divider. */
            sections?: Section[];
        }
        interface CardAction {
            /** The label used to be displayed in the action menu item. */
            actionLabel?: string;
            /** The onclick action for this action item. */
            onClick?: OnClick;
        }
        interface CardHeader {
            /** The image's type (e.g. square border or circular border). */
            imageStyle?: string;
            /** The URL of the image in the card header. */
            imageUrl?: string;
            /** The subtitle of the card header. */
            subtitle?: string;
            /**
             * The title must be specified. The header has a fixed height: if both a
             * title and subtitle is specified, each will take up 1 line. If only the
             * title is specified, it will take up both lines.
             */
            title?: string;
        }
        interface DeprecatedEvent {
            /**
             * The form action data associated with an interactive card that was clicked.
             * Only populated for
             * CARD_CLICKED events.
             * See the [Interactive Cards guide](/hangouts/chat/how-tos/cards-onclick) for
             * more information.
             */
            action?: FormAction;
            /**
             * The URL the bot should redirect the user to after they have completed an
             * authorization or configuration flow outside of Hangouts Chat. See the
             * [Authorizing access to 3p services guide](/hangouts/chat/how-tos/auth-3p)
             * for more information.
             */
            configCompleteRedirectUrl?: string;
            /** The timestamp indicating when the event was dispatched. */
            eventTime?: string;
            /** The message that triggered the event, if applicable. */
            message?: Message;
            /** The room or DM in which the event occurred. */
            space?: Space;
            /**
             * The bot-defined key for the thread related to the event. See the
             * thread_key field of the
             * `spaces.message.create` request for more information.
             */
            threadKey?: string;
            /**
             * A secret value that bots can use to verify if a request is from Google. The
             * token is randomly generated by Google, remains static, and can be obtained
             * from the Hangouts Chat API configuration page in the Cloud Console.
             * Developers can revoke/regenerate it if needed from the same page.
             */
            token?: string;
            /** The type of the event. */
            type?: string;
            /** The user that triggered the event. */
            user?: User;
        }
        // tslint:disable-next-line:no-empty-interface
        interface Empty {
        }
        interface FormAction {
            /**
             * Apps Script function to invoke when the containing element is
             * clicked/activated.
             */
            actionMethodName?: string;
            /** List of action parameters. */
            parameters?: ActionParameter[];
        }
        interface Image {
            /** The aspect ratio of this image (width/height). */
            aspectRatio?: number;
            /** The URL of the image. */
            imageUrl?: string;
            /** The onclick action. */
            onClick?: OnClick;
        }
        interface ImageButton {
            /**
             * The icon specified by an enum that indices to an icon provided by Chat
             * API.
             */
            icon?: string;
            /** The icon specified by a URL. */
            iconUrl?: string;
            /**
             * The name of this image_button which will be used for accessibility.
             * Default value will be provided if developers don't specify.
             */
            name?: string;
            /** The onclick action. */
            onClick?: OnClick;
        }
        interface KeyValue {
            /** The text of the bottom label. Formatted text supported. */
            bottomLabel?: string;
            /** A button that can be clicked to trigger an action. */
            button?: Button;
            /** The text of the content. Formatted text supported and always required. */
            content?: string;
            /** If the content should be multiline. */
            contentMultiline?: boolean;
            /**
             * An enum value that will be replaced by the Chat API with the
             * corresponding icon image.
             */
            icon?: string;
            /** The icon specified by a URL. */
            iconUrl?: string;
            /**
             * The onclick action. Only the top label, bottom label and content region
             * are clickable.
             */
            onClick?: OnClick;
            /** The text of the top label. Formatted text supported. */
            topLabel?: string;
        }
        interface ListMembershipsResponse {
            /** List of memberships in the requested (or first) page. */
            memberships?: Membership[];
            /**
             * Continuation token to retrieve the next page of results. It will be empty
             * for the last page of results.
             */
            nextPageToken?: string;
        }
        interface ListSpacesResponse {
            /**
             * Continuation token to retrieve the next page of results. It will be empty
             * for the last page of results. Tokens expire in an hour. An error is thrown
             * if an expired token is passed.
             */
            nextPageToken?: string;
            /** List of spaces in the requested (or first) page. */
            spaces?: Space[];
        }
        interface Membership {
            /**
             * The creation time of the membership a.k.a the time at which the member
             * joined the space, if applicable.
             */
            createTime?: string;
            /** Member details. */
            member?: User;
            /**
             * Resource name of the membership, in the form "spaces/&#42;/members/&#42;".
             *
             * Example: spaces/AAAAMpdlehY/members/105115627578887013105
             */
            name?: string;
            /** State of the membership. */
            state?: string;
        }
        interface Message {
            /**
             * Input only. Parameters that a bot can use to configure how its response is
             * posted.
             */
            actionResponse?: ActionResponse;
            /** Output only. Annotations associated with the text in this message. */
            annotations?: Annotation[];
            /** Plain-text body of the message with all bot mentions stripped out. */
            argumentText?: string;
            /**
             * Rich, formatted and interactive cards that can be used to display UI
             * elements such as: formatted texts, buttons, clickable images. Cards are
             * normally displayed below the plain-text body of the message.
             */
            cards?: Card[];
            /**
             * Output only. The time at which the message was created in Hangouts Chat
             * server.
             */
            createTime?: string;
            /**
             * A plain-text description of the message's cards, used when the actual cards
             * cannot be displayed (e.g. mobile notifications).
             */
            fallbackText?: string;
            /**
             * Resource name, in the form "spaces/&#42;/messages/&#42;".
             *
             * Example: spaces/AAAAMpdlehY/messages/UMxbHmzDlr4.UMxbHmzDlr4
             */
            name?: string;
            /**
             * Text for generating preview chips. This text will not be displayed to the
             * user, but any links to images, web pages, videos, etc. included here will
             * generate preview chips.
             */
            previewText?: string;
            /** The user who created the message. */
            sender?: User;
            /** The space the message belongs to. */
            space?: Space;
            /** Plain-text body of the message. */
            text?: string;
            /** The thread the message belongs to. */
            thread?: Thread;
        }
        interface OnClick {
            /** A form action will be trigger by this onclick if specified. */
            action?: FormAction;
            /** This onclick triggers an open link action if specified. */
            openLink?: OpenLink;
        }
        interface OpenLink {
            /** The URL to open. */
            url?: string;
        }
        interface Section {
            /** The header of the section, text formatted supported. */
            header?: string;
            /** A section must contain at least 1 widget. */
            widgets?: WidgetMarkup[];
        }
        interface Space {
            /** Output only. The display name (only if the space is a room). */
            displayName?: string;
            /**
             * Resource name of the space, in the form "spaces/&#42;".
             *
             * Example: spaces/AAAAMpdlehYs
             */
            name?: string;
            /** Output only. The type of a space. */
            type?: string;
        }
        interface TextButton {
            /** The onclick action of the button. */
            onClick?: OnClick;
            /** The text of the button. */
            text?: string;
        }
        interface TextParagraph {
            text?: string;
        }
        interface Thread {
            /**
             * Resource name, in the form "spaces/&#42;/threads/&#42;".
             *
             * Example: spaces/AAAAMpdlehY/threads/UMxbHmzDlr4
             */
            name?: string;
        }
        interface User {
            /** The user's display name. */
            displayName?: string;
            /** Resource name, in the format "users/&#42;". */
            name?: string;
            /** User type. */
            type?: string;
        }
        interface UserMentionMetadata {
            /** The type of user mention. */
            type?: string;
            /** The user mentioned. */
            user?: User;
        }
        interface WidgetMarkup {
            /**
             * A list of buttons. Buttons is also oneof data and only one of these
             * fields should be set.
             */
            buttons?: Button[];
            /** Display an image in this widget. */
            image?: Image;
            /** Display a key value item in this widget. */
            keyValue?: KeyValue;
            /** Display a text paragraph in this widget. */
            textParagraph?: TextParagraph;
        }
        interface MembersResource {
            /** Returns a membership. */
            get(request: {
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
                 * Required. Resource name of the membership to be retrieved, in the form
                 * "spaces/&#42;/members/&#42;".
                 *
                 * Example: spaces/AAAAMpdlehY/members/105115627578887013105
                 */
                name: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
            }): Request<Membership>;
            /** Lists human memberships in a space. */
            list(request: {
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
                 * Requested page size. The value is capped at 1000.
                 * Server may return fewer results than requested.
                 * If unspecified, server will default to 100.
                 */
                pageSize?: number;
                /** A token identifying a page of results the server should return. */
                pageToken?: string;
                /**
                 * Required. The resource name of the space for which membership list is to be
                 * fetched, in the form "spaces/&#42;".
                 *
                 * Example: spaces/AAAAMpdlehY
                 */
                parent: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
            }): Request<ListMembershipsResponse>;
        }
        interface MessagesResource {
            /** Creates a message. */
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
                 * Required. Space resource name, in the form "spaces/&#42;".
                 * Example: spaces/AAAAMpdlehY
                 */
                parent: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /**
                 * Opaque thread identifier string that can be specified to group messages
                 * into a single thread. If this is the first message with a given thread
                 * identifier, a new thread is created. Subsequent messages with the same
                 * thread identifier will be posted into the same thread. This relieves bots
                 * and webhooks from having to store the Hangouts Chat thread ID of a thread (created earlier by them) to post
                 * further updates to it.
                 *
                 * Has no effect if thread field,
                 * corresponding to an existing thread, is set in message.
                 */
                threadKey?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Request body */
                resource: Message;
            }): Request<Message>;
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
                 * Required. Space resource name, in the form "spaces/&#42;".
                 * Example: spaces/AAAAMpdlehY
                 */
                parent: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /**
                 * Opaque thread identifier string that can be specified to group messages
                 * into a single thread. If this is the first message with a given thread
                 * identifier, a new thread is created. Subsequent messages with the same
                 * thread identifier will be posted into the same thread. This relieves bots
                 * and webhooks from having to store the Hangouts Chat thread ID of a thread (created earlier by them) to post
                 * further updates to it.
                 *
                 * Has no effect if thread field,
                 * corresponding to an existing thread, is set in message.
                 */
                threadKey?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
            },
            body: Message): Request<Message>;
            /** Deletes a message. */
            delete(request: {
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
                 * Required. Resource name of the message to be deleted, in the form
                 * "spaces/&#42;/messages/&#42;"
                 *
                 * Example: spaces/AAAAMpdlehY/messages/UMxbHmzDlr4.UMxbHmzDlr4
                 */
                name: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
            }): Request<{}>;
            /** Returns a message. */
            get(request: {
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
                 * Required. Resource name of the message to be retrieved, in the form
                 * "spaces/&#42;/messages/&#42;".
                 *
                 * Example: spaces/AAAAMpdlehY/messages/UMxbHmzDlr4.UMxbHmzDlr4
                 */
                name: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
            }): Request<Message>;
            /** Updates a message. */
            update(request: {
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
                 * Resource name, in the form "spaces/&#42;/messages/&#42;".
                 *
                 * Example: spaces/AAAAMpdlehY/messages/UMxbHmzDlr4.UMxbHmzDlr4
                 */
                name: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /**
                 * Required. The field paths to be updated, comma separated if there are
                 * multiple.
                 *
                 * Currently supported field paths:
                 * &#42; text
                 * &#42; cards
                 */
                updateMask?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Request body */
                resource: Message;
            }): Request<Message>;
            update(request: {
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
                 * Resource name, in the form "spaces/&#42;/messages/&#42;".
                 *
                 * Example: spaces/AAAAMpdlehY/messages/UMxbHmzDlr4.UMxbHmzDlr4
                 */
                name: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /**
                 * Required. The field paths to be updated, comma separated if there are
                 * multiple.
                 *
                 * Currently supported field paths:
                 * &#42; text
                 * &#42; cards
                 */
                updateMask?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
            },
            body: Message): Request<Message>;
        }
        interface SpacesResource {
            /** Returns a space. */
            get(request: {
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
                 * Required. Resource name of the space, in the form "spaces/&#42;".
                 *
                 * Example: spaces/AAAAMpdlehY
                 */
                name: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
            }): Request<Space>;
            /** Lists spaces the caller is a member of. */
            list(request: {
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
                 * Requested page size. The value is capped at 1000.
                 * Server may return fewer results than requested.
                 * If unspecified, server will default to 100.
                 */
                pageSize?: number;
                /** A token identifying a page of results the server should return. */
                pageToken?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
            }): Request<ListSpacesResponse>;
            members: MembersResource;
            messages: MessagesResource;
        }

        const spaces: SpacesResource;
    }
}
