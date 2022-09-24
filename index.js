const gifts = ["teddy bear", "drone", "doll", "ninendo switch", "ipad", "backpack"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts);

function writeCards(giftGiverNames, eventName){
    const listOfCards = [];
    for (let i = 0; i <giftGiverNames.length; i++){
        listOfCards.push(`Thank you, ${giftGiverNames[i]}, for the wonderful ${eventName} gift!`); 
    }
    return listOfCards;
}

function countDown(number){
    while (number >= 0){
        console.log(number);
        number--;
    }
    return;
}