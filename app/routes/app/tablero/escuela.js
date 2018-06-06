import Ember from "ember";

export default Ember.Route.extend({
  model(params) {
    let escuela_id = params.escuela_id;
    let escuela = this.store.findRecord("escuela", escuela_id, {
      include: "equipos"
    });
    let insignias = this.store.findAll("insignia");
    return {
      escuela: escuela,
      insignias: insignias
    };
  }
});
