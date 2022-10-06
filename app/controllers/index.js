import Controller from "@ember/controller";

export default Controller.extend({
  activeState: "",

  actions: {
    setActiveState(state) {
      if (this.get("activeState") === state) return;
      this.set("activeState", state);
    }
  }
});
