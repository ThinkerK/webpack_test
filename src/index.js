
import 'babel-polyfill'
import demo from './demo.js';
import './style/common.css';
import './style/mixin.scss';
debugger
let htmlStr = `测试babel ${demo}`
window.document.getElementById('app').innerText = htmlStr


