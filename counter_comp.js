import UILibrary from "./ui_library.js";

const counterComponent = {
  type: "div",
  props: { className: "counter" },
  children: [
    {
      type: "h1",
      props: {},
      children: ["Counter"],
    },
    {
      type: "button",
      props: { className: "increment-button" },
      children: ["Increment"],
      events: {
        click: () => alert("Increment!"),
      },
    },
  ],
};

const app = new UILibrary("#app");
app.render(counterComponent);
