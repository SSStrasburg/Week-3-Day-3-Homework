// creating a deck of cards
deckOfCards = [2, 3, 4, 5, 6, 7, 8 , 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53];
shuffledDeck = deckOfCards;


   let index;
   let temp;
   for (var i = shuffledDeck.length - 1; i > 0; i--)
   {
       index = shuffledDeck[i];
       temp = shuffledDeck[i];  //switches position of array to move it within array
       shuffledDeck[index] = shuffledDeck[i];
       shuffledDeck[i] = temp;
   }


//determines card suit (Heart, Spade, Diamond, Clover)
if (cardValue <=14) {
  cardSuit = 'Heart';
}   if (cardValue >=15 && cardValue <=27) {
  cardSuit = 'Spade';
}   if (cardValue >=28 && cardValue <=40) {
  cardSuit = 'Diamond';
}   if (cardValue >=41 && cardValue <=53) {
  cardSuit = 'Clover';
}
console.log("card suit line 17 after if loop", cardSuit);

// Determines cardValue 2-10, Jack, Queen, King, Ace
if ( cardValue <= 10 ){
    console.log(cardValue + cardSuit);
} if (cardValue >= 15 && cardValue <= 23) {
    console.log('15-23', cardValue= cardValue - 13);
} if (cardValue >= 28 && cardValue <= 36) {
    console.log('28-36', cardValue = cardValue - 26);
} if (cardValue >= 41 && cardValue <= 49) {
    console.log('41-49', cardValue = cardValue - 39);
} if (cardValue === 11 || cardValue === 24 || cardValue === 37 || cardValue === 50 ) {
    faceCard = 'Jack';
    console.log('Jack', cardValue = 11 );
} if (cardValue === 12 || cardValue === 25 || cardValue === 38 || cardValue === 51 ) {
    faceCard = 'Queen';
    console.log('Queen', cardValue = 12 );
}if (cardValue === 13 || cardValue === 26 || cardValue === 39 || cardValue === 52 ) {
    faceCard = 'King';
    console.log('King', cardValue = 13 );
}if (cardValue === 14 || cardValue === 27 || cardValue === 40 || cardValue === 53 ) {
    faceCard = 'Ace';
    console.log('Ace', cardValue = 14 );
}



let cardValueAndSuitArray = [cardValue, cardSuit];
console.log([cardValue, cardSuit]);
let cardValueAndSuitString = cardValue + ' ' + cardSuit;
console.log(cardValue + ' ' + cardSuit);

// if their is a value for faceCard then this if loop will redefind cardValueAndSuitString
if (faceCard){
    cardValueAndSuitString = faceCard + ' ' + cardSuit;
    console.log(cardValueAndSuitString);
}


module.exports = function buildDeck() {
  // in here
    return cardValueAndSuitArray;
};
