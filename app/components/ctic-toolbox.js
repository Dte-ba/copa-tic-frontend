import Ember from "ember";

export default Ember.Component.extend({
  tagName: "",
  didInsertElement() {
    // external js: isotope.pkgd.js

    // init Isotope
    var $grid = Ember.$(".grid").isotope({
      itemSelector: ".tarjeta-recurso"
    });

    // store filter for each group
    var filters = {};

    Ember.$(".filters").on("click", ".button", function() {
      var $this = $(this);
      // get group key
      var $buttonGroup = $this.parents(".button-group");
      var filterGroup = $buttonGroup.attr("data-filter-group");
      // set filter for group
      filters[filterGroup] = $this.attr("data-filter");
      // combine filters
      var filterValue = concatValues(filters);
      // set filter for Isotope
      $grid.isotope({ filter: filterValue });
    });

    // change is-checked class on buttons
    Ember.$(".button-group").each(function(i, buttonGroup) {
      var $buttonGroup = $(buttonGroup);
      $buttonGroup.on("click", "button", function() {
        $buttonGroup.find(".is-checked").removeClass("is-checked");
        $(this).addClass("is-checked");
      });
    });

    // flatten object by concatting values
    function concatValues(obj) {
      var value = "";
      for (var prop in obj) {
        value += obj[prop];
      }
      return value;
    }
  }
});
