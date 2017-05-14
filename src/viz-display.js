class VizDisplay extends Polymer.Element {
  static get is() {
    return "viz-display";
  }
  static get properties() {
    return {
      data: {
        type: Array,
        value: []
      }
    };
  }
}

window.customElements.define(VizDisplay.is, VizDisplay);
