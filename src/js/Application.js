import EventEmitter from "eventemitter3";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this.emojis = [];
    this.banana = "🍌";
    this.emit(Application.events.READY);
  }
  setEmojis(emojis) {
    let emojiDiv = document.querySelector("#emojis");
    emojiDiv.textContent = "";
    this.emojis = emojis;
    let newParagraph = document.createElement("p");
    newParagraph.textContent = this.emojis.join(" ");
    emojiDiv.appendChild(newParagraph);
  }

  addBananas() {
    let addbanana = this.emojis.map(m => m + this.banana);
    this.setEmojis(addbanana);
  }
}
