class VizDisplay extends Polymer.Element {
  constructor() {
    super();
    this.stack = [];
  }

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
        self.stack.push({
          element: card
        });
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

  join(e) {
    const header = this.$.header;
    header.innerHTML = "&nbsp";
    const cardHolder = this.$["card-holder"];
    const divided = cardHolder.querySelector("viz-divided-card");
    if (!divided) return;
    const prev = this.stack.pop();
    const joined = prev.element;
    cardHolder.replaceChild(joined, divided);

    const content = joined.shadowRoot.querySelectorAll(".container > *");
    const title = joined.shadowRoot.querySelector(".title");

    new TimelineMax()
      .set(title, { innerHTML: joined.data.name })
      .to(content, 0.3, { alpha: 1 });
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

    const startRect = e.detail.rect;
    const endRect = full.getBoundingClientRect();
    const startScale = startRect.height / endRect.height;
    new TimelineMax()
      .set(full, {
        top: startRect.top - endRect.top,
        transform: `scaleY(${startScale})`,
        transformOrigin: "50% 0%"
      })
      .to(full, 0.3, {
        top: 0,
        transform: `scaleY(1)`
      });

    this.stack.push({
      element: divided,
      rect: startRect
    });

    this.$.header.innerHTML = "";
  }

  back(e) {
    if (!this.stack.length) {
      const newEvent = new CustomEvent("close", {
        bubbles: true,
        composed: true
      });
      this.dispatchEvent(newEvent);
      return;
    }

    const cardHolder = this.$["card-holder"];
    const full = cardHolder.querySelector("viz-full-card");

    const prev = this.stack.pop();
    const divided = prev.element;

    this.$.header.textContent = divided.data.name;

    const startRect = full.getBoundingClientRect();
    const endRect = prev.rect;
    const endScale = endRect.height / startRect.height;
    
    cardHolder.insertBefore(divided, full);

    new TimelineMax().to(full, 0.2, {
      top: endRect.top - startRect.top,
      transform: `scaleY(${endScale})`,
      transformOrigin: "50% 0%",
      onComplete: () => {
        cardHolder.removeChild(full);
      }
    });
  }
}

window.customElements.define(VizDisplay.is, VizDisplay);
