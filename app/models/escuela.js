import DS from "ember-data";

export default DS.Model.extend({
  nombre: DS.attr("string"),
  localidad: DS.attr("string"),
  latitud: DS.attr("number"),
  longitud: DS.attr("number")
});
