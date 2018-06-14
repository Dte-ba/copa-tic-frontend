import Ember from "ember";

export function cticToolboxCardPlataformas(params, data /*, hash*/) {
  let a = data.data.replace(/\s+/g, ", ");
  let array = a.split(",");

  for (var i = 0; i < array.length; i++) {
    if (array[i] === "pweb") {
      array[i] = "web";
    } else {
      array[i] = array[i];
    }
  }
  let plataformas = array.join(",");
  return plataformas;
}

export default Ember.Helper.helper(cticToolboxCardPlataformas);
