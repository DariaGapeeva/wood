// const nFiv = [0,1]

// for (let i=0; i<20; i++) {

//     nFiv[i+2] = nFiv[i]+nFiv[i+1]
// }
// console.log(nFiv);
// console.log(nFiv[12]);

// const s=2000000,
// years = 5,
// p = 0.1
// const perepl= s/5*(1+p)

// if (true) {
// 	console.log(1);
// }

// const m = 10
// let n

// if (m>50){
// 	n='большое'
// } else {
//     n='маленькое'
// }
// console.log(n);

// let i=2
// while (i<9) {
// 	console.log(i++);
// }

// let i=45
// while (i<671) {
// 	if (i%10===0){
// 	console.log(i);}
//  	i++

// }

// for (let i=45;i<671;i++) {
// 	if (i%10===0){
// 	console.log(i);}
// }
// let size = 120,
//   	unit = "тр"

//   	if (unit === "кб") {
//   		console.log('Колво байт в ' + size + unit + ' равно ' + size*1024 );
//   	} else {
//   		if (unit === "мб"){
//   		console.log('Введено значение в мб');
//   		}
//   		else {
//   			if (unit==="гб"){
//   				console.log('Введено значение в гб');
//   			}
//   			else {
//   				console.log('Введите другое значение');
//   			}
//   		}


//   	}

// console.log('MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER)
// console.log(Math.pow(2, 53) - 1)
// console.log('MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER)
// console.log(Number.MAX_VALUE)
// console.log(Number.MIN_VALUE)
// console.log('Number.POSITIVE_INFINITY', Number.POSITIVE_INFINITY)
// console.log('Number.NEGATIVE_INFINITY', Number.NEGATIVE_INFINITY)

// console.log(1 / 0)
// console.log(NaN)//Not A Number
// console.log(typeof NaN)
// const weird = 2 / undefined
// console.log(isNaN(weird))
// console.log(Number.isNaN(42))
// console.log(isFinite(Infinity))
// const stringInt = '40'
// const stringFloat = '40.42'
// console.log(Number.parseInt(stringInt) + 2)
// console.log(Number(stringInt) + 2)
// console.log(+stringInt + 2)
// console.log(parseInt(stringFloat))
// console.log(parseFloat(stringFloat))



// console.log(parseInt(stringFloat) + 2)
// console.log(0.4 + 0.2)
// console.log(2 / 5 + 1 / 5)
// console.log(+((0.4 + 0.2).toFixed(1)))

//BigInt числа которые больше MAX_SAFE_INTEGER

//console.log(- 9007199254740991999999n)

//console.log(10n - 4)
//console.log(parseInt(10n) - 4)
// console.log(10n - BigInt(4))
//console.log(7n / 2n)

//Math
// function getrandonBetween(min, max) {
// 	return Math.floor(Math.random() * (max - min + 1) + min)
// }


// console.log(getrandonBetween(-10, -2))

//Строки

// const name = 'Дарья'
// console.log(typeof name)
// const age = 35
// function getAge() {
// 	return age
// }
// //const output = 'Привет, меня зовут ' + name + ' и мой возраст - ' + age + 'лет'
// const output = `Привет, меня зовут ${name} и мой возраст лет ${age < 40 ? 'A' : 'B'}`
// console.log(output)
// 
// const name = 'Дарья'
// console.log(name.length)
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())
// console.log(name.charAt(1))
// console.log(name.indexOf('ья'))
// console.log(name.startsWith('Д'))
// console.log(name.toLowerCase().startsWith('д'))
// console.log(name.endsWith('ья'))
// console.log(name.repeat(3))
// const string = '     password      '
// console.log(string.trimRight())

// function logPerson(s, name, age) {
// 	// if (age < 0) {
// 	// 	age = 'еще не родился'
// 	// }
// 	return `${s[0]} ${name} ${s[1]} ${personAge}`
// }
// const personName = 'Дарья'
// const personAge = 34
// const personName2 = 'Антон'
// const personAge2 = 40
// const output = logPerson`Имя: ${personName} Возраст: ${personAge}!!!!`
// const output2 = logPerson`Имя: ${personName2} Возраст: ${personAge2}!!!!`
// console.log(output)
// console.log(output2)

