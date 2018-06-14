import Ember from "ember";

export default Ember.Route.extend({
  model() {
    return {
      fase1: this.store.findRecord("fase", 1),
      fase2: this.store.findRecord("fase", 2),
      fase3: this.store.findRecord("fase", 3),
      fase4: this.store.findRecord("fase", 4)
    };
  }
});
