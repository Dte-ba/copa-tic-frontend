import Ember from "ember";

export default Ember.Component.extend({
  tagName: "",
  // classNames: [
  //   "ui",
  //   "fixed",
  //   "borderless",
  //   "menu",
  //   "barra-de-navegacion",
  //   "z-max"
  // ],
  sidebarVisible: false,
  actions: {
    mostrarSidebar() {
      this.set("sidebarVisible", true);
    },
    ocultarSidebar() {
      this.set("sidebarVisible", false);
    }
  }
});
