/**
 * Requirements:
 *
 * We accept 3 forms of payment: Cash, Cheque, or Card.
 *
 * - For Cash, we don't need any extra information.
 * - For Cheques, we need a cheque number.
 * - For Cards, we need a card type and card number.
 *
 * How would you implement this?
 *
 * In OO, you'd probably have an interface PaymentMethod, ad a set of subclasses with those Payment types.
 * In FP, get rid of primitives, replace with meaningful domain types, even if they are aliases. Then compose!
 */

type ChequeNumber = number;
type Cheque = ChequeNumber;

type CardNumber = string;
type CardType = "Visa" | "Mastercard";
type CreditCard = {
  readonly cardType: CardType;
  readonly cardNumber: CardNumber;
};

type Cash = "Cash";
type PaymentMethod = Cash | Cheque | CreditCard;
type PaymentAmount = number;
type Currency = "EUR" | "USD";
type Payment = {
  readonly currency: Currency;
  readonly amount: PaymentAmount;
  readonly method: PaymentMethod;
};
