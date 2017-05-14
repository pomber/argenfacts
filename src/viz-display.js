class VizDisplay extends Polymer.Element {
  static get is() {
    return "viz-display";
  }
  static get properties() {
    return {
      data: {
        type: Object,
        value: []
      }
    };
  }

  divide(e) {
    const title = this.$.card.shadowRoot.querySelector(".title");
    const header = this.$.header;
    const titleRect = title.getBoundingClientRect();
    const headerRect = header.getBoundingClientRect();
    const dy = titleRect.top - headerRect.top;

    header.textContent = title.textContent;
    title.innerHTML = "&nbsp";

    new TimelineMax().set(header, { y: dy }).to(header, 1, { y: 0 });
  }
}

window.customElements.define(VizDisplay.is, VizDisplay);
