import Component from "@ember/component";
import { createPopupContent } from "../common/utils";

export default Component.extend({
  classNames: ["map"],
  geoJson: null,
  map: null,
  _prevState: "",

  init() {
    this._super(...arguments);
    this.set("zoom", layer => {
      layer.setStyle({
        weight: 5,
        color: "#C97064",
        dashArray: "15",
        fillOpacity: 0.7
      });
      layer.bringToFront();
      layer.bindPopup(createPopupContent(layer.feature.properties)).openPopup();
      this.get("setActiveState")(layer.feature.properties.name);
      this.get("map").fitBounds(layer.getBounds());
    });
  },

  didInsertElement() {
    this._super(...arguments);
    this.set("map", L.map(this.element).setView([37.8, -96], 4));

    L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
      {
        maxZoom: 19
      }
    ).addTo(this.get("map"));

    function zoomToFeature(e) {
      this.get("zoom")(e.target);
    }

    function onPopupClose(e) {
      const layer = e.target;

      if (this.get("activeState") === layer.feature.properties.name) {
        this.get("setActiveState")("");
      }

      this.get("geoJson").resetStyle(layer);
    }

    function _onEachFeature(feature, layer) {
      layer.on({
        click: zoomToFeature.bind(this),
        popupclose: onPopupClose.bind(this)
      });
    }
    this.set(
      "geoJson",
      L.geoJson(this.get("data"), {
        onEachFeature: _onEachFeature.bind(this)
      }).addTo(this.get("map"))
    );
  },

  didUpdateAttrs() {
    this._super(...arguments);
    if (this.get("_prevState") !== this.get("activeState")) {
      this.get("map").eachLayer(
        function(layer) {
          if (
            layer.feature &&
            layer.feature.properties.name === this.get("activeState")
          ) {
            this.get("zoom")(layer);
          }
        }.bind(this)
      );
    }
    this.set("_prevState", this.get("activeState"));
  }
});
