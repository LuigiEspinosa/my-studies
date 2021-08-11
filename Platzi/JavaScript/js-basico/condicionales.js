if (true)
    console.log("Verdadero");
else
    console.log("Falso");

// =========================== //

var edad = 18;

if (edad === 18)
    console.log("Puedes votar por primera vez!");
else if (edad > 18)
    console.log("Puedes votar!");
else
    console.log("No puedes votar!");

// =========================== //

var number = 1;

var result = number === 1 ? "Verdadero" : "Falso";

// =========================== //

var number = 4

switch (number) {
    case 4:
        console.log("I'm number 4");
        break;
    case 40:
        console.log("I'm number 40");
        break;
    case 400:
        console.log("I'm number 400");
        break;

    default:
        console.log("I'm not any of them");
        break;
}