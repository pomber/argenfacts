class VizCollapsedCard extends Polymer.Element {
	static get is() {
		return "viz-collapsed-card";
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

window.customElements.define(VizCollapsedCard.is, VizCollapsedCard);