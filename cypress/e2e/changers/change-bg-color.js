var cssText = 'div { background-color: blue; color: white;}'; 
var css = document.createElement('style'); 
css.type = 'text/css'; 
if('textContent' in css) 
    css.textContent = cssText; 
else
    css.innerText = cssText;
document.body.appendChild(css);