import Ember from "ember";

export default Ember.Route.extend({
  model() {
    return {
      fase0: this.store.findRecord("fase", 1),
      fase1: this.store.findRecord("fase", 2),
      fase2: this.store.findRecord("fase", 3),
      fase3: this.store.findRecord("fase", 4),
      fase4: this.store.findRecord("fase", 5)
    };
  }
});
