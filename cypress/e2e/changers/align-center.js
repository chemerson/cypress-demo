
function getRandomInt(max) {
   return Math.floor(Math.random() * max);
 }

if(getRandomInt(3)==1) {

   var elements = window.document.querySelectorAll('body, body *');
   var child;
   var ran;
   for(var i = 0; i < elements.length; i++) {
      ran = Math.floor((Math.random() * 5) + 1);
      child = elements[i].childNodes[0];
      if(elements[i].hasChildNodes() && child.nodeType == 3) {
         if(ran=1) {
            elements[i].style.textAlign = 'center'
         }
         }
   }
}