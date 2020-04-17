# TypeScript typings for Firebase ML API v1beta2

Access custom machine learning models hosted via Firebase ML.
For detailed description please check [documentation](https://firebase.google.com).

## Installing

Install typings for Firebase ML API:

```
npm install @types/gapi.client.firebaseml@v1beta2 --save-dev
```

## Usage

You need to initialize Google API client in your code:

```typescript
gapi.load('client', () => {
  // now we can use gapi.client
  // ...
});
```

Then load api client wrapper:

```typescript
gapi.client.load('firebaseml', 'v1beta2', () => {
  // now we can use gapi.client.firebaseml
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

gapi.auth.authorize(
  { client_id: client_id, scope: scope, immediate: immediate },
  authResult => {
    if (authResult && !authResult.error) {
        /* handle successful authorization */
    } else {
        /* handle authorization error */
    }
});
```

After that you can use Firebase ML API resources:

```typescript
```