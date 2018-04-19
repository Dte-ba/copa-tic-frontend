import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('app', function() {
    this.route('proyecto');
    this.route('juego');
    this.route('desafios');
    this.route('tablero');
    this.route('herramientas');
  });
});

export default Router;
