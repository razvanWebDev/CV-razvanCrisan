function learnVariables() {
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
}

// learnVariables();

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

function extract2FromATM(amount) {
  var disponibil = 1000;
  var comision = amount * 0.01;
  var sumaRamasa = disponibil - amount - comision;

  if (amount % 10 !== 0) {
    console.info("==== ==== ==== ==== ====");
    console.warn("Suma extrasa tebuie sa fie multiplu de 10!");
    console.info("==== ==== ==== ==== ====");
  } else {
    console.info("==== ==== ==== ==== ====");

    if (disponibil < amount + comision) {
      console.warn("Fonduri insuficiente!");
    } else {
      if (comision < 2.5) {
        comision = 2.5;
        console.warn("comision minim aplicat");
      }

      console.info("suma extrasa este: " + amount + " Lei");
      console.info("comision aplicat: " + comision);
      console.info("Suma ramasa in cont: " + sumaRamasa + " Lei");
    }
    console.info("==== ==== ==== ==== ====");
  }
  amount = sumaRamasa; // de rezolvat
}

extract2FromATM(600);

var atmFunds = 50000;
var funds = 5000; // var globala (nu a fost definita in int functiei)

function getExtraxtFee(ammount) {
  var comision = ammount * 0.01;
  if (comision < 2.5) {
    comision = 2.5;
    console.warn("comision minim aplicat");
  }
  return comision;
}
// TODO implement
function checkExtractPermissions() {
  return true;
}

function extractFromATM(ammount) {
  console.info("==== ==== ==== ==== ====");
  console.info("suma extrasa este: " + ammount);
  var comision = getExtraxtFee(ammount);

  var totalExtract = ammount + comision;

  if (totalExtract > funds) {
    console.error("insufficient funds");
    return;
  }
  if (atmFunds < totalExtract) {
    console.error("ATM insufficient funds!");
    return;
  }

  funds = funds - totalExtract;
  atmFunds = atmFunds - ammount;
  // atmFunds -= ammount;   versiunea simplificata pt operatiunea de mai sus

  console.info("comision aplicat: " + comision);
  console.info("Sold curent: " + funds);
  console.info("==== ==== ==== ==== ====");
}

extractFromATM(1005);
extractFromATM(100000);
extractFromATM(3000);
extractFromATM(3000);
extractFromATM(100);
