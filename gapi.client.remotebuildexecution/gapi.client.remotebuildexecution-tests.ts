/* This is stub file for gapi.client.remotebuildexecution definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
**/
gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('remotebuildexecution', 'v2', () => {
        /** now we can use gapi.client.remotebuildexecution */

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
         * Retrieve a cached execution result.
         *
         * Implementations SHOULD ensure that any blobs referenced from the
         * ContentAddressableStorage
         * are available at the time of returning the
         * ActionResult and will be
         * for some period of time afterwards. The TTLs of the referenced blobs SHOULD be increased
         * if necessary and applicable.
         *
         * Errors:
         *
         * &#42; `NOT_FOUND`: The requested `ActionResult` is not in the cache.
         */
        await gapi.client.remotebuildexecution.actionResults.get({
            hash: "Test string",
            inlineOutputFiles: "Test string",
            inlineStderr: true,
            inlineStdout: true,
            instanceName: "Test string",
            sizeBytes: "Test string",
        });
        /**
         * Upload a new execution result.
         *
         * In order to allow the server to perform access control based on the type of
         * action, and to assist with client debugging, the client MUST first upload
         * the Action that produced the
         * result, along with its
         * Command, into the
         * `ContentAddressableStorage`.
         *
         * Errors:
         *
         * &#42; `INVALID_ARGUMENT`: One or more arguments are invalid.
         * &#42; `FAILED_PRECONDITION`: One or more errors occurred in updating the
         * action result, such as a missing command or action.
         * &#42; `RESOURCE_EXHAUSTED`: There is insufficient storage space to add the
         * entry to the cache.
         */
        await gapi.client.remotebuildexecution.actionResults.update({
            hash: "Test string",
            instanceName: "Test string",
            "resultsCachePolicy.priority": 42,
            sizeBytes: "Test string",
        }, {
            executionMetadata: {
                executionCompletedTimestamp: "Test string",
                executionStartTimestamp: "Test string",
                inputFetchCompletedTimestamp: "Test string",
                inputFetchStartTimestamp: "Test string",
                outputUploadCompletedTimestamp: "Test string",
                outputUploadStartTimestamp: "Test string",
                queuedTimestamp: "Test string",
                worker: "Test string",
                workerCompletedTimestamp: "Test string",
                workerStartTimestamp: "Test string",
            },
            exitCode: 42,
            outputDirectories: [
                {
                    path: "Test string",
                    treeDigest: {
                        hash: "Test string",
                        sizeBytes: "Test string",
                    },
                }            ],
            outputDirectorySymlinks: [
                {
                    path: "Test string",
                    target: "Test string",
                }            ],
            outputFileSymlinks: [
                {
                    path: "Test string",
                    target: "Test string",
                }            ],
            outputFiles: [
                {
                    contents: "Test string",
                    digest: {
                        hash: "Test string",
                        sizeBytes: "Test string",
                    },
                    isExecutable: true,
                    path: "Test string",
                }            ],
            stderrDigest: {
                hash: "Test string",
                sizeBytes: "Test string",
            },
            stderrRaw: "Test string",
            stdoutDigest: {
                hash: "Test string",
                sizeBytes: "Test string",
            },
            stdoutRaw: "Test string",
        });
        /**
         * Execute an action remotely.
         *
         * In order to execute an action, the client must first upload all of the
         * inputs, the
         * Command to run, and the
         * Action into the
         * ContentAddressableStorage.
         * It then calls `Execute` with an `action_digest` referring to them. The
         * server will run the action and eventually return the result.
         *
         * The input `Action`'s fields MUST meet the various canonicalization
         * requirements specified in the documentation for their types so that it has
         * the same digest as other logically equivalent `Action`s. The server MAY
         * enforce the requirements and return errors if a non-canonical input is
         * received. It MAY also proceed without verifying some or all of the
         * requirements, such as for performance reasons. If the server does not
         * verify the requirement, then it will treat the `Action` as distinct from
         * another logically equivalent action if they hash differently.
         *
         * Returns a stream of
         * google.longrunning.Operation messages
         * describing the resulting execution, with eventual `response`
         * ExecuteResponse. The
         * `metadata` on the operation is of type
         * ExecuteOperationMetadata.
         *
         * If the client remains connected after the first response is returned after
         * the server, then updates are streamed as if the client had called
         * WaitExecution
         * until the execution completes or the request reaches an error. The
         * operation can also be queried using Operations
         * API.
         *
         * The server NEED NOT implement other methods or functionality of the
         * Operations API.
         *
         * Errors discovered during creation of the `Operation` will be reported
         * as gRPC Status errors, while errors that occurred while running the
         * action will be reported in the `status` field of the `ExecuteResponse`. The
         * server MUST NOT set the `error` field of the `Operation` proto.
         * The possible errors include:
         *
         * &#42; `INVALID_ARGUMENT`: One or more arguments are invalid.
         * &#42; `FAILED_PRECONDITION`: One or more errors occurred in setting up the
         * action requested, such as a missing input or command or no worker being
         * available. The client may be able to fix the errors and retry.
         * &#42; `RESOURCE_EXHAUSTED`: There is insufficient quota of some resource to run
         * the action.
         * &#42; `UNAVAILABLE`: Due to a transient condition, such as all workers being
         * occupied (and the server does not support a queue), the action could not
         * be started. The client should retry.
         * &#42; `INTERNAL`: An internal error occurred in the execution engine or the
         * worker.
         * &#42; `DEADLINE_EXCEEDED`: The execution timed out.
         * &#42; `CANCELLED`: The operation was cancelled by the client. This status is
         * only possible if the server implements the Operations API CancelOperation
         * method, and it was called for the current execution.
         *
         * In the case of a missing input or command, the server SHOULD additionally
         * send a PreconditionFailure error detail
         * where, for each requested blob not present in the CAS, there is a
         * `Violation` with a `type` of `MISSING` and a `subject` of
         * `"blobs/{hash}/{size}"` indicating the digest of the missing blob.
         */
        await gapi.client.remotebuildexecution.actions.execute({
            instanceName: "Test string",
        }, {
            actionDigest: {
                hash: "Test string",
                sizeBytes: "Test string",
            },
            executionPolicy: {
                priority: 42,
            },
            resultsCachePolicy: {
                priority: 42,
            },
            skipCacheLookup: true,
        });
        /**
         * Download many blobs at once.
         *
         * The server may enforce a limit of the combined total size of blobs
         * to be downloaded using this API. This limit may be obtained using the
         * Capabilities API.
         * Requests exceeding the limit should either be split into smaller
         * chunks or downloaded using the
         * ByteStream API, as appropriate.
         *
         * This request is equivalent to calling a Bytestream `Read` request
         * on each individual blob, in parallel. The requests may succeed or fail
         * independently.
         *
         * Errors:
         *
         * &#42; `INVALID_ARGUMENT`: The client attempted to read more than the
         * server supported limit.
         *
         * Every error on individual read will be returned in the corresponding digest
         * status.
         */
        await gapi.client.remotebuildexecution.blobs.batchRead({
            instanceName: "Test string",
        }, {
            digests: [
                {
                    hash: "Test string",
                    sizeBytes: "Test string",
                }            ],
        });
        /**
         * Upload many blobs at once.
         *
         * The server may enforce a limit of the combined total size of blobs
         * to be uploaded using this API. This limit may be obtained using the
         * Capabilities API.
         * Requests exceeding the limit should either be split into smaller
         * chunks or uploaded using the
         * ByteStream API, as appropriate.
         *
         * This request is equivalent to calling a Bytestream `Write` request
         * on each individual blob, in parallel. The requests may succeed or fail
         * independently.
         *
         * Errors:
         *
         * &#42; `INVALID_ARGUMENT`: The client attempted to upload more than the
         * server supported limit.
         *
         * Individual requests may return the following errors, additionally:
         *
         * &#42; `RESOURCE_EXHAUSTED`: There is insufficient disk quota to store the blob.
         * &#42; `INVALID_ARGUMENT`: The
         * Digest does not match the
         * provided data.
         */
        await gapi.client.remotebuildexecution.blobs.batchUpdate({
            instanceName: "Test string",
        }, {
            requests: [
                {
                    data: "Test string",
                    digest: {
                        hash: "Test string",
                        sizeBytes: "Test string",
                    },
                }            ],
        });
        /**
         * Determine if blobs are present in the CAS.
         *
         * Clients can use this API before uploading blobs to determine which ones are
         * already present in the CAS and do not need to be uploaded again.
         *
         * There are no method-specific errors.
         */
        await gapi.client.remotebuildexecution.blobs.findMissing({
            instanceName: "Test string",
        }, {
            blobDigests: [
                {
                    hash: "Test string",
                    sizeBytes: "Test string",
                }            ],
        });
        /**
         * Fetch the entire directory tree rooted at a node.
         *
         * This request must be targeted at a
         * Directory stored in the
         * ContentAddressableStorage
         * (CAS). The server will enumerate the `Directory` tree recursively and
         * return every node descended from the root.
         *
         * The GetTreeRequest.page_token parameter can be used to skip ahead in
         * the stream (e.g. when retrying a partially completed and aborted request),
         * by setting it to a value taken from GetTreeResponse.next_page_token of the
         * last successfully processed GetTreeResponse).
         *
         * The exact traversal order is unspecified and, unless retrieving subsequent
         * pages from an earlier request, is not guaranteed to be stable across
         * multiple invocations of `GetTree`.
         *
         * If part of the tree is missing from the CAS, the server will return the
         * portion present and omit the rest.
         *
         * &#42; `NOT_FOUND`: The requested tree root is not present in the CAS.
         */
        await gapi.client.remotebuildexecution.blobs.getTree({
            hash: "Test string",
            instanceName: "Test string",
            pageSize: 42,
            pageToken: "Test string",
            sizeBytes: "Test string",
        });
        /**
         * Wait for an execution operation to complete. When the client initially
         * makes the request, the server immediately responds with the current status
         * of the execution. The server will leave the request stream open until the
         * operation completes, and then respond with the completed operation. The
         * server MAY choose to stream additional updates as execution progresses,
         * such as to provide an update as to the state of the execution.
         */
        await gapi.client.remotebuildexecution.operations.waitExecution({
            name: "Test string",
        }, {
        });
        /**
         * GetCapabilities returns the server capabilities configuration of the
         * remote endpoint.
         * Only the capabilities of the services supported by the endpoint will
         * be returned:
         * &#42; Execution + CAS + Action Cache endpoints should return both
         * CacheCapabilities and ExecutionCapabilities.
         * &#42; Execution only endpoints should return ExecutionCapabilities.
         * &#42; CAS + Action Cache only endpoints should return CacheCapabilities.
         */
        await gapi.client.remotebuildexecution.v2.getCapabilities({
            instanceName: "Test string",
        });
    }
});
