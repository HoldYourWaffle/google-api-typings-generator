/* This is stub file for gapi.client.gamesconfiguration definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
**/
gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('gamesconfiguration', 'v1configuration', () => {
        /** now we can use gapi.client.gamesconfiguration */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [
            /** View and manage your Google Play Developer account */
            'https://www.googleapis.com/auth/androidpublisher',
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
        /** Delete the achievement configuration with the given ID. */
        await gapi.client.gamesconfiguration.achievementConfigurations.delete({
            achievementId: "Test string",
        });
        /** Retrieves the metadata of the achievement configuration with the given ID. */
        await gapi.client.gamesconfiguration.achievementConfigurations.get({
            achievementId: "Test string",
        });
        /** Insert a new achievement configuration in this application. */
        await gapi.client.gamesconfiguration.achievementConfigurations.insert({
            applicationId: "Test string",
        }, {
            achievementType: "Test string",
            draft: {
                description: {
                    kind: "Test string",
                    translations: [
                        {
                            kind: "Test string",
                            locale: "Test string",
                            value: "Test string",
                        }                    ],
                },
                iconUrl: "Test string",
                kind: "Test string",
                name: {
                    kind: "Test string",
                    translations: [
                        {
                            kind: "Test string",
                            locale: "Test string",
                            value: "Test string",
                        }                    ],
                },
                pointValue: 42,
                sortRank: 42,
            },
            id: "Test string",
            initialState: "Test string",
            kind: "Test string",
            published: {
                description: {
                    kind: "Test string",
                    translations: [
                        {
                            kind: "Test string",
                            locale: "Test string",
                            value: "Test string",
                        }                    ],
                },
                iconUrl: "Test string",
                kind: "Test string",
                name: {
                    kind: "Test string",
                    translations: [
                        {
                            kind: "Test string",
                            locale: "Test string",
                            value: "Test string",
                        }                    ],
                },
                pointValue: 42,
                sortRank: 42,
            },
            stepsToUnlock: 42,
            token: "Test string",
        });
        /** Returns a list of the achievement configurations in this application. */
        await gapi.client.gamesconfiguration.achievementConfigurations.list({
            applicationId: "Test string",
            maxResults: 42,
            pageToken: "Test string",
        });
        /** Update the metadata of the achievement configuration with the given ID. This method supports patch semantics. */
        await gapi.client.gamesconfiguration.achievementConfigurations.patch({
            achievementId: "Test string",
        }, {
            achievementType: "Test string",
            draft: {
                description: {
                    kind: "Test string",
                    translations: [
                        {
                            kind: "Test string",
                            locale: "Test string",
                            value: "Test string",
                        }                    ],
                },
                iconUrl: "Test string",
                kind: "Test string",
                name: {
                    kind: "Test string",
                    translations: [
                        {
                            kind: "Test string",
                            locale: "Test string",
                            value: "Test string",
                        }                    ],
                },
                pointValue: 42,
                sortRank: 42,
            },
            id: "Test string",
            initialState: "Test string",
            kind: "Test string",
            published: {
                description: {
                    kind: "Test string",
                    translations: [
                        {
                            kind: "Test string",
                            locale: "Test string",
                            value: "Test string",
                        }                    ],
                },
                iconUrl: "Test string",
                kind: "Test string",
                name: {
                    kind: "Test string",
                    translations: [
                        {
                            kind: "Test string",
                            locale: "Test string",
                            value: "Test string",
                        }                    ],
                },
                pointValue: 42,
                sortRank: 42,
            },
            stepsToUnlock: 42,
            token: "Test string",
        });
        /** Update the metadata of the achievement configuration with the given ID. */
        await gapi.client.gamesconfiguration.achievementConfigurations.update({
            achievementId: "Test string",
        }, {
            achievementType: "Test string",
            draft: {
                description: {
                    kind: "Test string",
                    translations: [
                        {
                            kind: "Test string",
                            locale: "Test string",
                            value: "Test string",
                        }                    ],
                },
                iconUrl: "Test string",
                kind: "Test string",
                name: {
                    kind: "Test string",
                    translations: [
                        {
                            kind: "Test string",
                            locale: "Test string",
                            value: "Test string",
                        }                    ],
                },
                pointValue: 42,
                sortRank: 42,
            },
            id: "Test string",
            initialState: "Test string",
            kind: "Test string",
            published: {
                description: {
                    kind: "Test string",
                    translations: [
                        {
                            kind: "Test string",
                            locale: "Test string",
                            value: "Test string",
                        }                    ],
                },
                iconUrl: "Test string",
                kind: "Test string",
                name: {
                    kind: "Test string",
                    translations: [
                        {
                            kind: "Test string",
                            locale: "Test string",
                            value: "Test string",
                        }                    ],
                },
                pointValue: 42,
                sortRank: 42,
            },
            stepsToUnlock: 42,
            token: "Test string",
        });
        /** Uploads an image for a resource with the given ID and image type. */
        await gapi.client.gamesconfiguration.imageConfigurations.upload({
            imageType: "Test string",
            resourceId: "Test string",
        });
        /** Delete the leaderboard configuration with the given ID. */
        await gapi.client.gamesconfiguration.leaderboardConfigurations.delete({
            leaderboardId: "Test string",
        });
        /** Retrieves the metadata of the leaderboard configuration with the given ID. */
        await gapi.client.gamesconfiguration.leaderboardConfigurations.get({
            leaderboardId: "Test string",
        });
        /** Insert a new leaderboard configuration in this application. */
        await gapi.client.gamesconfiguration.leaderboardConfigurations.insert({
            applicationId: "Test string",
        }, {
            draft: {
                iconUrl: "Test string",
                kind: "Test string",
                name: {
                    kind: "Test string",
                    translations: [
                        {
                            kind: "Test string",
                            locale: "Test string",
                            value: "Test string",
                        }                    ],
                },
                scoreFormat: {
                    currencyCode: "Test string",
                    numDecimalPlaces: 42,
                    numberFormatType: "Test string",
                    suffix: {
                        few: {
                            kind: "Test string",
                            translations: [
                                {
                                    kind: "Test string",
                                    locale: "Test string",
                                    value: "Test string",
                                }                            ],
                        },
                        many: {
                            kind: "Test string",
                            translations: [
                                {
                                    kind: "Test string",
                                    locale: "Test string",
                                    value: "Test string",
                                }                            ],
                        },
                        one: {
                            kind: "Test string",
                            translations: [
                                {
                                    kind: "Test string",
                                    locale: "Test string",
                                    value: "Test string",
                                }                            ],
                        },
                        other: {
                            kind: "Test string",
                            translations: [
                                {
                                    kind: "Test string",
                                    locale: "Test string",
                                    value: "Test string",
                                }                            ],
                        },
                        two: {
                            kind: "Test string",
                            translations: [
                                {
                                    kind: "Test string",
                                    locale: "Test string",
                                    value: "Test string",
                                }                            ],
                        },
                        zero: {
                            kind: "Test string",
                            translations: [
                                {
                                    kind: "Test string",
                                    locale: "Test string",
                                    value: "Test string",
                                }                            ],
                        },
                    },
                },
                sortRank: 42,
            },
            id: "Test string",
            kind: "Test string",
            published: {
                iconUrl: "Test string",
                kind: "Test string",
                name: {
                    kind: "Test string",
                    translations: [
                        {
                            kind: "Test string",
                            locale: "Test string",
                            value: "Test string",
                        }                    ],
                },
                scoreFormat: {
                    currencyCode: "Test string",
                    numDecimalPlaces: 42,
                    numberFormatType: "Test string",
                    suffix: {
                        few: {
                            kind: "Test string",
                            translations: [
                                {
                                    kind: "Test string",
                                    locale: "Test string",
                                    value: "Test string",
                                }                            ],
                        },
                        many: {
                            kind: "Test string",
                            translations: [
                                {
                                    kind: "Test string",
                                    locale: "Test string",
                                    value: "Test string",
                                }                            ],
                        },
                        one: {
                            kind: "Test string",
                            translations: [
                                {
                                    kind: "Test string",
                                    locale: "Test string",
                                    value: "Test string",
                                }                            ],
                        },
                        other: {
                            kind: "Test string",
                            translations: [
                                {
                                    kind: "Test string",
                                    locale: "Test string",
                                    value: "Test string",
                                }                            ],
                        },
                        two: {
                            kind: "Test string",
                            translations: [
                                {
                                    kind: "Test string",
                                    locale: "Test string",
                                    value: "Test string",
                                }                            ],
                        },
                        zero: {
                            kind: "Test string",
                            translations: [
                                {
                                    kind: "Test string",
                                    locale: "Test string",
                                    value: "Test string",
                                }                            ],
                        },
                    },
                },
                sortRank: 42,
            },
            scoreMax: "Test string",
            scoreMin: "Test string",
            scoreOrder: "Test string",
            token: "Test string",
        });
        /** Returns a list of the leaderboard configurations in this application. */
        await gapi.client.gamesconfiguration.leaderboardConfigurations.list({
            applicationId: "Test string",
            maxResults: 42,
            pageToken: "Test string",
        });
        /** Update the metadata of the leaderboard configuration with the given ID. This method supports patch semantics. */
        await gapi.client.gamesconfiguration.leaderboardConfigurations.patch({
            leaderboardId: "Test string",
        }, {
            draft: {
                iconUrl: "Test string",
                kind: "Test string",
                name: {
                    kind: "Test string",
                    translations: [
                        {
                            kind: "Test string",
                            locale: "Test string",
                            value: "Test string",
                        }                    ],
                },
                scoreFormat: {
                    currencyCode: "Test string",
                    numDecimalPlaces: 42,
                    numberFormatType: "Test string",
                    suffix: {
                        few: {
                            kind: "Test string",
                            translations: [
                                {
                                    kind: "Test string",
                                    locale: "Test string",
                                    value: "Test string",
                                }                            ],
                        },
                        many: {
                            kind: "Test string",
                            translations: [
                                {
                                    kind: "Test string",
                                    locale: "Test string",
                                    value: "Test string",
                                }                            ],
                        },
                        one: {
                            kind: "Test string",
                            translations: [
                                {
                                    kind: "Test string",
                                    locale: "Test string",
                                    value: "Test string",
                                }                            ],
                        },
                        other: {
                            kind: "Test string",
                            translations: [
                                {
                                    kind: "Test string",
                                    locale: "Test string",
                                    value: "Test string",
                                }                            ],
                        },
                        two: {
                            kind: "Test string",
                            translations: [
                                {
                                    kind: "Test string",
                                    locale: "Test string",
                                    value: "Test string",
                                }                            ],
                        },
                        zero: {
                            kind: "Test string",
                            translations: [
                                {
                                    kind: "Test string",
                                    locale: "Test string",
                                    value: "Test string",
                                }                            ],
                        },
                    },
                },
                sortRank: 42,
            },
            id: "Test string",
            kind: "Test string",
            published: {
                iconUrl: "Test string",
                kind: "Test string",
                name: {
                    kind: "Test string",
                    translations: [
                        {
                            kind: "Test string",
                            locale: "Test string",
                            value: "Test string",
                        }                    ],
                },
                scoreFormat: {
                    currencyCode: "Test string",
                    numDecimalPlaces: 42,
                    numberFormatType: "Test string",
                    suffix: {
                        few: {
                            kind: "Test string",
                            translations: [
                                {
                                    kind: "Test string",
                                    locale: "Test string",
                                    value: "Test string",
                                }                            ],
                        },
                        many: {
                            kind: "Test string",
                            translations: [
                                {
                                    kind: "Test string",
                                    locale: "Test string",
                                    value: "Test string",
                                }                            ],
                        },
                        one: {
                            kind: "Test string",
                            translations: [
                                {
                                    kind: "Test string",
                                    locale: "Test string",
                                    value: "Test string",
                                }                            ],
                        },
                        other: {
                            kind: "Test string",
                            translations: [
                                {
                                    kind: "Test string",
                                    locale: "Test string",
                                    value: "Test string",
                                }                            ],
                        },
                        two: {
                            kind: "Test string",
                            translations: [
                                {
                                    kind: "Test string",
                                    locale: "Test string",
                                    value: "Test string",
                                }                            ],
                        },
                        zero: {
                            kind: "Test string",
                            translations: [
                                {
                                    kind: "Test string",
                                    locale: "Test string",
                                    value: "Test string",
                                }                            ],
                        },
                    },
                },
                sortRank: 42,
            },
            scoreMax: "Test string",
            scoreMin: "Test string",
            scoreOrder: "Test string",
            token: "Test string",
        });
        /** Update the metadata of the leaderboard configuration with the given ID. */
        await gapi.client.gamesconfiguration.leaderboardConfigurations.update({
            leaderboardId: "Test string",
        }, {
            draft: {
                iconUrl: "Test string",
                kind: "Test string",
                name: {
                    kind: "Test string",
                    translations: [
                        {
                            kind: "Test string",
                            locale: "Test string",
                            value: "Test string",
                        }                    ],
                },
                scoreFormat: {
                    currencyCode: "Test string",
                    numDecimalPlaces: 42,
                    numberFormatType: "Test string",
                    suffix: {
                        few: {
                            kind: "Test string",
                            translations: [
                                {
                                    kind: "Test string",
                                    locale: "Test string",
                                    value: "Test string",
                                }                            ],
                        },
                        many: {
                            kind: "Test string",
                            translations: [
                                {
                                    kind: "Test string",
                                    locale: "Test string",
                                    value: "Test string",
                                }                            ],
                        },
                        one: {
                            kind: "Test string",
                            translations: [
                                {
                                    kind: "Test string",
                                    locale: "Test string",
                                    value: "Test string",
                                }                            ],
                        },
                        other: {
                            kind: "Test string",
                            translations: [
                                {
                                    kind: "Test string",
                                    locale: "Test string",
                                    value: "Test string",
                                }                            ],
                        },
                        two: {
                            kind: "Test string",
                            translations: [
                                {
                                    kind: "Test string",
                                    locale: "Test string",
                                    value: "Test string",
                                }                            ],
                        },
                        zero: {
                            kind: "Test string",
                            translations: [
                                {
                                    kind: "Test string",
                                    locale: "Test string",
                                    value: "Test string",
                                }                            ],
                        },
                    },
                },
                sortRank: 42,
            },
            id: "Test string",
            kind: "Test string",
            published: {
                iconUrl: "Test string",
                kind: "Test string",
                name: {
                    kind: "Test string",
                    translations: [
                        {
                            kind: "Test string",
                            locale: "Test string",
                            value: "Test string",
                        }                    ],
                },
                scoreFormat: {
                    currencyCode: "Test string",
                    numDecimalPlaces: 42,
                    numberFormatType: "Test string",
                    suffix: {
                        few: {
                            kind: "Test string",
                            translations: [
                                {
                                    kind: "Test string",
                                    locale: "Test string",
                                    value: "Test string",
                                }                            ],
                        },
                        many: {
                            kind: "Test string",
                            translations: [
                                {
                                    kind: "Test string",
                                    locale: "Test string",
                                    value: "Test string",
                                }                            ],
                        },
                        one: {
                            kind: "Test string",
                            translations: [
                                {
                                    kind: "Test string",
                                    locale: "Test string",
                                    value: "Test string",
                                }                            ],
                        },
                        other: {
                            kind: "Test string",
                            translations: [
                                {
                                    kind: "Test string",
                                    locale: "Test string",
                                    value: "Test string",
                                }                            ],
                        },
                        two: {
                            kind: "Test string",
                            translations: [
                                {
                                    kind: "Test string",
                                    locale: "Test string",
                                    value: "Test string",
                                }                            ],
                        },
                        zero: {
                            kind: "Test string",
                            translations: [
                                {
                                    kind: "Test string",
                                    locale: "Test string",
                                    value: "Test string",
                                }                            ],
                        },
                    },
                },
                sortRank: 42,
            },
            scoreMax: "Test string",
            scoreMin: "Test string",
            scoreOrder: "Test string",
            token: "Test string",
        });
    }
});
