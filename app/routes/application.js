import Ember from "ember";
import moment from "moment";

export default Ember.Route.extend({
  analytics: Ember.inject.service(),

  beforeModel() {
    this.get("analytics").inicializar();
    moment.locale("es");
  },
  model() {}
});
