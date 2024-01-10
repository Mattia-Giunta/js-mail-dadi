

// **Gioco dei dadi**
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


// **Mail**
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
// **Consigli del giorno:**


// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
// 3. si ma noi cosa vogliamo fare?
// 4. torniamo a scrivere in italiano
// 5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"



// creazione gioco dei dadi

// funzione custom
function randomNumber( min , max ){

    return Math.floor(Math.random() * ( max - min + 1 ) + min )
   
}


// costante del player
const playerHTML = document.getElementById('player');

// costante computer
const computerHTLM = document.getElementById('computer');

// costante bottone
const btnPlayHTML = document.getElementById('btnPlay');

// costante vinto
const winHTML = document.getElementById('win');

// costante perso
const loseHTML = document.getElementById('lose');

// costante pareggio
const drawHTML = document.getElementById('draw');


// funzione al click
btnPlayHTML.addEventListener('click', function(){

    let playerNumber = randomNumber(1, 6);
    let computerNumber = randomNumber(1, 6);
    
    drawHTML.classList.add('d-none');
    winHTML.classList.add('d-none');
    loseHTML.classList.add('d-none');

    if ( playerNumber === computerNumber ){

        playerHTML.innerText = `${playerNumber}`; 
        computerHTLM.innerText = `${computerNumber}`;
        drawHTML.classList.remove('d-none');

    } else if ( playerNumber > computerNumber ) {

        playerHTML.innerText = `${playerNumber}`; 
        computerHTLM.innerText = `${computerNumber}`;
        winHTML.classList.remove('d-none');

    } else   {

        playerHTML.innerText = `${playerNumber}`; 
        computerHTLM.innerText = `${computerNumber}`;
        loseHTML.classList.remove('d-none');
    }   
}
)
// Terminato esercizio dei dadi


// Creazione controllo mail