import Ember from "ember";

export default Ember.Route.extend({
  model(params) {
    let escuela_id = params.escuela_id;
    let escuela = this.store.findRecord("escuela", escuela_id);
    let equipo = this.store.query("equipo", { escuela: escuela_id });
    return {
      escuela: escuela,
      equipo: equipo
    };
  }
});
