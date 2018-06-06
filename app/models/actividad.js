import DS from "ember-data";

export default DS.Model.extend({
  titulo: DS.attr("string"),
  fase: DS.attr("string"),
  puntos: DS.attr("string"),
  descripcion: DS.attr("string"),
  insignias: DS.hasMany("insignia", { async: true })
});
