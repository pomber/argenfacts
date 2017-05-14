class AfLanding extends Polymer.Element {
  static get is() {
    return "af-landing";
  }

  toRevenue(e) {
    const newEvent = new CustomEvent("revenue", {
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(newEvent);
  }
  toSpending(e) {
    const newEvent = new CustomEvent("spending", {
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(newEvent);
  }
}

window.customElements.define(AfLanding.is, AfLanding);
