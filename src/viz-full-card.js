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
}

window.customElements.define(VizFullCard.is, VizFullCard);
