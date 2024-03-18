async function valut() {
	const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js')
	const data = await response.json()
	let USD = document.querySelector('.USD')
	let EUR = document.querySelector('.EUR')
	let u = data.Valute.USD.Value.toFixed(2)
	let e = data.Valute.EUR.Value.toFixed(2)
	USD.innerText = 'Доллар = ' + u
	EUR.innerHTML = 'Евро = ' + e
}
valut()
