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
}

function learnIterators() {
  function countTo(n) {
    console.info("sa numaram pana la " + n);
    //for(init; condition; after)
    for (var i = 1; i <= n; i++) {
      console.info(i);
    }
  }

  function countDown(n) {
    var i = n;
    for (; i > 0;) {
      console.info(i);
      i--;
    }

    //SAU simplificat
    while (n > 0) {
      console.info(n);
      n--;
    }
  }
  countDown(10);
  countTo(10);
}
// learnIterators(); //

// learnVariables();

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

    }

    // learnVariables();


    console.info("suma extrasa este: " + amount + " Lei");
    console.info("comision aplicat: " + comision);
    console.info("Suma ramasa in cont: " + sumaRamasa + " Lei");
  }
  console.info("==== ==== ==== ==== ====");
}
// amount = sumaRamasa; // de rezolvat


// extract2FromATM(600);

var atmFunds = 50000;
var funds = 5000; // var globala (nu a fost definita in int functiei)



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

// extract2FromATM(600);

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


// extractFromATM(1005);
// extractFromATM(100000);
// extractFromATM(3000);
// extractFromATM(3000);
// extractFromATM(100);

function sumNumbers(a, b) {
  var c = 1;
  while (c <= a + b) {
    console.info(c);
    c++;
  }
}
// sumNumbers(2, 3);

function addNumbers(a, b) {
  console.info("Numaram pana la " + a);
  for (var c = 1; c <= a; c++) { }

  console.info("Apoi din " + b + " luam 1 si pe care il adaugam la " + (c - 1) + ", am mai ramas cu " + (b - 1) + ", Iar totalul este " + c);

  while (b-- > 1) {
    c++;
    console.info("Din " + b + " luam 1 si pe care il adaugam la " + (c - 1) + ", am mai ramas cu " + (b - 1) + ", Iar totalul este " + c);
  }

}
// addNumbers(2, 7);

function addNumbers2(a, b) {
  console.info("Numaram pana la " + a);
  console.info("Apoi din " + b + " luam 1 si pe care il adaugam la " + a + ", am mai ramas cu " + (b - 1) + ", Iar totalul este " + (a + 1));

  while (b-- > 1) {
    a++;
    console.info("Din " + b + " luam 1 si pe care il adaugam la " + a + ", am mai ramas cu " + (b - 1) + ", Iar totalul este " + (a + 1));
  }
}
// addNumbers2(5, 7);


function sumSeveralNumbers() { }

// de revazut functia de mai jos!!!
function sumArray(array) {
  var array = [a, b, c, d];
  var i = arr.length;
  var sum = 0;
  while (--i) sum += arr[i];
  return sum;
}

// sumArray(1,2,3)