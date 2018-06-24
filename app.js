const carname=document.querySelector ('.carname')
const caryear=document.querySelector ('.caryear')
const caradd=document.querySelector ('.caradd')

let carList = []

if(window.localStorage.data !== undefined){
	carList = carList.concat(json.parse(window.localStorage.data))
}

caradd.addEventListener('click', () => {
	carList.push({
		name: carname.value,
		year: caryear.value
	})
	carname.value = "";
	caryear.value = ""
})
