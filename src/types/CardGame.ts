/**
 * Data types are constructed as a user would call them.
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

type Card = { rank: Rank; suit: Suit };

type Hand = Card[];

type Deck = Card[];

type ShuffledDeck = Card[];

type Player = { name: string; hand: Hand };

type Game = { players: Player[]; deck: Deck };

/**
 * Functions are used to model behaviours, actions, verbs, workflows, ... etc.
 */

type DealCard = (shuffledDeck: ShuffledDeck) => {
  remainingDeck: ShuffledDeck;
  dealtCard: Card;
};

type PickUpCard = (currentHand: Hand, newCard: Card) => Hand;

type Shuffle = (deck: Deck) => ShuffledDeck;

const card: Card = { rank: "King", suit: "Diamonds" };
