// Carrello e sconti particolari - BuildTime #2

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
*/
let user =[
const marco = {
  name: 'Marco',
  lastName: 'Rossi',
  isAmbassador: true,
}

const paul = {
  name: 'Paul',
  lastName: 'Flynn',
  isAmbassador: false,
}

const amy = {
  name: 'Amy',
  lastName: 'Reed',
  isAmbassador: false,
},
];

const prices = [34, 5, 2];
const shippingCost = 50;
const minimunForFreeShipping= 100;

let totalCost;
let discountAmbassador=0.7;
let shoppingCart=0;

let loggedUser=user[1];


for (let i = 0; i < prices.length; i++) {
  shoppingCart += prices[i];
}

console.log(shoppingCart+"this is your total on cart");

if(shoppingCart > minimunForFreeShipping && loggedUser.isAmbassador) {
  totalCost = (shoppingCart * discountAmbassador);
}
else if(shoppingCart<=minimunForFreeShipping && loggedUser.isAmbassador){
  totalCost = (shoppingCart * discountAmbassador) + shippingCost;
}
else if(shoppingCart > minimunForFreeShipping && !loggedUser.isAmbassador){
  totalCost = shoppingCart;
}
else{
  totalCost = (shoppingCart + shippingCost);
}

console.log(loggedUser.name + totalCost);
