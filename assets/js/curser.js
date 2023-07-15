"use strict";
// ______________________________
// this is some built in file that i use for customize my curser shape
// _______________________________
(() => {
  var o = class {
    constructor(t) {
      this.data = t;
      this.style = "position: fixed; pointer-events: none; top: 0; left: 0;";
      this.body = document.querySelector("body");
      (this.count = this.data.count || 1),
        (this.targets = this.data.targets || !1),
        this.init(),
        this.move(),
        this.status();
    }
    init() {
      new Array(this.count).fill(0).forEach((e, s) => {
        let r = document.createElement("div");
        this.create(r, s);
      });
    }
    create(t, e) {
      t.setAttribute("data-cursor", `${e}`),
        t.setAttribute("style", this.style),
        this.body.append(t);
    }
    move() {
      let t = document.querySelectorAll("[data-cursor]");
      document.addEventListener("mousemove", (e) => {
        let { clientX: s, clientY: r } = e;
        t.forEach((i) => this.position(i, s, r));
      });
    }
    position(t, e, s) {
      t.style.transform = `translate3d(calc(${e}px - 50%), calc(${s}px - 50%), 0)`;
    }
    status() {
      if (this.targets instanceof Array)
        for (let t of this.targets) {
          let e = document.querySelectorAll(t);
          for (let s of e)
            s.addEventListener("mouseover", this.hover.bind(this, t)),
              s.addEventListener("mouseleave", this.hover.bind(this, t));
        }
    }
    hover(t) {
      let e = t.replace(/[.#!]/g, "");
      this.body.classList.toggle(`cursor-hover--${e}`);
    }
  };
  window.Cursor = o;
})();

document.addEventListener("DOMContentLoaded", () => {
  new window["Cursor"]({});
});
