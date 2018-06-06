import DS from "ember-data";

export default DS.Model.extend({
  escuela: DS.belongsTo("escuela"),
  eid: DS.attr("string"),
  nombre: DS.attr("string"),
  dt: DS.attr("string"),
  puntos: DS.attr("string"),
  a1estado: DS.attr("string"),
  a2estado: DS.attr("string"),
  a3estado: DS.attr("string"),
  a4estado: DS.attr("string"),
  a5estado: DS.attr("string"),
  a6estado: DS.attr("string"),
  a7estado: DS.attr("string"),
  a8estado: DS.attr("string"),
  a9estado: DS.attr("string"),
  a10estado: DS.attr("string"),
  a11estado: DS.attr("string"),
  a12estado: DS.attr("string"),
  a13estado: DS.attr("string"),
  a14estado: DS.attr("string"),
  a15estado: DS.attr("string"),
  a16estado: DS.attr("string")
});
