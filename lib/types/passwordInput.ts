import { ValidationStatus, ValidationsType } from ".";

export type OptionsProps = Array<{
  type: ValidationsType;
  message?: string;
  validate?: (value: string) => boolean;
}>;
export interface PasswordInputProps {
  options?: OptionsProps;
}

export type ValidationStatusState = Record<ValidationsType, ValidationStatus>;
