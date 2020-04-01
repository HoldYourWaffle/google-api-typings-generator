# TypeScript typings for Game Services API v1beta
Deploy and manage infrastructure for global multiplayer gaming experiences.
For detailed description please check [documentation](https://cloud.google.com/solutions/gaming/).

## Installing

Install typings for Game Services API:
```
npm install @types/gapi.client.gameservices@v1beta --save-dev
```

## Usage

You need to initialize Google API client in your code:
```typescript
gapi.load("client", () => { 
    // now we can use gapi.client
    // ... 
});
```

Then load api client wrapper:
```typescript
gapi.client.load('gameservices', 'v1beta', () => {
    // now we can use gapi.client.gameservices
    // ... 
});
```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // View and manage your data across Google Cloud Platform services
        'https://www.googleapis.com/auth/cloud-platform',
    ],
    immediate = true;
// ...

gapi.auth.authorize({ client_id: client_id, scope: scope, immediate: immediate }, authResult => {
    if (authResult && !authResult.error) {
        /* handle successful authorization */
    } else {
        /* handle authorization error */
    }
});            
```

After that you can use Game Services API resources:

```typescript
```