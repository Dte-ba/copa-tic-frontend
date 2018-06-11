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
  a16estado: DS.attr("string"),
  a1link: DS.attr("string"),
  a2link: DS.attr("string"),
  a3link: DS.attr("string"),
  a4link: DS.attr("string"),
  a5link: DS.attr("string"),
  a6link: DS.attr("string"),
  a7link: DS.attr("string"),
  a8link: DS.attr("string"),
  a9link: DS.attr("string"),
  a10link: DS.attr("string"),
  a11link: DS.attr("string"),
  a12link: DS.attr("string"),
  a13link: DS.attr("string"),
  a14link: DS.attr("string"),
  a15link: DS.attr("string"),
  a16link: DS.attr("string"),
  insignias_ganadas: DS.attr("string"),

  insignias_ganadas_array: Ember.computed("insignias_ganadas", function() {
    let insignias = this.get("insignias_ganadas");
    let insignias_array = insignias.split(",");
    if (insignias_array[0] === "") {
      insignias_array = null;
    }
    return insignias_array;
  })
});
