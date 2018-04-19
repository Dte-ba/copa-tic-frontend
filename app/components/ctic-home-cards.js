import Ember from "ember";

export default Ember.Component.extend({
  tagName: "",
  didInsertElement() {
    $(".special.cards .image").dimmer({
      on: "hover"
    });
  }
});
