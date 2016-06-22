//Javascript Review File

console.log("Happy!");

var age=17
var birthyear=1999
var gradyear=2017
var numofsiblings = 4
var funny = "I lied."
var lie = "I know how to do a backflip."
var bandd = "Twenty One Pilots"
var worstt = "Anything Rap.. (Excluding Eminem, Logic, Futuristic, and the 'Oldies'"
var bestt = "This is very difficult but the best song EVER has to be Bohemian Rhapsody."


//string concatenation
console.log("I am " + age + ".");
console.log("I was born in " + birthyear + ".")
console.log("I will graduate from high school in " + gradyear + ".")
console.log("I have " + numofsiblings + " brothers.")

//manipulating the DOM
document.getElementById("my-age").innerHTML = age;
document.getElementById("birth-year").innerHTML = birthyear;
document.getElementById("grad-year").innerHTML = gradyear;
document.getElementById("siblings").innerHTML = numofsiblings;
function revealFunny(){
	document.getElementById("reveal-funny-line").innerHTML = funny;
}
function reveallie(){
	document.getElementById("reveal-lie").innerHTML = lie;
}

function band(){
	document.getElementById("favband").innerHTML = bandd;
}
function worst(){
	document.getElementById("worstsong").innerHTML = worstt;
}
function best(){
	document.getElementById("best").innerHTML = bestt;
}

var counter = 0;
while(counter<10){
	counter ++;
	console.log("The score is " + counter);

}

for (var i = 1; i < 20; i++){
	console.log(i);
}

for (var i = 0; i < 31; i+=5){
	console.log(i)
}


for(var i = 0; i<101; i+=25){
	if(i === 50){
		console.log("Halfway There!")
	}else{
		console.log(i)
	}
}

for(var i=0;i<11;i++){
	if(i===9){
		console.log("Nine")
	}else if(i===10){
		console.log("Ten")
	}else{
		console.log(i)
	}
}

var friends = ["Jake","Darrian","Daniel"];
var friendList = "";

for(i=0; i < friends.length; i++){
	friendList += friends[i];
	console.log(friendList);
}
 
for (var pound =("#"); pound.length<8;pound+="#"){
	console.log(pound);
}


//objects
var beachBag = {
	numBottles		: 3,
	colorOfTowel	: "green",
	isWet			: false,
	zipUp			:function(){
			console.log("Zipper Sound")
	}
}
console.log(beachBag);
console.log(beachBag.isWet);
beachBag.zipUp();






//Arrays

var abc = "abcdefghijklmnopqrstuvwxyz";

var abcarray = ["a","b","c","d","e"];

var numberarray = [1,2,3,4,5];

console.log(abc.charAt(3));
console.log(abcarray[2]);

var typesofsoda = new Array();

typesofsoda[0] = "Blue Raspberry"
typesofsoda[1] = "Mountain Dew"
typesofsoda[2] = "Strawberry"
typesofsoda[3] = "Crush"

console.log(typesofsoda)

var worstsoda = new Array();

worstsoda[0]="Pepsi"
worstsoda[1]="Fruit Punch"

var best




for(i=0; i<21; i+=2){
	console.log(i)
}


for(i=0;i<51;i+=5){
	if(i===50){
		console.log("I'm Rich")
	}else{
		console.log(i)
	}
}

var friend = ["Jake","Darrian","Josh","Daniel"]
for(var i=0;i<friend.length;i++){
	if(friend[i].charAt(0)=="J"){
		console.log(friend[i])
	}

}



var player = {
	name		:"Austin",
	life		: 100,
	damage 		: 10,
	hasSword 	: true,
	hasSniper 	: false,
	hasArmor	:true,

	attack		:function(target){
		console.log(this.name + " attacks " + target + " " + this.damage);
	},

	swingSword	: function(target){
		var damage = 5 * this.damage;
		console.log(this.name + " did " + damage + " damage to " + target);
	},

	giveFood	: function(target){
		console.log(this.name + " gave " + target + " some food.")
	}


}




var creature = {
	isLiving		:false,
	eats			:true,
	runs			:true,
	jumps			:false,
	numOfEyes		:2,
	isCute			:false,
	legs			:2,

	breath			:function(){
		console.log("Aaaarrgh... aaAAARRgh!")
	}

}

creature.breath();

var slowBrains = Object.create(creature);

slowBrains.runs = false;

var speeder = Object.create(creature);

speeder.speed = "100mph";
speeder.attack = 230;

var speeder = {
 scream	:function(){
	console.log("aaaaaAAAAAH!")
}
}



