/* eslint-env node */
"use strict";

module.exports = function(environment) {
  let ENV = {
    modulePrefix: "copa-tic-frontend",
    environment,
    rootURL: "/",
    locationType: "auto",
    contentSecurityPolicy: {
      "connect-src":
        "'self' 'http://localhost:4200' 'copatic.enjambrelab.com.ar' 'copatic.abc.gob.ar'",
      "style-src": "'self' 'unsafe-inline'",
      "script-src": "'self'",
      "frame-src": "'self'"
    },

    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  ENV["g-map"] = {
    libraries: ["places"],
    key: "AIzaSyA7X7s7nDGTf4LicQh4vU-KZP3ptWGp1e0"
  };

  const default_api_url = "localhost:8000";
  ENV.API_URL = "localhost:8000";

  if (environment === "development") {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === "test") {
    // Testem prefers this...
    ENV.locationType = "none";

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = "#ember-testing";
  }

  if (environment === "production") {
    const default_api_url = "http://copatic-backend.enjambrelab.com.ar";
    ENV.API_URL = default_api_url;
  }

  return ENV;
};
