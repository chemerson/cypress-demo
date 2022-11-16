function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

if (getRandomInt(3) == 1) {
  var elements = window.document.querySelectorAll("body, body *");
  var child;
  for (var i = 0; i < elements.length; i++) {
    child = elements[i].childNodes[0];
    if (elements[i].hasChildNodes() && child.nodeType == 1) {

    if (getRandomInt(5) == 1) {

        elements[i].parentElement.style.color = 'red'

        let div = document.createElement("div")
        div.append('//ToDo: confirm button')

        elements[i].append(div);
        }
    }
  }
}
