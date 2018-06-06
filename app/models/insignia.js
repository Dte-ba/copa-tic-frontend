import DS from "ember-data";

export default DS.Model.extend({
  nombre: DS.attr("string"),
  slug: DS.attr("string")
});
