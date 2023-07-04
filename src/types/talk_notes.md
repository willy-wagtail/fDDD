# Functional programming and DDD go together really well.

- Functional programming is scary because it's unfamiliar with it's own mathematical jargon (YAGNI).
- OOP is also scary but it's familiar because you know the jardon.
- Function programming is very good for boring line of business applications (BLOBAs).

Software development process:

- Input -> Process -> Output
- Garbage in -> Process -> Garbage out
- Goal is reduce garbage in.

Agile gives rapid feedback during design.

DDD gives a shared mental model between stakeholders reflected in the code. The code is the documentation.

Can you make the code look like the domain?

- See CardGame1.ts. The whole domain fits on one page!
- Non-programmer could understand this and provide useful feedback - e.g. spot missing Suit or Rank.
- Non-programmer could spot missing concepts like ShuffledDeck. See CardGame2.ts.
  - The developer may then ask what a ShuffledDeck is and how do you go from Deck to ShuffledDeck - note that this is in the language of the business.

Concepts in the real world get added to concepts in the domain code.

- Never go the other way. Business should never use programmer jargon like PlayerManager, AbstractBaseDeck or AbstractCardProxyFactoryBean. These may exist in the implementation but never in the domain design.
- The process of building this shared mental model is key, it's a task for all stakeholders to codify the domain.

Key DDD principle: Communicate the design in the code.

Does Contact.ts communicate the design? No!

# Part 2: Algebraic types or Composable types.

Function maps inputs to outputs: Function apple => banana.

A type is a name for a set of things: Set of inputs, Set of outputs, Set of functions.

Algebraic type system just means you have a composiable type system!

- Design pieces that can be connected like lego.
- In functional programming, data and bahaviour is separate, unlike OOP where Anemic models are a bad thing.

Compose with AND

- see FruitSalad in Fruit.ts.
- Can use pairs, tuples, or records.

Compose with OR

- see Snack in Fruit.ts.
- called choice types, discriminated unions, subtypes etc.

See Payments.ts.

# What are types for?

- type checking

  - e.g. type AddOne = (number: number) => number

- domain modelling tool
  - e.g. type Deal = Deck => {
    remainingDeck: Deck;
    dealtCard: Card
    }
  - a good static type system is like having compile-time unit tests.

Key point - Statically type key domain decisions.

# Part 3 - Domain modelling with composable types

## How to represent optional values?

- null should not be added to a domain type to handle this.
- use OR composition to represent nothing. `type Option<T> = T | null;`

## How to represent contrained values?

- Avoid Primitive Obsession
- Simple values should not be modelled with primitive types
- Rare to have an unbounded integer or string.
  - Emails must not be empty and must match a pattern
    - NOT a string.
  - CustomerIds must be positive. Can't do arithmetic on it.
    - NOT a number.

Create wrapper types to keep types logically distinct. See ContactV2.

- 2 benefits: clearer domain modelling and can't mix them up accidentally.

- Create constrainted types, e.g. String.ts, Email.ts and it's use in ContactV2.ts,

# Part 4: Encoding business rules with types

- Yaron Minsky: "Make illegal states unrepresentable!" by making it not compile
- See ContactV4.ts

2 way communication. Allows developers to push back or clarify requirements. See ContactV5.ts

# Summary

- use code to represent the shared mental model / ubiquitous language.
- design will evolve, so embrace change.
  - refactor towards deeper insight by encoding concepts
  - static types give you confidence to make changes.
- use the power of composable type system
  - use choices rather than inheritance
  - use options rather than null or undefined
  - use wrappers for contrained types, stop primitive obsession
  - make illegal states unrepresentable

You can't fully encode everything in types , like the rules of Poker, but you can go a long way using just types to get concepts down.
