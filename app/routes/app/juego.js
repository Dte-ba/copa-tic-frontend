import Ember from "ember";
import { task } from "ember-concurrency";
import ENV from "copa-tic-frontend/config/environment";

export default Ember.Route.extend({
  ajax: Ember.inject.service(),
  obtenerActividades: task(function*() {
    let query = {};
    query.page_size = 100;

    let data = yield this.store.query("escuela", query);
    let meta = data.get("meta");
    return { data, meta };
  }).drop(),

  escuelas: task(function*() {
    let url = ENV.API_URL + "/api/actividades?page_size=100";
    let resultado = yield this.get("ajax").request(url);
    return resultado;
  }).drop(),

  model() {
    return {
      // listaDeActividades: this.get("obtenerActividades").perform()
      listaDeActividades: this.get("escuelas").perform()
    };
  }
});
