import Component from "@ember/component";
import { debounce } from "@ember/runloop";
import { createPopupContent } from "../common/utils";
import { inject as service } from "@ember/service";
import ENV from "map-test/config/environment";

export default Component.extend({
  store: service(),
  classNames: ["map"],
  geoJson: null,
  map: null,
  activeState: "",

  init() {
    this._super(...arguments);
    this.set("zoom", (layer, isAction = false) => {
      layer.setStyle({
        weight: 5,
        color: "#C97064",
        dashArray: "15",
        fillOpacity: 0.7
      });
      layer.bringToFront();
      layer.bindPopup(createPopupContent(layer.feature.properties)).openPopup();
      if (!isAction) {
        this.set("activeState", layer.feature.properties.name);
      }
      this.get("map").fitBounds(layer.getBounds());
    });
  },

  didRender() {
    const activeLegendItem = this.element.querySelector(".active");
    if (activeLegendItem) {
      activeLegendItem.scrollIntoView({
        block: "start"
      });
    }
  },

  didInsertElement() {
    this._super(...arguments);
    this.set("map", L.map(this.element).setView([37.8, -96], 4));

    // Отключает скролл карты при наличии курсора на контейнере легенды
    L.DomEvent.disableScrollPropagation(L.DomUtil.get("legend"));
    // Аналогично отключает клик по карте
    L.DomEvent.disableClickPropagation(L.DomUtil.get("legend"));

    L.tileLayer(ENV.mapUrlTemplate, {
      maxZoom: 19
    }).addTo(this.get("map"));

    const zoomToFeature = e => {
      this.get("zoom")(e.target);
    };

    const onPopupClose = e => {
      if (this.get("activeState") === e.target.feature.properties.name) {
        this.set("activeState", "");
      }

      this.get("geoJson").resetStyle(e.target);
    };

    const onEachFeature = (feature, layer) => {
      layer.on({
        click: zoomToFeature,
        popupclose: onPopupClose
      });
    };

    this.set(
      "geoJson",
      L.geoJson(this.get("data").toArray(), {
        onEachFeature: onEachFeature
      }).addTo(this.get("map"))
    );
  },

  async _getStatesBySearch() {
    const data = await this.store.query("feature", { q: this.get("search") });
    this.set("data", data);
  },

  actions: {
    setActiveState(state) {
      if (this.get("activeState") === state) return;
      this.set("activeState", state);
      this.get("map").eachLayer(layer => {
        if (
          layer.feature &&
          layer.feature.properties.name === this.get("activeState")
        ) {
          this.get("zoom")(layer, true);
        }
      });
    },

    onSearchInput() {
      debounce(this, this._getStatesBySearch, 1500);
    }
  }
});
