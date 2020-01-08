import aa from "./a";
import logo from "./logo.png";
// import $ from 'jquery';
// 每个模块中 注入 $
require('./index.css');
require('./index.less');
console.log("$", aa);

// let divv = new Div();
// divv.innerHTML = "1111122";
// document.body.appendChild(divv);

let image = new Image();
image.src = logo;
document.body.appendChild(image);