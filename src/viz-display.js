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
    const self = this;
    const cardHolder = this.$["card-holder"];
    const card = cardHolder.querySelector("viz-full-card");

    const data = card.data;

    const fullCard = card.shadowRoot;
    const title = fullCard.querySelector(".title");
    const titleRect = title.getBoundingClientRect();
    const titleStyle = window.getComputedStyle(title);

    const header = this.$.header;
    const headerRect = header.getBoundingClientRect();
    const headerStyle = window.getComputedStyle(header);

    const dy = titleRect.top - headerRect.top;

    const content = fullCard.querySelectorAll(".container > *");

    new TimelineMax({
      onComplete: () => {
        const divided = new VizDividedCard();
        divided.data = data;
        divided.addEventListener("select", self.select.bind(self));
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
      .to(header, 0.25, { y: 0 }, 0)
      .to(content, 0.25, { alpha: 0 }, 0);
  }

  back(e) {
    const item = this.data;
    const cardHolder = this.$["card-holder"];
    const full = cardHolder.querySelector("viz-full-card");

    if (item.name === full.data.name) {      
      const newEvent = new CustomEvent("close", {
        bubbles: true,
        composed: true
      });
      this.dispatchEvent(newEvent);
      return;
    }

    const divided = new VizDividedCard();
    divided.data = item;
    divided.addEventListener("select", this.select.bind(this));
    cardHolder.replaceChild(divided, full);

    this.$.header.textContent = item.name;
  }

  join(e) {
    const header = this.$.header;
    header.innerHTML = "&nbsp";
    const cardHolder = this.$["card-holder"];
    const divided = cardHolder.querySelector("viz-divided-card");
    if (!divided) return;
    const joined = new VizFullCard();
    joined.data = this.data;
    joined.addEventListener("divide", this.divide.bind(this));
    joined.addEventListener("back", this.back.bind(this));
    cardHolder.replaceChild(joined, divided);
  }

  select(e) {
    const item = e.detail.item;
    const cardHolder = this.$["card-holder"];
    const divided = cardHolder.querySelector("viz-divided-card");
    const full = new VizFullCard();
    full.data = item;
    full.addEventListener("divide", this.divide.bind(this));
    full.addEventListener("back", this.back.bind(this));
    cardHolder.replaceChild(full, divided);

    this.$.header.innerHTML = "";
  }
}

window.customElements.define(VizDisplay.is, VizDisplay);
