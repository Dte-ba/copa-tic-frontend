import Ember from "ember";

export default Ember.Route.extend({
  model(params) {
    let equipo_id = params.equipo_id;
    var equipo = this.store.findRecord("equipo", equipo_id);

    // let otroEquipo = "";
    // let l = equipo.eid.charAt(0);
    // if (l === "a") {
    //   otroEquipo = "2";
    // } else {
    //   otroEquipo = "1";
    // }

    return {
      equipo: equipo
    };
  }
});
