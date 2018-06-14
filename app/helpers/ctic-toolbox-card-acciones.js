import Ember from "ember";

export function cticToolboxCardAcciones(params, data /*, hash*/) {
  let a = data.data.replace(/\s+/g, ", ");
  return a;
}

export default Ember.Helper.helper(cticToolboxCardAcciones);
