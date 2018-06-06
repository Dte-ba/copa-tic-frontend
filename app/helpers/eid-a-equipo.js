import Ember from "ember";

export function eidAEquipo(params, eid /*, hash*/) {
  let l = eid.eid.charAt(0);
  let equipo = "1";
  if (l === "b") {
    equipo = "2";
  }
  return equipo;
}

export default Ember.Helper.helper(eidAEquipo);
