type EmailAddress = string;

type CreateEmailAddress = (string: string) => Option<EmailAddress>;

const createEmailAddress: CreateEmailAddress = (s) =>
  s.includes("@") ? s : null;

/**
 * Constraints:
 * 1: if email is changed, isEmailVerified must be reset to false
 * 2: the verified flag can only be set by a special verification service, not just by anybody.
 */
type EmailContactInfo_Deprecated = {
  readonly emailAddress: EmailAddress;
  readonly isEmailVerified: boolean;
};

/**
 * Verification
 */

type EmailVerificationHash = string;

type UnverifiedEmailAddress = EmailAddress;

type VerifiedEmailAddress = EmailAddress;

type EmailVerificationService = (
  email: EmailAddress,
  hash: EmailVerificationHash
) => Option<VerifiedEmailAddress>;

// Business rules are automatically enforced! No need for unit tests.
// Refactored for deeper insights - we are codifying concepts as types.

type EmailContactInfo = UnverifiedEmailAddress | VerifiedEmailAddress;
