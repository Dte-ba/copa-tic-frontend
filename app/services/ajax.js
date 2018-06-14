import Ember from "ember";
import AjaxService from "ember-ajax/services/ajax";
import ENV from "../config/environment";

export default AjaxService.extend({
  trustedHosts: [
    "localhost",
    "copatic-backend.enjambrelab.com.ar",
    "copatic-backend.dtelab.com.ar"
  ],

  host: Ember.computed(function() {
    return ENV.APP.URL_BACKEND;
  }),

  namespace: Ember.computed(function() {
    return "api";
  })
});
