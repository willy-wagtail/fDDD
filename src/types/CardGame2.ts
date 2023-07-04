type ShuffledDeck = Card[];

type DealV2 = (deck: ShuffledDeck) => {
  readonly remainingDeck: ShuffledDeck;
  readonly dealtCard: Card;
};

type Shuffle = (deck: Deck) => ShuffledDeck;
