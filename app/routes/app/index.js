import Ember from "ember";
import { task } from "ember-concurrency";
import ENV from "copa-tic-frontend/config/environment";

export default Ember.Route.extend({
  ajax: Ember.inject.service(),
  obtenerEscuelas: task(function*() {
    let query = { include: "equipos" };
    query.page_size = 1000;

    let data = yield this.store.query("escuela", query);
    let meta = data.get("meta");
    return { data, meta };
  }).drop(),

  model() {
    return {
      listaDeEscuelas: this.get("obtenerEscuelas").perform(),
      fases: this.store.findAll("fase"),
      fase0: this.store.findRecord("fase", 1),
      fase1: this.store.findRecord("fase", 2),
      fase2: this.store.findRecord("fase", 3),
      fase3: this.store.findRecord("fase", 4),
      fase4: this.store.findRecord("fase", 5),
      fase5: this.store.findRecord("fase", 6)
      // listaDeEscuelas: this.get("escuelas").perform()
    };
  }
});
