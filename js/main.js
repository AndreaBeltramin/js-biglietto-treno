// TRACCIA
//Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//- il prezzo del biglietto è definito in base ai km (0.21 € al km)
//- va applicato uno sconto del 20% per i minorenni
//- va applicato uno sconto del 40% per gli over 65.
//- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

//PROCEDURA:

//RACCOLTA DATI
//chiedo il numero di km che vuole percorrere
const totKm = parseInt(prompt("Quanti km vuoi percorrere?"));
//chiedo l'età del passeggero
let userAge = parseInt(prompt("Quanti anni hai?"));
//preparo una variabile di output
let outputMessage;

console.log(totKm, userAge);
console.log(typeof totKm, typeof userAge);

//ELABORAZIONE

//calcolo il prezzo del biglietto
const ticketPrice = totKm * 0.21;
console.log(ticketPrice);
console.log(typeof ticketPrice);

//controllo l'età del passeggero
//calcolo il prezzo del biglietto in base allo sconto:
//se l'età < 18 applico il 20%
const discountPrice20 = (ticketPrice * 2) / 100;
const discountPrice40 = (ticketPrice * 4) / 100;

console.log(discountPrice20);
console.log(discountPrice40);

const isUserAgeValid20 = userAge < 18 && userAge > 0;
const isUserAgeValid40 = userAge > 65;

if (isUserAgeValid20) {
	let outputMessage = ticketPrice - discountPrice20;
}

if (isUserAgeValid40) {
	let outputMessage = ticketPrice - discountPrice40;
}

//OUTPUT
//stampo il prezzo dedl biglietto
alert(outputMessage);
