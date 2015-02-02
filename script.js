function changer (id, newValue) {
	var element = document.getElementById(id);
	element.innerHTML = newValue;
}

function sum(){
	var ops=document.getElementById('op').innerHTML.split('+');
	var result= parseInt(ops[0])+parseInt(ops[1]);
	changer('res','='+result);	
}

function random(){
	var op1= Math.floor((Math.random() * 10) + 1);
	var op2= Math.floor((Math.random() * 10) + 1);
	changer('op',op1+'+'+op2);
}