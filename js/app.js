'use strict';
// Выписать в комментариях. Вам необходимо найти все переменные,
// функции, аргументы и параметры.
// Запишите имена в соответсвующие пункты
// Переменные: years, myDog, guests
// Функции: dogYears, makeTea, secret
// Встроенные функции: 
// Аргументы: myDog, guests, 
// Параметры: dogname, age, cups, tea
 function dogYears(dogname, age){
     let years = age * 2;
    console.log(dogName + ' is ' + years + ' years old');
}
 let myDog = 'Rex';
  dogYears(myDog, 4);

function makeTea (cups, tea){
    console.log('Breawing ' + cups + ' cups of' + tea);
}

 let guests = 2;
 makeTea(guests, 'Earl Grey');

 function secret(){
     console.log('The secret of life is 28');
 }
 secret();