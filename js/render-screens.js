
const mainElement = document.getElementById('main');

const renderScreen = (elem) => {
  mainElement.innerHTML = '';
  mainElement.appendChild(elem);
};

export default renderScreen;
