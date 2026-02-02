/*TRACCIA


Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

il prezzo del biglietto è definito in base ai km (0.21 € al km)
-va applicato uno sconto del 20% per i minorenni
-va applicato uno sconto del 40% per gli over 65.
-L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

TIP:
per controllare che la vostra logica sui prezzi funzioni correttamente, provate a verificare quanto segue:

*/



//HUMAN CODE
/*Che cosa devo fare?
Devo creare un programma che mi calcola il prezzo del biglietto un base a diversi fattori*/

//Come posso spiegarlo alla macchina?
/*
LA MACCHINA DEVE:
-Domandare la destinazione percorsa in KM
-Domandare la mia età
    -SE il valore della mia eta è inferiore a 18
        -Calcolo il prezzo totale (0,21 x KM)
        -Applico un 20% di sconto sul prezzo totale
    ALTRIMENTI SE il valore della mia eta è superiore a 65 
        -Calcolo il prezzo totale (0,21 x KM)
        -Applico uno sconto del 40%
    ALTRIMENTI
        -Calcolo il prezzo totale (0,21 x KM)
-Comunicare il prezzo finale


*/