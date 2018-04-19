import Ember from "ember";

export default Ember.Component.extend({
  tagName: "",
  didInsertElement() {
    Ember.$("#sub-sidebar a").off("click");

    Ember.$("#sub-sidebar a").on("click", function() {
      Ember.$("#sub-sidebar").sidebar("hide");
    });
  }
});
