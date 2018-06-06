import Ember from "ember";

export default Ember.Component.extend({
  tagName: "",
  didInsertElement() {
    Ember.$(".filters").on("click", "#link-equipo-1", function() {
      Ember.$("#link-equipo-1").addClass("active");
      Ember.$("#link-equipo-2").removeClass("active");
      Ember.$("#equipo-1")
        .removeClass("div-oculto")
        .addClass("div-visible");
      Ember.$("#equipo-2")
        .removeClass("div-visible")
        .addClass("div-oculto");
    });
    Ember.$(".filters").on("click", "#link-equipo-2", function() {
      Ember.$("#link-equipo-2").addClass("active");
      Ember.$("#link-equipo-1").removeClass("active");
      Ember.$("#equipo-2")
        .removeClass("div-oculto")
        .addClass("div-visible");
      Ember.$("#equipo-1")
        .removeClass("div-visible")
        .addClass("div-oculto");
    });
  },
  didRender() {
    Ember.$("#link-equipo-1").addClass("active");
    Ember.$("#equipo-1")
      .removeClass("div-oculto")
      .addClass("div-visible");
  }
});
