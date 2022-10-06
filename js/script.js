// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
// Il biglietto andrà stampato in pagina!

/*
    chiedere distanza da percorrere
    chiedere eta passeggero

    prezzo biglietto per km 0.21*distanza
    se eta <18 
        prezzo -20%
    altrimenti se >65
        prezzo -40%
    
    prezzo finale

    stampa biglietto
*/

'use strict'

let dist = prompt('quanto dista la tua meta in km?');
let eta = prompt('quanti anni hai?');

if (isNaN(dist)){
    dist = prompt('quanto dista la tua meta in km? (inserire un numero)');
}
if (isNaN(eta)){
    eta = prompt('quanti anni hai? (inserire un numero)');
}

const prezzoPieno = parseFloat(dist) * 0.21
let prezzoFinale = prezzoPieno;
let fraseticket = ''
if (parseInt(eta) < 18){
    prezzoFinale = (prezzoPieno * 0.8).toFixed(2);
    fraseticket = 'Dato che sei minorenne, puoi accedere ad uno sconto del 20% ma ti consigliamo di viaggiare con un adulto';
} else if (parseInt(eta) > 65){
    prezzoFinale = (prezzoPieno * 0.6).toFixed(2);
    fraseticket = 'Dato che sei un over 65, puoi accedere ad uno sconto del 40%';
}

document.getElementById("ticket").innerHTML =`
<h1>La tua tratta percorre ${dist}km</h1>
<p>${fraseticket} <br>
il prezzo del tuo biglietto &egrave; di: ${prezzoFinale}
</p>
`;