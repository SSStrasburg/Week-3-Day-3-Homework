// game of war using the deck of cards




let shuffledDeck = require ('./deck.js');


randomCard = Math.random()

console.log(
    randomHand(randomCard),
    randomHand(6),
    randomHand(52)
);

// iteration from the shuffledDeck
for (i=1; i<=52; i+=2) {
    let playerOneHand = shuffledDeck[i];
    console.log('playerOneHand from deck', playerOneHand);
    let playerTwoHand = shuffledDeck[i+1];
    console.log(playerTwoHand);

    if ( playerOneHand > playerTwoHand ) {
      playerOneScore++;
    } if (  playerOneHand > playerTwoHand  ){
      playerTwoScore++;
    } else{
      ties++;
    }

console.log('playerOneScore', playerOneScore, '  winning ration', playerOneScore/(playerOneScore+playerTwoScore+numberOfTies));
console.log('playerTwoScore', playerTwoScore, '  winning ration', playerTwoScore/(playerOneScore+playerTwoScore+numberOfTies));
console.log('numberOfTies', numberOfTies);
};



// {
//   date: 'MM-DD-YYYY at HH:mm',   // (with the actual date/time of this game)
//   players: [
//     { name: '[first players name]', numberOfWins: 10, winRatio: 0.38 },
//     { name: '[second players name]', numberOfWins: 13, winRatio: 0.5 }
//   ],
//   numberOfTies: 3
// }
