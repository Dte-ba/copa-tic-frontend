import Ember from "ember";
import config from "./config/environment";

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

/* Se asegura de reiniciar la posición del scroll cuando se cambia de ruta. */
Ember.Router.reopen({
  didTransition() {
    this._super(...arguments);
    window.scrollTo(0, 0);
  }
});

Router.map(function() {
  this.route("app", function() {
    this.route("proyecto");
    this.route("juego", function() {
      this.route('desafio1');
    });
    this.route("desafios");
    this.route("tablero", function() {
      this.route("index");
      this.route("escuela", { path: "escuela/:escuela_id" });
      this.route("equipo", { path: "equipo/:equipo_id" });
    });
    this.route("herramientas");
  });
});

export default Router;
