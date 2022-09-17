const task3Element = document.getElementById('task-3');

task3Element.addEventListener('click', noUse)
noUse()
userName('Jeff')

alert(combineStrings('Hello', 'Jeffrey,', 'how are you?'))


function userName(name){
	alert(name)
}

function noUse(){
	alert("Hello Moto")
}

function combineStrings(string1, string2, string3){
	return `${string1} ${string2} ${string3}`
}