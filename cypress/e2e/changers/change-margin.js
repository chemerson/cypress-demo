function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

if (getRandomInt(3) == 1) {
  var elements = window.document.querySelectorAll("div");
  var child;
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.marginTop = "5px";
  }
}
