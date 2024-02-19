import {
  init,
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
  h,
} from "https://cdn.skypack.dev/snabbdom";

const patch = init([
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
]);

class UILibrary {
  constructor(selector) {
    this.container = document.querySelector(selector);
    this.vnode = this.container;
    this.isMounted = false;
  }

  template(component) {
    if (typeof component === "string") {
      return component;
    }
    return h(
      component.type,
      { ...component.props, on: { ...component.events } },
      component.children
        ? component.children.map((child) => this.template(child))
        : []
    );
  }

  render(component) {
    this.vnode = patch(this.vnode, this.template(component));
    if (!this.isMounted) {
      this.componentDidMount();
      this.isMounted = true;
    }
  }

  componentDidMount() {
    console.log("Component mounted");
  }
}

export default UILibrary;
