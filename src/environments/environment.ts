// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // endpointURL: 'http://localhost/wordpress/wp-json/',
  endpointURL: 'http://178.170.39.186:4580/wordpress/wp-json/',
  dateFormat: 'MMM d, y',
  // custom_api_URL: 'http://localhost/wordpress/index.php/wp-json/',
  custom_api_URL: 'http://178.170.39.186:4580/wordpress/wp-json/',
  email_admin:"admin",
  pwd_admin:"admin"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
