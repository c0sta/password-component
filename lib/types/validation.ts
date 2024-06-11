export type ValidationsType =
  | "numeric"
  | "specialCharacters"
  | "uppercase"
  | "consecutiveCharacters";

export enum ValidationStatus {
  INVALID,
  VALID,
}