//FUNCTION
//Function declaration можем обращаться к ней когда захотим, можно создавать позже, чем мы ее вызываем
// function greet(name) {
// 	console.log('Привет ', name)

// }
// //Function Expression  нельзя создавть позже, чем мы к ней обращаемся
// const greet2 = function greet2(name) {
// 	console.log('Пока ', name)
// }

// greet('Антон')
// greet2('Антон')
// console.log(typeof greet)
// console.log(typeof greet2)
// console.dir(greet)

//Анонимные функции
// let counter = 0

// const interval = setInterval(function () {
// 	if (counter === 5) {
// 		clearInterval(interval)
// 	} else {
// 		console.log(++counter)
// 	}

// }, 1000)

// Стрелочные функции
// function greet(name) {
// 	console.log('Привет ', name)

// }
// const arrow = (name,age) => {
// 	console.log('Привет', name, age)

// }

// const arrow2 = name => console.log('Пока', name)

// arrow('Дарья')
// arrow2('Дарья')

// const pow2 = num => num ** 2

// console.log(pow2(5))

//Параметры по умолчанию
// const sum = (a = 40, b = 10 + a) => a + b
// console.log(sum(1, 5))
// console.log(sum())

// function sumAll(...all) {
// 	let result = 0
// 	for (let num of all) {
// 		result += num
// 	}
// 	return result
// }
// const res = sumAll(1, 2, 3, 4, 5)
// console.log(res)

// //Замыкания

// function createMamber(name) {
// 	return function (lastName) {
// 		console.log(name + lastName)
// 	}
// }
// const logWihtLastName = createMamber('Daria')
// console.log(logWihtLastName('Gapeeva'))
// console.log(logWihtLastName('Kuchina'))

//Массивы

// const cars = ['Мазда', 'Форд', 'БМВ', 'Мерседес']

// const fib = [1, 1, 2, 3, 5, 8]
// const people = [
// 	{ name: 'Daria', budget: 3000 },
// 	{ name: 'Anton', budget: 3500 },
// 	{ name: 'Vika', budget: 2000 }

// ]
// console.log(cars)

// cars.push('Рено')

// console.log(cars)
// cars.unshift('Волга')
// console.log(cars)

// const firstCar = cars.shift()
// const lastCar = cars.pop()
// console.log(firstCar)
// console.log(lastCar)

// console.log(cars)
// console.log(cars.reverse())
// console.log(cars)

// //Задача 1

// const text = 'Привет, мы изучаем JavaSccript'
// const reverseText = text.split('').reverse().join('')
// console.log(reverseText)

//const index = cars.indexOf('БМВ')
// console.log(cars[index])
// cars[index] = 'porshe'
// console.log(cars)

// let findedPerson
// for (const person of people) {
// 	console.log(person)
// 	if (person.budget === 2000) {
// 		findedPerson = person
// 	}

// }
// console.log(findedPerson)

// console.log(people)


// const index = people.findIndex(function (person) {
// 	return person.budget === 2000


// })
// console.log(index)

// console.log(people[index])

// const person = people.find(function (person) {
// 	return person.budget === 4200
// const person = people.find((person) => {
// 	return person.budget === 2000
// })
// const person = people.find(person => person.budget === 2000)
// console.log(person)


// })

// console.log(person)

// console.log(cars.includes('!!!'))

// const upperCaseCars = cars.map(car => {
// 	return car.toUpperCase()
// })
// console.log(upperCaseCars)
// const pow2 = num => num ** 2
// // const sqrt = num => Math.sqrt(num)
// const pow2Fib = fib.map(pow2).map(Math.sqrt)
// const filteredNumbers = pow2Fib.filter(num => num > 5
// )
// console.log(pow2Fib)
// console.log(filteredNumbers)

// const people = [
// 	{ name: 'Daria', budget: 3000 },
// 	{ name: 'Anton', budget: 3500 },
// 	{ name: 'Vika', budget: 2000 }

