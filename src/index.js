// если экспорт был именованный, то при импорте указываются точные названия и используются синтаксис с {}
import { APP_VERSION, DEVELOPER } from './constants.js'

// ❌ такая запись не верна
// import APP_VERSION, DEVELOPER from './constants'

// можно давать любое имя при импорте, если экспорт был по умолчанию
import theBestFunction from './function.js'

console.log(theBestFunction());

console.log(APP_VERSION, DEVELOPER);

import fun from './arrays.js';
console.log(fun.firstElement('Hello'))
console.log(fun.lastElement('Word'))

import { add, div } from './math.js';
console.log(add(5,4), div(10,2))