// Test link
console.log("Hello World!");

// 1. Raccolta dati
// Richiesta del numero di chilometri e relativa conversione in type number
const userKm = parseInt(prompt("Indica il numero dei chilometri da percorrere")) // number
console.log("km: ", userKm, typeof userKm);

// Richiesta dell'età del passeggero e relativa conversione in type number
const userAge = parseInt(prompt("Indica l'età del passeggero")) // number
console.log("age: ", userAge, typeof userAge);

// 2. Logica
// Dichiarazione della variabile relativa allo sconto
let discount = 0; // number
let net = 0; // number

// Dichiarazione e calcolo variabile prezzo lordo
let gross = userKm * 0.21; // number
console.log("gross: ", gross);

// Controllo del tipo di sconto da applicare
if (userAge < 18) {
    discount = gross * 20 / 100;
    console.log("discount: ", discount);
} else if (userAge >= 65) {
    discount = gross * 40 / 100;
    console.log("discount: ", discount);
}

// Calcolo del prezzo netto (prezzo lordo - sconto)
net = gross - discount;
console.log("net: ", net);

// Trasformazione del prezzo in formato con 2 decimali
net = net.toFixed(2); // number to string
console.log("net (string rounded): ", net);

// 3. Output
// Preparazione del messaggio con il totale
const resultMessage = `L'importo da pagare è: ${net} €` // string
console.log(resultMessage);

// Stampa in pagina
document.getElementById("age").innerHTML = userAge;
document.getElementById("km").innerHTML = userKm;
document.getElementById("message").innerHTML = resultMessage;