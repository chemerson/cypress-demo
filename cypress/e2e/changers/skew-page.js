function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

if (getRandomInt(3) == 1) {
  var cssText = "div { transform: skewY(.008deg);}";
  var css = document.createElement("style");
  css.type = "text/css";
  if ("textContent" in css) css.textContent = cssText;
  else css.innerText = cssText;
  document.body.appendChild(css);
}
