// esercizio di oggi: (insicurissimo) password generator
// nome repo: js-pwdgen-wannabe
// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito21


// nome utente
const userName = prompt('Dimmi il tuo nome');
// cognome utente
const userSurname = prompt('Dimmi il tuo cognome');
// colore preferito
const userfavcolor = prompt('Dimmi il tuo colore preferito');
// stampa nomecognomecolorepreferito21
const userMessage = 'la tua nuova password è :' + userName + userSurname + userfavcolor + 21;

// OUTPUT
// Stampo il risultato all'utente
alert(userMessage);
document.getElementById('user-message').innerHTML = userMessage;