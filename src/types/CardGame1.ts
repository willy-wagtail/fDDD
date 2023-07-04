/**
 * Data types are named as a user would call them.
 */

type Suit = "Clubs" | "Diamonds" | "Hearts" | "Spades";

type Rank =
  | "Ace"
  | "Two"
  | "Three"
  | "Four"
  | "Five"
  | "Six"
  | "Seven"
  | "Eight"
  | "Nine"
  | "Ten"
  | "Jack"
  | "Queen"
  | "King";

type Card = {
  readonly rank: Rank;
  readonly suit: Suit;
};

type Hand = Card[];

type Deck = Card[];

type Player = {
  readonly name: string;
  readonly hand: Hand;
};

type Game = {
  readonly players: Player[];
  readonly deck: Deck;
};

/**
 * Functions are used to model behaviours,
 * actions, verbs in your domain, workflows, etc.
 */

type Deal = (deck: Deck) => {
  readonly remainingDeck: Deck;
  readonly dealtCard: Card;
};

type PickUpCard = (currentHand: Hand, newCard: Card) => Hand;
