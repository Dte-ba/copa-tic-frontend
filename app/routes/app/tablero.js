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
      listaDeEscuelas: this.get("obtenerEscuelas").perform()
    };
  }
});
