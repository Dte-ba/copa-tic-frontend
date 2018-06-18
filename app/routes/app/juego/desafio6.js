import Ember from "ember";

export default Ember.Route.extend({
  model() {
    return this.store.findRecord("fase", 3).then(data => {
      if (!data.get("estado")) {
        return this.transitionTo("app.juego");
      } else {
        return {
          fase2: data
        };
      }
    });
  }
});
