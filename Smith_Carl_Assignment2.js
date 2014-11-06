/*Carl Smith
November 6th, 2014
Project 2
Javascript flowchart program
*/


//Variables
var dead = "Jingo has lost all HP and died, congratulations on your victory!" //String Variable
	enemyHP = 115 //Number Variable
	boolean = 'true'
	int = 13 //Number Variable
	str = 10 //Number Variable
	damage = int + str
//prompt

var name = prompt("What is your name, Hero?", "")
	heroclass = prompt("Are you a mage or a fighter?", '')
	
	

//procedure

var PrimaryElement = prompt("What is your primary element? Enter fire or earth")
var PrimaryWeapon = prompt("What is your primary weapon?")


if(PrimaryElement == 'fire') {
	console.log("You are wielding the mythical Incendiary ", PrimaryWeapon, " of Disintigration!")
}
else {
	console.log("You are wielding the mythical Tremmering ", PrimaryWeapon, " of Obliteration!")
}
