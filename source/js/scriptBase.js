//1 Переменные
// var name = 'Daria' //variable можем менять
// const firstName = 'Daria'
// //const lastName = 'Gapeeva' // constanta не можем менять
// //let age = 26 //можно менять

// const _private= 'private'

// // Мутирование

// //console.log('Имя человека: ' + firstName + ', а возраст человека ' + age );
// //console.log(age.toString());
// //

// //Операторы

// let currentYear=2020

// const birthYear = 1985
// //const age = currentYear + birthYear

// const a=10
// const b=5
// let c=32
// //c=c+a
// c+=a
// console.log(a+b);
// console.log(a-b);
// console.log(a/b);
// console.log(++currentYear);
// console.log(--currentYear);
// console.log(c);

//Типы данных


// const isProgrammer = true
// const name = 'Daria'
// const age = 26

// console.log(typeof isProgrammer);
// console.log(typeof name);
// console.log(typeof age);
// let d
// console.log(typeof d);
// console.log(typeof null);
//Приорите операторов

//

// //Условные операторы
// const courseStatus = 'fail'

// if (courseStatus==='ready') {
// 	console.log('Курс уже готов и его можно проходить');
// }
// else if (courseStatus==='pending') {
// console.log('Курс пока находится на этапе разработки');}
// else {
// 	console.log('Курс не получился');
// }
// // const num1 = 42
// // const num2 = '42'
// // console.log(num1==num2);
// // console.log(num1===num2);

 const isReady = true
// if (isReady){
// 	console.log('все готово')
// } else{
// 	console.log('все не готово')
// }

//тернарное выражение

// isReady ? console.log('все готово') :console.log('все не готово');

//Булевая логика
//Функции

// function calculateAge(year){
// 	return 2020 - year
// }
// const myAge = calculateAge(1985)
// console.log(myAge)
// console.log(calculateAge(2011));

// function logInfoAbout(name, year){
// 	const age = calculateAge(year)
// 	if (age > 0 ){
// 	console.log('Человек по имени '+ name + ' сейчас имеет возраст',age);
// 	} else
// 	console.log('Вообще-то это уже будующее');
// }
// logInfoAbout('Daria',1985)
// logInfoAbout('Daniil', 2011)
// logInfoAbout('Daria',2021)

//Массивы


//const cars = ['мазда', 'мерседес', 'форд']
//const cars = new Array ('мазда', 'мерседес', 'форд')
// console.log(cars);
// console.log(cars[1]);
// console.log(cars[0]);
// console.log(cars[3]);
// console.log(cars.length);
// cars[0]= 'Porsche'
// console.log(cars);
// cars[cars.length]='mazda'
// console.log(cars);

//циклы
//const cars = ['мазда', 'мерседес', 'форд', 'porsche']
// for (let i=0; i<cars.length; i++ ) {
// 	const car=cars[i]
// 	console.log(car);
// }
 // for (let car of cars) {
 // 	console.log(car);
 // }

 //11 Объекты

 const person = {
 	firstName: 'Daria',
 	lastName: 'Gapeeva',
 	year :1985,
 	lanquages : ['en','rus'],
 	hasHusband: true,
 	greet: function() {
 		console.log('greet')
 	}
 }
 console.log(person.firstName);
 person.greet()
 console.log(person);
 const key = 'year'
 console.log(person[key]);
 person.hasHusband = false
 console.log(person);
 person.isProgrammer = true
 console.log(person);

 //Числа


