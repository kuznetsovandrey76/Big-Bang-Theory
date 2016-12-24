(function() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", 'data.json', true);
  xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
         if(xhr.status == 200) {
            quotes = JSON.parse(xhr.responseText);  // глобальная переменная с преобразованным data.json
             } else {
           alert('npm install node-static -> 127.0.0.1:8080'); // вызвать обработчик ошибки с текстом ответа
             }
      }
    };
  xhr.send(null);
})();

var colors = ['#16a085', '#27ae60', '#2c3e50', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
var result = document.getElementById('result');
var next = document.getElementById('next');

next.onclick = function foo() {
		var randomQuote = parseInt(Math.random()*quotes.length);
		var quote = quotes[randomQuote];
		if(result.innerHTML == quote) {
			return foo();
		} 
		result.innerHTML = quote;
		var randomColor = parseInt(Math.random()*colors.length);
		document.body.style.backgroundColor = colors[randomColor];
		document.body.children[2].style.backgroundColor = colors[randomColor];
		var twit = "https://twitter.com/intent/tweet?text=" + quote;
		var expression = /(<b>|<\/b>|<br>)/g;
		var twit = twit.replace(expression, '');
		document.body.children[1].href = twit;
} 

