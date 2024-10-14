// TRACCIA
//Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//- il prezzo del biglietto è definito in base ai km (0.21 € al km)
//- va applicato uno sconto del 20% per i minorenni
//- va applicato uno sconto del 40% per gli over 65.
//- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

//PROCEDURA:

//RACCOLTA DATI:

//chiedo il numero di km che vuole percorrere
const totKm = parseInt(prompt("Quanti km vuoi percorrere?"));
//chiedo l'età del passeggero
const userAge = parseInt(prompt("Quanti anni hai?"));
//preparo una variabile di output
let outputMessage;

//stampo la variabile km e età e il loro tipo
console.log(totKm, userAge);
console.log(typeof totKm, typeof userAge);

//ELABORAZIONE:

//calcolo il prezzo del biglietto in base a quanti km vuole fare
const ticketPrice = totKm * 0.21;

//stampo la variabile prezzo biglietto e il suo tipo
console.log(ticketPrice);
console.log(typeof ticketPrice);

//calcolo il prezzo del biglietto in base allo sconto:

//calcolo lo sconto del 20%
const discountPrice20 = (ticketPrice * 2) / 100;
//calcolo lo sconto del 40%
const discountPrice40 = (ticketPrice * 4) / 100;

//stampo lo sconto del 20% e del 40%
console.log(discountPrice20);
console.log(discountPrice40);

//dichiaro quando è valido lo sconto del 20%
const isUserAgeValid20 = userAge > 0 && userAge < 18;
//dichiaro quando è valido lo sconto del 40%
const isUserAgeValid40 = userAge > 65;

//calcolo il prezzo scontato se l'età < 18
if (isUserAgeValid20) {
	outputMessage = ticketPrice - discountPrice20;
}

//calcolo il prezzo scontato se l'età > 65
if (isUserAgeValid40) {
	outputMessage = ticketPrice - discountPrice40;
}

//calcolo il prezzo scontato se l'età non è ne <18 ne >65
if (!isUserAgeValid20 && !isUserAgeValid40) {
	outputMessage = ticketPrice;
}

//Scrivo messaggio di output e alert se l'età inserita è <0 cioè non è valida
const isUserAgeInvalid = userAge < 0;
if (isUserAgeInvalid) {
	outputMessage = "Non puoi inserire questa età";
	alert("Questa età non può essere inserita");
}

//Scrivo messaggio di output e alert se i km inseriti sono <0 cioè non è valido
const isKmInvalid = totKm < 0;
if (isKmInvalid) {
	outputMessage = "Non puoi inserire questi Km";
	alert("Questi Km non possono essere inseriti");
}
//OUTPUT:

//stampo il messaggio di output cioè il prezzo del biglietto
console.log(outputMessage);
//invio messaggio di alert con prezzo del biglietto da pagare
alert(outputMessage);
