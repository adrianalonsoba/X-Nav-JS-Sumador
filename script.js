function changer (id, newValue) {
	var element = document.getElementById(id);
	element.innerHTML = newValue;
}

function sum(){

	var ops=document.getElementById('op').innerHTML.split('+');
	var result= parseInt(ops[0])+parseInt(ops[1]);
	changer('res','='+result);	

}