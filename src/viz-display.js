class VizDisplay extends Polymer.Element {
  static get is() {
    return "viz-display";
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
    const fullCard = this.$.card.shadowRoot;
    const title = fullCard.querySelector(".title");
    const titleRect = title.getBoundingClientRect();
    const titleStyle = window.getComputedStyle(title);

    const header = this.$.header;
    const headerRect = header.getBoundingClientRect();
    const headerStyle = window.getComputedStyle(header);

    const dy = titleRect.top - headerRect.top;

    const content = fullCard.querySelectorAll(".container > *");

    const data = this.data;
    const cardHolder = this.$["card-holder"];
    const card = this.$["card"];

    new TimelineMax({
      onComplete: () => {
        const divided = new VizDividedCard();
        divided.data = data;
        cardHolder.replaceChild(divided, card);
      }
    })
      .set(header, {
        y: dy,
        textContent: title.textContent,
        fontWeight: titleStyle.fontWeight,
        fontSize: titleStyle.fontSize
      })
      .set(title, { innerHTML: "&nbsp" })
      .to(header, 1, { y: 0 }, 0)
      .to(content, 1, { alpha: 0 }, 0);
  }

  join(e) {
    const cardHolder = this.$["card-holder"];
    const divided = cardHolder.querySelector("viz-divided-card");
    const joined = new VizFullCard();
    joined.data = this.data;
    cardHolder.replaceChild(joined, divided);
  }
}

window.customElements.define(VizDisplay.is, VizDisplay);
