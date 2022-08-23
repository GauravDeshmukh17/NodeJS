const cheerio=require("cheerio");

let htmlText=`<ul id="fruits">
<li class="apple">Apple</li>
<li class="name">Gaurav Deshmukh</li>
This is text inside the fruit id
<li class="orange">Orange</li>
<li class="pear">Pear</li>
</ul>`

let selecTool=cheerio.load(htmlText);

let fruitName=selecTool(".pear");
console.log(fruitName.text());

let fruitNameArr=selecTool("#fruits");
// console.log(fruitNameArr);
console.log(fruitNameArr.text());
