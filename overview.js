let cardValues = [2,3,4,5,6,7,8,9,10,'J','Q','K','A']


module.exports = function cardDeck() {
  let deck = [];

  for (let i=0, i<4, i++)
    deck = deck.concat(cardValues);

  return deck;
}

console.log(module.exports() );










other file to export to:

let createDeck = require('./deck.js');

function warGame() {
  let deck = createDeck();

  let numberOfWinsForPlayerOne = 0;
  let numberOfWinsForPlayerTwo = 0;
  let numberOfTies = 0;

  for ( let i = 0; i<52; i+=2) { // 0 is first index in card array

    console.log( deck[i], deck[i+1] );
    if ( cardValues.indexOf (deck[i]) > cardValues.indexOf (deck[2]) ) {
      console.log('player 1 wins the hand');
      numberOfWinsForPlayerOne++;
    } else if (cardValues.indexOf (deck[i]) < cardValues.indexOf (deck[2]) ) {
      console.log('player 2 wins the hand');
      numberOfWinsForPlayerTwo++;
    } else {
      console.log('they tied!');
      numberOfTies;
    }

  }
console.log('Player 1 wins', numberOfWinsForPlayerOne);
console.log('Player 2 wins', numberOfWinsForPlayerTwo);
console.log('Ties', numberOfTies);

}

warGame();  // this will create the function, and allow the loop to run.
