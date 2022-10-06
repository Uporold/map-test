import Component from "@ember/component";
import { debounce } from "@ember/runloop";

export default Component.extend({
  classNames: ["states-container"],

  didReceiveAttrs() {
    this._findStateByInput();
  },

  _findStateByInput() {
    return this.get("search")
      ? this.set(
          "featuresCopy",
          this.get("features").filter(feature => {
            return feature.properties.name
              .toLowerCase()
              .includes(this.get("search").toLowerCase());
          })
        )
      : this.set("featuresCopy", this.get("features"));
  },

  actions: {
    onStateClick(name) {
      this.get("setActiveState")(name);
    },

    getStatesByInput() {
      debounce(this, this._findStateByInput, 1500);
    }
  }
});
