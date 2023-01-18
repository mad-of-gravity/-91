import EventEmitter from "eventemitter3";
import Beat from "./Beat";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();

    this.lyrics = ["Ah", "ha", "ha", "ha", "stayin' alive", "stayin' alive"];
    this.count = 0;
    this._beat = new Beat();
    /*
    const message = document.createElement("div");
    message.classList.add("message");
    message.innerText = "Ah"; */

    
    this.emit(Application.events.READY);

    this._beat.on(Beat.events.BIT, () => this._create());
  }

  _create() {
    this.count = (this.count === this.lyrics.length) ? 0 : this.count;
    
    const message = document.createElement("div");
    message.classList.add("message");
    message.innerText = this.lyrics[this.count++];
    document.querySelector(".main").appendChild(message);
  }
}
