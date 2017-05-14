class VizFullCard extends Polymer.Element {
  static get is() {
    return "viz-full-card";
  }
  static get properties() {
    return {
      data: {
        type: Object,
        value: {}
      }
    };
  }
  divide(e) {
    const newEvent = new CustomEvent("divide", {
      bubbles: true,
      composed: true,
      detail: { kicked: true }
    });
    this.dispatchEvent(newEvent);
  }
  back(e) {
    const newEvent = new CustomEvent("back", {
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(newEvent);
  }
}

window.customElements.define(VizFullCard.is, VizFullCard);
