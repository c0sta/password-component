import { useState } from "react";
import { FaCheck, FaX } from "react-icons/fa6";
import { usePasswordValidator } from "./usePasswordValidator";
import { defaultProps, defaultState } from "@constants";
import {
  PasswordInputProps,
  ValidationStatus,
  ValidationStatusState,
} from "@types";
import "./styles.css";

const Status: React.FC<{ status: ValidationStatus }> = ({ status }) => {
  if (status === ValidationStatus.INVALID) {
    return (
      <span className="invalid-icon" data-testid="invalid-input">
        <FaX />
      </span>
    );
  }
  return (
    <span className="valid-icon" data-testid="valid-input">
      <FaCheck />
    </span>
  );
};

export const PasswordInput: React.FC<PasswordInputProps> = ({
  options = defaultProps,
}) => {
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

  return (
    <div>
      <input
        // type="password"
        placeholder="Enter your password"
        className="password-input"
        onChange={handleChange}
      />

      <ul className="validations-feedback">
        {options?.map(({ type, message }) => {
          return (
            <li>
              <Status status={validationStatus[type]} /> {message}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
