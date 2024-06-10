import React from "react";
import { PasswordInputProps, ValidationStatusState } from "@types";
import { Status } from "@components";
import { defaultProps } from "@constants";
import "./styles.css";

interface Props extends PasswordInputProps {
  validationStatus: ValidationStatusState;
}
export const ValidationsFeedback: React.FC<Props> = ({
  options,
  validationStatus,
}) => {
  return (
    <ul className="validations-feedback">
      {options?.map(({ type, message }) => {
        const defaultMessage = defaultProps.find(
          (option) => option.type === type
        )?.message;

        return (
          <li className="validation">
            <Status status={validationStatus[type]} />{" "}
            {message || defaultMessage}
          </li>
        );
      })}
    </ul>
  );
};
