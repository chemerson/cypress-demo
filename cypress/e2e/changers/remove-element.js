
function getRandomInt(max) {
   return Math.floor(Math.random() * max);
 }

if(getRandomInt(3)==1) {
   var elements = window.document.querySelectorAll("body, body *");
   var child;
   for(var i = 0; i < elements.length; i++) {
      child = elements[i].childNodes[0];
      if(elements[i].hasChildNodes() && child.nodeType == 1) {
         elements[i].removeChild(child);
      }
   }
}