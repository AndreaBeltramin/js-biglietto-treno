// TRACCIA
//Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//- il prezzo del biglietto è definito in base ai km (0.21 € al km)
//- va applicato uno sconto del 20% per i minorenni
//- va applicato uno sconto del 40% per gli over 65.
//- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

//PROCEDURA:

//!RACCOLTA DATI:

//chiedo il numero di km che vuole percorrere
let totKm = parseInt(prompt("Quanti km vuoi percorrere?"));
//chiedo l'età del passeggero
let userAge = parseInt(prompt("Quanti anni hai?"));
//preparo una variabile di output
let outputMessage;

//stampo la variabile km e età e il loro tipo
console.log("Vuoi percorrere " + totKm + " km,", "Hai " + userAge + " anni");
//console.log(typeof totKm, typeof userAge);

//!DICHIARAZIONE:
//dichiaro quando è valido lo sconto del 20%
const isUserAgeValid20 = userAge > 0 && userAge < 18;
//dichiaro quando è valido lo sconto del 40%
const isUserAgeValid40 = userAge > 65;
//dichiaro quando il numero di km è valido per essere inserito
const isTotKmValid = totKm > 0;
//dichiaro quando è valida l'età inserita
const isUserAgeValid = userAge > 0;

//!ELABORAZIONE:

//Scrivo messaggio di output e alert se i km inseriti sono <0 cioè non è valido
if (!isTotKmValid) {
	outputMessage = "Non puoi inserire questi Km, riprova";
	alert("Questi Km non possono essere inseriti, prova di nuovo");
} else if (
	//Scrivo messaggio di output e alert se l'età inserita è <0 cioè non è valida
	!isUserAgeValid
) {
	outputMessage = "Non puoi inserire questa età, riprova";
	alert("Questa età non può essere inserita, prova di nuovo");
} //calcolo il prezzo del biglietto in base a quanti km vuole fare
else {
	ticketPrice = totKm * 0.21;
	//stampo la variabile prezzo biglietto e il suo tipo
	console.log(
		"In base ai km che vuoi percorrere pagherai " +
			ticketPrice.toFixed(2) +
			" €"
	);
	//console.log(typeof ticketPrice);

	// calcolo il prezzo del biglietto in base allo sconto:

	//calcolo il prezzo scontato se l'età è valida e non è ne <18 ne >65
	if (!isUserAgeValid20 && !isUserAgeValid40 && isTotKmValid) {
		outputMessage =
			"Non hai diritto a nessuno sconto, dovrai pagare " +
			ticketPrice.toFixed(2) +
			" €";
		console.log("In basa alla tua età, non hai diritto a nessuno sconto");
	}

	//calcolo il prezzo scontato se l'età < 18
	if (isUserAgeValid20) {
		//calcolo lo sconto del 20%
		const discountPrice20 = (ticketPrice * 2) / 100;
		//stampo lo sconto del 20%
		console.log("Lo sconto ammonta a € " + discountPrice20);
		outputMessage =
			"Il prezzo scontato sarà di € " +
			(ticketPrice.toFixed(2) - discountPrice20);
	}

	//calcolo il prezzo scontato se l'età > 65
	if (isUserAgeValid40) {
		//calcolo lo sconto del 40%
		const discountPrice40 = (ticketPrice * 4) / 100;
		//stampo lo sconto del 40%
		console.log("Lo sconto ammonta a € " + discountPrice40);

		outputMessage =
			"Il prezzo scontato sarà di € " +
			(ticketPrice.toFixed(2) - discountPrice40);
	}
}

//!OUTPUT:

//stampo il messaggio di output cioè il prezzo del biglietto
console.log(outputMessage);
//invio messaggio di alert con prezzo del biglietto da pagare
alert(outputMessage);
