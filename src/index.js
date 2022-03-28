//import 套件
import 'jquery';
import "bootstrap";
import "bricklayer";
const Bricklayer = require("bricklayer");
const bricklayer = new Bricklayer(document.querySelector('.bricklayer'))

//import scss
import './scss/index.scss';
//import js
import './js/waterflow';


if (module.hot) {
    module.hot.accept();
}