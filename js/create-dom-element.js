const getElementFromTemplate = (templateName) => {
  let node = document.createElement('span');
  let template = document.getElementById(templateName);
  let content = template.content ? template.content : template;
  node.appendChild(content);
  return node.cloneNode(true);
};

// const getElementFromTemplate = (template) => {
//   let node = document.createElement('span');
//   let content = template.content ? template.content : template;
//   node.appendChild(content);
//   return node.cloneNode(true);
// };

export default getElementFromTemplate;
