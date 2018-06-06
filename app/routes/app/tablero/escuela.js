import Ember from "ember";

export default Ember.Route.extend({
  model(params) {
    let escuela_id = params.escuela_id;
    let escuela = this.store.findRecord("escuela", escuela_id, {
      include: "equipos"
    });
    return {
      escuela: escuela
    };
  }
});
