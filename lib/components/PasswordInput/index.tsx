import { useState } from "react";
import "./styles.css";
import { ValidationsType } from "@types";
import { usePasswordValidator } from "./usePasswordValidator";
import { FaCheck, FaX } from "react-icons/fa6";

interface Props {
  options?: Array<{
    type: ValidationsType;
    message?: string;
    validate?: (value: string) => boolean;
  }>;
}

const defaultProps: Props["options"] = [
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

type ValidationStatus = "INVALID" | "VALID";
const defaultState: Record<ValidationsType, ValidationStatus> = {
  numeric: "INVALID",
  consecutiveCharacters: "INVALID",
  specialCharacters: "INVALID",
  uppercase: "INVALID",
};

const Status: React.FC<{ status: ValidationStatus }> = ({ status }) => {
  if (status === "INVALID") {
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

export const PasswordInput: React.FC<Props> = ({ options = defaultProps }) => {
  const [validationStatus, setValidationStatus] =
    useState<Record<ValidationsType, "INVALID" | "VALID">>(defaultState);
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
        [type]: isValid ? "VALID" : "INVALID",
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
