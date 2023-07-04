/**
 * How many things are wrong with this design?
 *
 * Does the code communicate the design?
 *
 * It is not clear:
 *
 * 1 - Which values are optional?
 *      - (e.g. middle name)
 * 2 - What are the constraints on each property?
 *      - (e.g. must not be more than 50 characters)
 * 3 - Which fields are linked and must be updated as a group (atomically)?
 *      - Name properties are linked, Email is the other.
 * 4 - What is the domain logic behind IsEmailVerified?
 *      - E.g. Not clear that it must reset if email is changed.
 *      - We don't want to have to dig into the implementation to figure this out.
 *
 * This code is bad code because it does not communicate important design decisions!
 *
 * Functional domain modelling CAN communicate all these decisions.
 */

type Contact = {
  readonly firstName: string;
  readonly middleInitial: string;
  readonly lastName: string;
  readonly emailAddress: string;
  readonly isEmailVerified: boolean;
};

/** Improved */

type PersonalName = {
  readonly firstName: String50;
  readonly middleInitial: Option<String1>;
  readonly lastName: String50;
};

type ContactV2 = {
  readonly name: PersonalName;
  readonly email: EmailContactInfo;
};

/**
 * New requirement: A contact can now have either an email OR a postal address OR both.
 */

type PostalContactInfo = unknown;

// This fails to satisfy requirements because both email and address can be missing
type ContactV3 = {
  readonly name: PersonalName;
  readonly email: Option<EmailContactInfo>;
  readonly address: Option<PostalContactInfo>;
};

/** Improved */

type EmailOnly = EmailContactInfo;
type PostalAddressOnly = PostalContactInfo;
type EmailAndPostalAddress = {
  readonly email: EmailContactInfo;
  readonly postalAddress: PostalContactInfo;
};

// Requirements are now fully encoded in the type system
// You cannot represent impossible states without compilation error.
type ContactInfo = EmailOnly | PostalAddressOnly | EmailAndPostalAddress;

type ContactV4 = {
  readonly name: PersonalName;
  readonly contactInfo: ContactInfo;
};

/**
 * Allows us to push back or clarify requirements.
 * "A contact must have an email or a postal address." Is this REALLY what the business wants?
 * "A contact must have at least one way of being contacted" - Better requirement
 */

type FacebookContactInfo = unknown;

type PhoneNumber = unknown;
type SMS = PhoneNumber;

// These are easily expanded, allowing the design to evolve
type ContactInfoV2 =
  | EmailContactInfo
  | PostalContactInfo
  | FacebookContactInfo
  | SMS;

type ContactV5 = {
  readonly name: PersonalName;
  readonly primaryContactInfo: ContactInfoV2;
  readonly secondaryContactInfo: Option<ContactInfoV2>;
};
