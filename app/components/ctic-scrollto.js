import Ember from "ember";

export default Ember.Component.extend({
  tagName: "",
  didUpdateAttrs() {
    if (this.id) {
      let element = $(`#${this.id}`);

      if (element) {
        element[0].scrollIntoView();
        window.scrollBy(0, -200);
      }
    }
  }
});
