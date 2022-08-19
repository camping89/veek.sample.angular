
const baseUrl = window.location.origin;
const apiUrl = 'https://api-dataprovider.veek.vn';
const oAuthConfig = {
  issuer: apiUrl,
  redirectUri: baseUrl,
  clientId: 'Social_App',
  responseType: 'code',
  scope: 'offline_access Social',
  requireHttps: true,
};

export const environment = {
  environmentName: 'prod',
  production: true,
  baseUrl: baseUrl,
  apiUrl: apiUrl,
  idp: oAuthConfig,
};