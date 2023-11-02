function customRender(reactElement, root) {
  const element = document.createElement(reactElement.type);
  element.innerHTML = reactElement.children;
  element.setAttribute("href", reactElement.props.href);
  element.setAttribute("target", reactElement.props.target);

  root.appendChild(element);
}

const reactElement = {
  type: "a",
  props: { href: "https://www.google.com", target: "_blank" },
  children: "Visit Google",
};

const root = document.querySelector("#root");

customRender(reactElement, root);
