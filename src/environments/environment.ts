// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const baseUrl = 'http://localhost:4200';
const apiUrl = 'https://localhost:44328';
const oAuthConfig = {
  issuer: apiUrl,
  redirectUri: baseUrl,
  clientId: 'Social_App',
  responseType: 'code',
  scope: 'offline_access Social',
  requireHttps: true,
};

export const environment = {
  environmentName: 'dev',
  production: false,
  baseUrl: baseUrl,
  apiUrl: apiUrl,
  idp: oAuthConfig,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
