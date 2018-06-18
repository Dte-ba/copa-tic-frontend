import Ember from "ember";

export default Ember.Route.extend({
  model() {
    return this.store.findRecord("fase", 5).then(data => {
      if (!data.get("estado")) {
        return this.transitionTo("app.juego");
      } else {
        return {
          fase4: data
        };
      }
    });
  }
});
