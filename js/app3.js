'use strict';
let txt= 'я люблю JS!';
let sub = txt.substr(0,2);
console.log(sub);

let txt2 = 'я люблю JS!';
let sub2 = txt2.substring(0, 2);
console.log(sub2);

let txt3 = 'я люблю JS!';
let sub3 = txt3.slice(0, 2);
console.log(sub3);

// Дана строка 'я люблю JS!'. Вырежите из нее слово 
// 'люблю' и слово 'javascript' тремя разными способами 
// (через substr, substring, slice).