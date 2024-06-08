import { ValidationStatus, ValidationsType } from ".";

export interface PasswordInputProps {
  options?: Array<{
    type: ValidationsType;
    message?: string;
    validate?: (value: string) => boolean;
  }>;
}

export type ValidationStatusState = Record<ValidationsType, ValidationStatus>;
