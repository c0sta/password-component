import {
  PasswordInputProps,
  ValidationStatus,
  ValidationStatusState,
} from "@types";

export const defaultProps: PasswordInputProps["options"] = [
  {
    type: "numeric",
    message: "Has a number 0-9",
  },
  {
    type: "specialCharacters",
    message: "Has a special character !@#$%^&*",
  },
  {
    type: "uppercase",
    message: "Has uppercase letter",
  },
  {
    type: "consecutiveCharacters",
    message: "Has no consecutive letters",
  },
];

export const defaultState: ValidationStatusState = {
  numeric: ValidationStatus.INVALID,
  consecutiveCharacters: ValidationStatus.INVALID,
  specialCharacters: ValidationStatus.INVALID,
  uppercase: ValidationStatus.INVALID,
};
