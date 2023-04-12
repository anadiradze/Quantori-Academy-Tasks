const createElement = ({
  tag,
  attributes = {},
  classList = [],
  text,
  parent,
  child,
  eventListener,
}) => {
  const element = document.createElement(tag);

  if (attributes) {
    const entries = Object.entries(attributes);
    entries.forEach(([attr, value]) => {
      element.setAttribute(attr, value);
    });
  }

  if (classList) {
    element.classList.add(...classList);
  }

  if (text) {
    element.textContent = text;
  }

  if (eventListener) {
    const { event, listener } = eventListener;
    element.addEventListener(event, listener);
  }

  if (child) {
    element.appendChild(child);
  }

  if (parent) {
    parent.appendChild(element);
  }

  return element;
};

export default createElement;
