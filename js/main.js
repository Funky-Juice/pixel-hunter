(function () {

  var loadTemplate = function (templateName) {
    var node = document.createElement('span');
    var template = document.getElementById(templateName);
    var content = template.content ? template.content : template;
    node.appendChild(content);
    return node.cloneNode(true);
  };


  // Rules
  var rulesElement = loadTemplate('rules');
  var rulesSubmit = rulesElement.querySelector('.rules__button');

  rulesElement.querySelector('.rules__input').oninput = function () {
    if (this.value) {
      rulesSubmit.removeAttribute('disabled');
    } else {
      rulesSubmit.setAttribute('disabled', '');
    }
  };

  // Slides changer

  var mainElement = document.getElementById('main');

  var switcher = document.createElement('div');
  switcher.innerHTML = '' +
    '<span class="prev"><img src="img/arrow_left.svg" alt="Left" width="50" height="50"></span>   ' +
    '<span class="next"><img src="img/arrow_right.svg" alt="Right" width="50" height="50"></span>';
  switcher.style.cssText = 'text-align: center';
  mainElement.after(switcher);

  var slides = [
    loadTemplate('intro'),
    loadTemplate('greeting'),
    rulesElement,
    loadTemplate('game-1'),
    loadTemplate('game-2'),
    loadTemplate('game-3'),
    loadTemplate('stats')
  ];
  var current = -1;

  var select = function (index) {
    current = index;
    mainElement.innerHTML = '';
    mainElement.appendChild(slides[index]);
  };

  document.querySelector('.next').onclick = function (e) {
    e.preventDefault();

    select(current + 1);
  };

  document.querySelector('.prev').onclick = function (e) {
    e.preventDefault();

    select(current - 1);
  };

  select(0);
})();
