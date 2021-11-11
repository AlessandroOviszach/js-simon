// Descrizione:
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri in pagina devono essere rimossi e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// Consigli del giorno:
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzare il programma.

const message = document.getElementById('message');
const display = document.getElementById('display');
const random_numbers = get_random_list(5);

display.innerHTML = random_numbers;

setTimeout(() => {
    display.innerHTML = '';
    message.innerHTML = 'inserisci i 5 numeri presentati a schermo';

    const user_numbers = get_user_numbers(random_numbers.length);
    

    const guessed = user_numbers.filter( number => random_numbers.includes(number) );
    console.log(guessed);

    message.innerHTML = `Totale numeri indovinati : ${guessed.length}. Lista da indovinare ${random_numbers}`;
    display.innerHTML = guessed;



}, 3000);


// FUNCTIONS
// get 5 random num
function get_random_list(item_number) {
    const random_numbers = [];

    while (random_numbers.length < item_number) {
        const rand = get_random_number(1, 100);

        if (!random_numbers.includes(rand)) {
            random_numbers.push(rand);
        }
    }

    return random_numbers;
}

// gen random list
function get_random_number(min, max) {
    return Math.floor( Math.random() * (max - min + 1) ) + min;
}

// get user numbers
function get_user_numbers(asktimes) {
    const numbers = [];

    while (numbers.length < asktimes) {
        const user_numbers = parseInt( prompt(`inserisci il numero ${numbers.length + 1} di ${asktimes}`) );

        if(!numbers.includes(user_numbers) && !isNaN(user_numbers)) {
            numbers.push(user_numbers);
        }
    }

    return numbers;
}