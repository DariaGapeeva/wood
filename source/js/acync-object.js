//Объекты - тип данных не относится к примитивам
// const person = {
// 	name: 'Anton',
// 	age: undefined,
// 	isProgrammer: true,
// 	languages: ['ru', 'en', 'sam'],
// 	// 'complex key': 'Complex Value',
// 	// ['key_' + (1 + 3)]: 'Computed Key',
// 	greet() {
// 		console.log('greet from person')

// 	}
// }
// console.log(person.name)
// console.log(person['age'])
// console.log(person["complex key"])


// console.log(person)
// person.greet()
// person.age++
// person.languages.push('elf')
// console.log(person)
// person['key_4'] = undefined
// console.log(person)
// console.log(person['key_4'])

// delete person['key_4']
// console.log(person)
// const name = person.name
// const age = person.age
// const languages = person.languages

// const { name, age: personAge = 10, languages } = person
// console.log(name, personAge, languages)
// console.log(person)

// for (let key in person) {
// 	if (person.hasOwnProperty(key)) {
// 	console.log('key', key)
// 	console.log('value', person[key])
// 	}

// }
// const keys = Object.keys(person)
// console.log(keys)
// keys.forEach((key) => {
// 	console.log('key ', key)
// 	console.log('value ', person[key])

// }
// )


// // Context
// const person = {
// 	name: 'Anton',
// 	age: undefined,
// 	isProgrammer: true,
// 	languages: ['ru', 'en', 'sam'],
// 	// 'complex key': 'Complex Value',
// 	// ['key_' + (1 + 3)]: 'Computed Key',
// 	greet() {
// 		console.log('greet from person')
// 	},
// 	info() {
// 		console.log('this ', this)

// 		console.log('Информация про человека по имени:', this.name)

// 	}
// }
// //person.info()
// const logger = {
// 	keys() {
// 		console.log('Object keys: ', Object.keys(this))
// 	},
// 	keyAndValues() {
// 		// Object.keys(this).forEach(key => {
// 		// 	console.log(`"${key}": ${this[key]}`)
// 		// })
// 		//const self = this
// 		Object.keys(this).forEach(function (key) {
// 			console.log(`"${key}": ${this[key]}`)
// 		}.bind(this))
// 		//почему не работает , слово function задает свой собственный контекст
// 	},
// 	withParams(top = false, between = false, bottom = false) {
// 		if (top) {
// 			console.log('_______________Start______________')
// 		}
// 		Object.keys(this).forEach((key, index, array) => {
// 			console.log(`"${key}": ${this[key]}`)
// 			if (between && index !== array.length - 1) {
// 				console.log('_______Center__________')

// 			}
// 		})
// 		if (bottom) {
// 			console.log('___________End_________')

// 		}
// 	}
// }
// // const bound = logger.keys.bind(person)
// // bound()
// // logger.keys.call(person)
// // logger.keyAndValues.call(person)
// logger.withParams.call(person, true, true, true)
// logger.withParams.call(person, [true, true, true])

//Асинхронность
//Event Loop

// const timeOut = setTimeout(() => {

// 	console.log('After')

// }, 2500)

// clearTimeout(timeOut)

// const interval = setInterval(() => {

// 	console.log('After')

// }, 1000)

// clearInterval(timeOut)
// const delay = (callback, wait = 1000) => {
// 	setTimeout(callback, wait)
// }
// delay(() => {
// 	console.log('after 2 seconds')

// }, 2000)
const delay = (wait = 1000) => {
	return promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			// resolve()
			reject('что-то пошло не так? повторите попытку')
		}, wait)
	})
	return promise
}
// delay(2500)
// 	.then(() => {
// 		console.log('After 2 seconds')
// 	})
// 	.catch(err => console.error('Error:', err))
// 	.finally(() =>
// 		console.log('Finally')

// 	)
// const getData = () => new Promise(resolve => resolve([1, 1, 2, 3, 5, 8]))
// getData().then(data => console.log(data))

async function asyncExample() {
	try {
		await delay(3000)
		const data = await getData()
		console.log('Data', data)
	}
	catch (e) {
		console.log(e)

	} finally {
		console.log('Finally')

	}

}
asyncExample()