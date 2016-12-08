let renderPage = (element) => {
  let mainElement = document.getElementById('main');
  mainElement.innerHTML = '';
  return mainElement.appendChild(element);
};

export default renderPage;