// ]
// // const allBudget = people.reduce((acc, person) => {
// // 	if (person.budget > 2500) {
// // 		acc += person.budget
// // 	}
// // 	return acc
// // }, 0)
// const allBudget = people.
// 	filter(person => person.budget . 2500).
// 	reduce((acc, person) => {	
// 	acc += person.budget	
// 	return acc
// }, 0)

// console.log(allBudget)
//Объекты

//=========================================================================
//1.Калькулятор function plus() {
// 	var num1, num2, result
// 	num1 = document.getElementById('n1').value
// 	num1 = parseInt(num1)

// 	num2 = document.getElementById('n2').value
// 	num2 = parseInt(num2)
// 	result = num1 + num2
// 	document.getElementById('out').innerHTML = result

// }
// function minus() {
// 	var num1, num2, result
// 	num1 = document.getElementById('n1').value
// 	num1 = parseInt(num1)

// 	num2 = document.getElementById('n2').value
// 	num2 = parseInt(num2)
// 	result = num1 - num2
// 	document.getElementById('out').innerHTML = result

// }

//=========================================================================

//Необходимо реализховать метод меняющий порядок элементов в массиве на обратный без использования сторонних библиотек

// let a = [2, 4, 5, 5, 7]
// console.log(a.reverse()) вариант 1

// 2 вариантт
// function r1(a) {
// 	return a.reverse()
// }
// console.log(r1(a))

// 3 вариант

// function r2(a) {
// 	res = []
// 	a.forEach(element => {
// 		res.unshift(element)
// 	});
// 	return res
// }
// console.log(r2(a))

// function r3(a) {
// 	res = []
// 	for (let i = a.length; i >= 0; i--) {
// 		res.push(a[i])
// 	}
// 	return res
// }
// console.log(r3(a))

// Объекты

// const person = {
// 	name: 'Daria',
// 	age: undefined,
// 	isProgrammer: true,
// 	languages: ['ru', 'en', 'elf'],
// 	'complex key': 'Complex Value',
// 	['key ' + (1 + 3)]: 'Computed Key',
// 	greet() {
// 		console.log('greeet from person')

// 	}
// }
// console.log(person.name)
// console.log(person['age'])
// console.log(person["complex key"])
// console.log(person)
// console.log(person.greet())

// person.age++
// person.languages.push('by')
// console.log(person)
// //person['key 4'] = undefined
// console.log(person)

// console.log(person['key 4'])

// delete person['key 4']
// console.log(person)


//Деструктуризизация

// const name = person.name
// const age = person.age
// const languages = person.languages

// const { name, age: personAge = 10, languages } = person
// console.log(name, personAge, languages)

// const person = {
// 	name: 'Daria',
// 	age: 34,
// 	isProgrammer: true,
// 	languages: ['ru', 'en', 'elf'],
// 	// 'complex key': 'Complex Value',
// 	// ['key ' + (1 + 3)]: 'Computed Key',
// 	greet() {
// 		console.log('greeet from person')

// 	}
// }

// for (let key in person) {
// 	if (person.hasOwnProperty(key)) {
// 		console.log(key, ' ', typeof key)
// 		console.log('value:', person[key])
// 	}



// }
// console.log(person)

// const keys = Object.keys(person)
// console.log(keys)

// keys.forEach((key) => {
// 	console.log('key:', key)
// 	console.log(('value:', person[key]))
// })

// Контекст Context
// const person = {
// 	name: 'Daria',
// 	age: 34,
// 	isProgrammer: true,
// 	languages: ['ru', 'en', 'elf'],
// 	// 'complex key': 'Complex Value',
// 	// ['key ' + (1 + 3)]: 'Computed Key',
// 	greet() {
// 		console.log('greeet from person')
// 	},
// 	info() {
// 		console.log(this)

// 		console.log('Информация про человека по имени:', this.name)

// 	}
// }



// // person.info()
// const logger = {
// 	keys() {
// 		console.log('Object Keys', Object.keys(this))

// 	},
// 	keysAndValues() {
// 		//1 Object.keys(this).forEach(key => {
// 		// 	console.log(`"${key}": ${this[key]}`)
// 		// })
// 		// 2 const self = this
// 		// Object.keys(this).forEach(function (key) {
// 		// 	console.log(`"${key}": ${self[key]}`)
// 		// })
// 		Object.keys(this).forEach(function (key) {
// 			console.log(`"${key}": ${self[key]}`)
// 		}.bind(this))

