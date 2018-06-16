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
      insignias: insignias,
      fase0: this.store.findRecord("fase", 1),
      fase1: this.store.findRecord("fase", 2),
      fase2: this.store.findRecord("fase", 3),
      fase3: this.store.findRecord("fase", 4),
      fase4: this.store.findRecord("fase", 5)
    };
  }
});
