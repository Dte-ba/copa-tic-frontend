import Ember from "ember";

export default Ember.Route.extend({
  model() {
    return this.store.findRecord("fase", 4).then(data => {
      if (!data.get("estado")) {
        return this.transitionTo("app.juego");
      } else {
        return {
          fase3: data
        };
      }
    });
  }
});
