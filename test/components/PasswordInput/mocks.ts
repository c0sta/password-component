export const PLACEHOLDER = "Enter your password";
export enum STATUS {
  VALID = "valid-input",
  INVALID = "invalid-input",
}

export const INVALID_TEST_CASES = [
  // [message, validationType]
  ["do not have special character", "specialCharacters"],
  ["do not have numeric digit", "numeric"],
  ["do not have uppercase letter", "uppercase"],
  ["have consecutive letters", "consecutiveCharacters"],
];

export const VALID_TEST_CASES = [
  // [message, validationType, passwordMock]
  ["have special character", "specialCharacters", "password@"],
  ["have numeric digit", "numeric", "password123"],
  ["have uppercase letter", "uppercase", "Password"],
  ["do not have consecutive letters", "consecutiveCharacters", "pasword"],
];
