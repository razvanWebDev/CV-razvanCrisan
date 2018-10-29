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
var friendEUR = 100;
var friendRON = 0;

myRON = myEUR * cursEUR;
console.info("eu am " + myRON + " RON");

friendRON = friendEUR * cursEUR * 0.99;
console.info("tu ai " + friendRON + " RON");

function extractFromATM(ammount) {
  console.info("==== ==== ==== ==== ====");
  console.info("suma extrasa este: " + ammount);
  var comision = ammount * 0.01;
  if (comision < 2.5) {
    comision = 2.5;
    console.warn("comision minim aplicat");
  }
  console.info("comision aplicat: " + comision);
  console.info("==== ==== ==== ==== ====");
}

extractFromATM(1000);
extractFromATM(100);
