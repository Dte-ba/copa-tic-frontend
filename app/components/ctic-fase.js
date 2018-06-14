import Ember from "ember";

export default Ember.Component.extend({
  tagName: "",
  debeMostrar: false,
  didInsertElement() {
    let fase = this.get("fase");
    let model = this.get("model");
    let fase1 = true;
    let fase2 = true;
    let fase3 = true;
    let fase4 = true;

    this.set("debeMostrar", true);
  }
});
