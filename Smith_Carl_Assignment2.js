/*Carl Smith
November 6th, 2014
Project 2
Javascript flowchart program
*/


//Variables
var dead = "Jingo has 0 HP left and has died." //String Variable
	gold = 0 //Number Variable
	congrats = "Congratulations on your victory!"
	var Jingo = "While adventuring you find Jingo, a notorious assassin from the land of Draco Falls! Do you need to think of a strategy before you attack him? Click OK for yes."
	

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

var prepare = function(prepare) {
prepare(Jingo)
	if (prepare == true){
		var ready = true
	}
	else {
		var ready = false
	}
}

var prepandattacktime = 10

console.log("While adventuring you find Jingo, a notorious assassin from the land of Draco Falls! Do you need to think of a strategy before you attack him?")

while (prepandattacktime > 0){
	console.log("Attack will start in " + prepandattacktime+"!")
	prepandattacktime--
}
console.log("You have finished preparing and are now ready for the attack!")


//Number Function
function getdamage(int, str){
	var int = 13
	var str = 10
	var getdamage = int+str


}
int = 13
str = 10
var damagedealt = int + str
for(var enemyhp = 150; enemyhp > 0; enemyhp -= damagedealt) {console.log("You raise your "+PrimaryWeapon+" and smash it into Jingo!  Jingo has "+enemyhp+" hp remaining!") };
console.log(dead)

//String Function
var ending1 = confirm("Jingo is now dead")
var ending2 = confirm("therefore your adventure for today is now complete!")
var reward = "You now loot your reward which is "
gold +=1000
console.log(ending1 + ending2 +reward + gold+" gp!")

//final output

console.log("in just today alone "+name+" has proven themself to be a very competant"+heroclass,"."+"during your fight you dealt a wopping 23 damage per hit for a total of 161 damage!  After the death of Jingo, his body was looted to give you 1000 gold for your future upgrades!"+congrats)