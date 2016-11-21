// const createElementDOM = (string) => {
//   let container = document.createElement('div');
//   let content = string.content ? string.content : string;
//   container.appendChild(content);
//   return container.cloneNode(true);
// };

const createElementDOM = (string) => {
  let container = document.createElement('div');
  let content = string.content ? string.content : string;
  container.innerHTML = content;
  return container.firstChild;
};

export default createElementDOM;
