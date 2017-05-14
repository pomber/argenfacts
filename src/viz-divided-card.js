class VizDividedCard extends Polymer.Element {
  static get is() {
    return "viz-divided-card";
  }
  static get properties() {
    return {
      data: {
        type: Object,
        value: {}
      }
    };
  }
}

window.customElements.define(VizDividedCard.is, VizDividedCard);
