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

// var colors = ['#16a085', '#27ae60', '#2c3e50', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
var colors = ['orange', 'lightblue', 'tomato', 'khaki', 'darksalmon', 'lightpink', 'lightgreen', 'thistle'];

var result = document.getElementById('result');
var next = document.getElementById('next');

function foo() {
		setTimeout(function() {
			var randomQuote = parseInt(Math.random()*quotes.length);
			var quote = quotes[randomQuote];
			var randomColor = parseInt(Math.random()*colors.length);
			var color = colors[randomColor];
				if(result.innerHTML == quote || document.body.style.backgroundColor == color) {
				return foo();
			} 
			document.body.style.backgroundColor = color;
			document.body.children[3].style.backgroundColor = color;
			result.innerHTML = quote;
			var twit = "https://twitter.com/intent/tweet?text=" + quote;
			var expression = /(<b>|<\/b>|<br>)/g;
			var twit = twit.replace(expression, '');
			document.body.children[2].href = twit;
		}, 500);
		
} 
next.addEventListener('click', foo);

/* // Raphael js
                    // x, y, width, height (x, y - крайний левый угол)
var paper = Raphael(0, 0, 200, 200);
                    // x, y, width, height (x, y - середина фигуры; width, height - радиус)
var c = paper.ellipse(100, 100, 98, 25).attr( {stroke: 'black', 'stroke-width': 2});
c.transform("r90");
var c = paper.ellipse(100, 100, 98, 25).attr('stroke-width', 2);
c.transform("r30");
var c = paper.ellipse(100, 100, 98, 25).attr('stroke-width', 2);
c.transform("r150");

var d = paper.circle(50, 50, 5).attr('fill', 'white'); // left
var d = paper.circle(170, 80, 5).attr( { fill: 'white', stroke: 'black', 'stroke-width': 1} ); // right
var d = paper.circle(83, 170, 5).attr('fill', 'white');
*/