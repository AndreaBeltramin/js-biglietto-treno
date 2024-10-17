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
const totKm = parseInt(prompt("Quanti km vuoi percorrere?"));
//chiedo l'età del passeggero
const userAge = parseInt(prompt("Quanti anni hai?"));
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

//SE i km inseriti sono <0 cioè non è valido scrivo messaggio di output e alert
if (!isTotKmValid) {
	outputMessage = "Non puoi inserire questi Km, riprova";
	alert("Questi Km non possono essere inseriti, prova di nuovo");
}
//ALTRIMENTI SE l'età inserita è <0 cioè non è valida scrivo messaggio di output e alert
else if (!isUserAgeValid) {
	outputMessage = "Non puoi inserire questa età, riprova";
	alert("Questa età non può essere inserita, prova di nuovo");
} // ALTRIMENTI calcolo il prezzo del biglietto in base a quanti km vuole fare
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

	//calcolo il prezzo scontato SE l'età è valida E non è <18 E  >65 E i km sono validi
	if (!isUserAgeValid20 && !isUserAgeValid40 && isTotKmValid) {
		outputMessage =
			"Non hai diritto a nessuno sconto, dovrai pagare " +
			ticketPrice.toFixed(2) +
			" €";
		console.log("In basa alla tua età, non hai diritto a nessuno sconto");
	}

	//calcolo il prezzo scontato SE l'età < 18
	if (isUserAgeValid20) {
		//calcolo lo sconto del 20%
		const discountPrice20 = (ticketPrice * 2) / 100;
		//stampo lo sconto del 20%
		console.log("Lo sconto ammonta a € " + discountPrice20.toFixed(2));
		outputMessage =
			"Visto lo sconto del 20% riservato agli under 18, il prezzo sarà di € " +
			(ticketPrice - discountPrice20).toFixed(2);
	}

	//calcolo il prezzo scontato SE l'età > 65
	if (isUserAgeValid40) {
		//calcolo lo sconto del 40%
		const discountPrice40 = (ticketPrice * 4) / 100;
		//stampo lo sconto del 40%
		console.log("Lo sconto ammonta a € " + discountPrice40.toFixed(2));

		outputMessage =
			"Visto lo sconto del 40% riservato agli over 65, il prezzo sarà di €  " +
			(ticketPrice - discountPrice40).toFixed(2);
	}
}

//!OUTPUT:

//stampo il messaggio di output cioè il prezzo del biglietto
console.log(outputMessage);
//invio messaggio di alert con prezzo del biglietto da pagare
alert(outputMessage);

/* !!!! ALTRO APPROCCIO !!!!
//!RACCOLTA DATI
//chiedi (number) numero km
const userDistance = parseInt(prompt("Quanti km percorrerai?"));

//chiedi (number) età
const userAge = parseInt(prompt("Quanti anni hai?"));

//prepara (number) prezzo, sconto, prezzo finale, sconto percentuale over65, sconto percentuale under 18
let price = 0;
let discountEur = 0;
let finalPrice = 0;
const discountPercUnder18 = 20;
const discountPercOver65 = 40;
let pricePerKm = 0.21;

//prepara (string) messaggio output
let outputMessage = "";

//!ELABORAZIONE
//calcola validità numero di km
const isUserDistanceValid = !isNaN(userDistance) && userDistance > 0;

//calcola validità età
const isUserAgeValid = !isNaN(userAge) && userAge >= 0;

//SE tutti i valori sono validi
if (isUserDistanceValid && isUserAgeValid) {
	//calcolo il prezzo
	price = userDistance * pricePerKm;

	//setta il messaggio di output prezzo pieno
	outputMessage = `Il prezzo del biglietto è di € ${price.toFixed(2)}`;

	//SE l'età del passeggero è <18
	if (userAge < 18) {
		//calcolo lo sconto minorenni
		discountEur = (price * discountPercUnder18) / 100;
		finalPrice = price - discountEur;
		//setto messaggio di output sconto per i minorenni
		outputMessage += `
In quanto Under 18 hai diritto ad uno sconto del ${discountPercUnder18}%. 
Lo sconto è pari ad un ammontare di € ${finalPrice.toFixed(2)}.
Il prezzo finale è pari a € ${finalPrice.toFixed(2)}.`;
	}

	//SE il passeggero è >65
	if (userAge > 65) {
		//calcola lo sconto over65
		discountEur = (price * discountPercOver65) / 100;
		finalPrice = price - discountEur;
		//setto messaggio di output sconto per over65
		outputMessage += `
In quanto Over 65 hai diritto ad uno sconto del ${discountPercOver65}%. 
Lo sconto è pari ad un ammontare di € ${finalPrice.toFixed(2)}.
Il prezzo finale è pari a € ${finalPrice.toFixed(2)}.`;
	}
} else {
	//setta il messaggio di output di errore
	outputMessage = "Errore";
	if (!isUserDistanceValid) {
		outputMessage += `\n- distanza non valida`;
	}
	if (!isUserAgeValid) {
		outputMessage += `\n- età non valida`;
	}
}

//!OUTPUT
//stampa il messaggio
alert(outputMessage);
*/
