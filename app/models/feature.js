import DS from "ember-data";

export default DS.Model.extend({
  type: DS.attr("string"),
  properties: DS.attr(),
  geometry: DS.attr()
});
