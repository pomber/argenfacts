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
    const titleRect = title.getBoundingClientRect();
    const titleStyle = window.getComputedStyle(title);

    const header = this.$.header;
    const headerRect = header.getBoundingClientRect();
    const headerStyle = window.getComputedStyle(header);

    const dy = titleRect.top - headerRect.top;

    new TimelineMax()
      .set(header, {
        y: dy,
        textContent: title.textContent,
        fontWeight: titleStyle.fontWeight,
        fontSize: titleStyle.fontSize
      })
      .set(title, { innerHTML: "&nbsp" })
      .to(header, 1, { y: 0 });
  }
}

window.customElements.define(VizDisplay.is, VizDisplay);
