import { FaCheck, FaX } from "react-icons/fa6";
import { ValidationStatus } from "@types";
import "./styles.css";

export const Status: React.FC<{ status: ValidationStatus }> = ({ status }) => {
  const isValid = status === ValidationStatus.VALID;
  const statusClassName = isValid ? "valid-icon" : "invalid-icon";

  return (
    <span className={`icon ${statusClassName}`}>
      {isValid ? (
        <FaCheck data-testid="valid-input" />
      ) : (
        <FaX data-testid="invalid-input" />
      )}
    </span>
  );
};
