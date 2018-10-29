console.info(0);

function sayWelcome() {
  console.info("Salut " + prenume + ", bine ai venit la noi!");
}

var nume = "Crisan";
var prenume = "Razvan";
var owner = "Razvan's";
var msg1 = "Ai zis Crisan";
var msg2 = 'Nu, am zis "Razvan"';
var template = `Text cu ghilimele " sau simple'`;

var skills = ["html", "css", "js"];

prenume = "Razvi";

console.info("toate variabilele au fost initializate");
console.log(nume);
console.debug("Cum te cheama? " + prenume);
sayWelcome();

// schimb valutar
var cursEUR = 4.5;
var myEUR = 20;
var myRON = 0;
var friendEUR = 10;
var friendRON = 0;

myRON = myEUR * cursEUR;
console.info("eu am " + myRON + "RON");

friendRON = friendEUR * cursEUR;
console.info("eu am " + friendRON + "RON");
