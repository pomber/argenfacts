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
  select(e) {
    const newEvent = new CustomEvent("select", {
      bubbles: true,
      composed: true,
      detail: { item: e.model.item, rect: e.target.getBoundingClientRect() }
    });
    this.dispatchEvent(newEvent);
  }
}

window.customElements.define(VizDividedCard.is, VizDividedCard);