// 	}
// }
// // 
// // logger.keys.call(person)
// logger.keysAndValues.call(person)

// Object.prototype.sayHello = function () {
// 	console.log('Hello')
// }

// // }
// const lena = Object.create(person)
// lena.name = 'Elena'

// const str = new String('I am string')

// //Написать функцию, которая определяет является ли трока палиндромом или нет. Вернуть false или true

// //Долгий метод
// // function palindrom(str) {
// // 	//перевести строку в нижний регистр
// // 	str = str.toLowerCase()
// // 	//строка в массив
// // 	let str2 = str.split('')
// // 	str2 = str2.reverse()
// // 	str2 = str2.join('')
// // 	if (str === str2) return true
// // 	else return false
// // 	return str2
// // }
// // console.log(palindrom('Abba'))
// //Способ покороче
// // function palindrom(str) {
// // 	//перевести строку в нижний регистр
// // 	str = str.toLowerCase()
// // 	//строка в массив
// // 	return str === str.split('').reverse().join('')

// // }
// // console.log(palindrom('Abba2'))

// const palindrom = str => {
// 	//перевести строку в нижний регистр
// 	str = str.toLowerCase()
// 	//строка в массив
// 	return str === str.split('').reverse().join('')

// }
// console.log(palindrom('Abba'))
// console.log(typeof null)


//Шахматы
let chess = [
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0]
]

function draw() {
	let out = ''
	let m = 0
	for (let i = 0; i < chess.length; i++) {
		let arr = chess[i]
		for (let k = 0; k < arr.length; k++) {
			if (m % 2 === 0) {
				out += `<div class="chess-block" data-x="${k}" data-y="${i}"></div>`
			} else {
				out += `<div class="chess-block bg-black" data-x="${k}" data-y="${i}"></div>`
			}
			m++
		}
		m++
	}
	document.querySelector('#field').innerHTML = out
	document.querySelectorAll('.chess-block').forEach(function (element) {
		element.onclick = horse
	})
}
draw()

function horse() {
	document.querySelectorAll('.chess-block').forEach(function (element) {
		element.classList.remove('orange')
		element.classList.remove('active')
	})
	let x = this.dataset.x
	let y = this.dataset.y
	console.log(x + '   ' + y)
	this.classList.add('orange')
	if (+x + 2 < 8 && +y + 1 < 8) {
		document.querySelector(`.chess-block[data-x="${+x + 2}"][data-y="${+y + 1}"]`).classList.add('active')
	}
	if (+x + 2 < 8 && +y - 1 >= 0) {
		document.querySelector(`.chess-block[data-x="${+x + 2}"][data-y="${+y - 1}"]`).classList.add('active')
	}
	if (+x + 1 < 8 && +y - 2 >= 0) {
		document.querySelector(`.chess-block[data-x="${+x + 1}"][data-y="${+y - 2}"]`).classList.add('active')
	}
	if (+x + 1 < 8 && +y + 2 < 8) {
		document.querySelector(`.chess-block[data-x="${+x + 1}"][data-y="${+y + 2}"]`).classList.add('active')
	}
	if (+x - 1 >= 0 && +y - 2 >= 0) {
		document.querySelector(`.chess-block[data-x="${+x - 1}"][data-y="${+y - 2}"]`).classList.add('active')
	}
	if (+x - 1 >= 0 && +y + 2 < 8) {
		document.querySelector(`.chess-block[data-x="${+x - 1}"][data-y="${+y + 2}"]`).classList.add('active')
	}
	if (+x - 2 >= 0 && +y - 1 >= 0) {
		document.querySelector(`.chess-block[data-x="${+x - 2}"][data-y="${+y - 1}"]`).classList.add('active')
	}
	if (+x - 2 >= 0 && +y + 1 < 8) {
		document.querySelector(`.chess-block[data-x="${+x - 2}"][data-y="${+y + 1}"]`).classList.add('active')
	}
}

































