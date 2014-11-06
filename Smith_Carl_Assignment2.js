/*Carl Smith
November 6th, 2014
Project 2
Javascript flowchart program
*/


//Variables
var dead = "Jingo has 0 HP left and has died." //String Variable
	int = 13 //Number Variable
	str = 10 //Number Variable
	congrats = "Congratulations on your victory!"
	

//prompt

var name = prompt("What is your name, Hero?", "")
	heroclass = prompt("Are you a mage or a fighter?", '')
	
	

//procedure


var PrimaryWeapon = prompt("What is your primary weapon?")
var PrimaryElement = prompt("What is your primary element? Enter fire or earth")
	if(PrimaryElement == 'fire') {
		console.log("You are wielding the mythical Incendiary ", PrimaryWeapon, " of Disintigration!")
}
	else {
		console.log("You are wielding the mythical Tremmering ", PrimaryWeapon, " of Obliteration!")
}

//Confirm

var boolean = confirm("Are you ready to go on your first adventure and look for a battle? Click OK for yes.")

//Boolean Function
var Jingo = "While adventuring you find Jingo, a notorious assassin from the land of Draco Falls! Do you need to think of a strategy before you attack him? Click OK for yes."

var prepare = confirm(Jingo)
	if (prepare == true){
		var ready = true
	}
	else {
		var ready = false
	}

var prepandattacktime = 10

console.log("While adventuring you find Jingo, a notorious assassin from the land of Draco Falls! Do you need to think of a strategy before you attack him?")

while (prepandattacktime > 0){
	console.log("Attack will start in " + prepandattacktime+"!")
	prepandattacktime--
}
console.log("You have finished preparing and are now ready for the attack!")

//Number Function
var maxdamage = int + str //Maximum damage that can be dealt in a single attack

for (var enemyhp = 150; enemyhp > 0; enemyhp -= maxdamage) {console.log("You raise your "+PrimaryWeapon+" and smash it into Jingo!  Jingo has "+enemyhp+" remaining!") };
console.log(dead)
