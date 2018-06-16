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
      this.route('desafio2');
      this.route('desafio3');
      this.route('desafio4');
      this.route('desafio5');
      this.route('desafio6');
      this.route('desafio7');
      this.route('desafio8');
      this.route('desafio9');
      this.route('desafio10');
      this.route('desafio11');
      this.route('desafio12');
      this.route('desafio13');
      this.route('desafio14');
      this.route('desafio15');
      this.route('desafio16');
    });
    this.route("desafios");
    this.route("tablero", function() {
      this.route("index");
      this.route("escuela", { path: "escuela/:escuela_id" });
      this.route("equipo", { path: "equipo/:equipo_id" });
    });
    this.route("herramientas");
  });
  this.route('tablero');
  this.route('juego');
  this.route('proyecto');
  this.route('herramientas');
});

export default Router;
