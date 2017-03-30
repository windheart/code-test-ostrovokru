function Panel() {}

Panel.prototype.init = function(el) {
  var clicks = 0;
  el.addEventListener('click', function() {
    document.querySelector('.' + el.className + '-counter').textContent = ++clicks;
  });
};

function main () {
  var panelsElements = document.querySelector('.wrapper');
  [].slice.apply(panelsElements.children).forEach(function (panelElement) {
    var panel = new Panel();
    panel.init(panelElement);
  });
}

window.onload = main;
