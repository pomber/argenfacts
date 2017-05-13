class VizDisplay extends Polymer.Element {
  static get is() {
    return "viz-display";
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: "viz-display"
      }
    };
  }
}

window.customElements.define(VizDisplay.is, VizDisplay);
