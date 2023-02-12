import count from './js/count';
import sum from './js/sum';
// 引入资源，webpack才能打包资源
import './css/index.css';

console.log(count(10, 1));
console.log(sum(10, 1));