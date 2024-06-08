import { useState } from "react";
import { usePasswordValidator } from "./usePasswordValidator";
import { defaultState } from "@constants";
import {
  PasswordInputProps,
  ValidationStatus,
  ValidationStatusState,
} from "@types";

export const usePasswordInput = ({ options }: PasswordInputProps) => {
  const [validationStatus, setValidationStatus] =
    useState<ValidationStatusState>(defaultState);

  const passwordValidator = usePasswordValidator();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    options?.forEach(({ type, validate }) => {
      const hasCustomValidator = !!validate;

      const isValid = hasCustomValidator
        ? validate(value)
        : passwordValidator.validate(type, value);

      setValidationStatus((oldState) => ({
        ...oldState,
        [type]: isValid ? ValidationStatus.VALID : ValidationStatus.INVALID,
      }));
    });
  };

  return { validationStatus, handleChange };
};
