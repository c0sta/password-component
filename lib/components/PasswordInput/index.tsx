import { ValidationsFeedback } from "@components";
import { defaultProps } from "@constants";
import { PasswordInputProps } from "@types";
import { usePasswordInput } from "./usePasswordInput";
import "./styles.css";

export const PasswordInput: React.FC<PasswordInputProps> = ({
  options = defaultProps,
}) => {
  const { handleChange, validationStatus } = usePasswordInput({ options });

  return (
    <div className="password-wrapper">
      <input
        // type="password"
        placeholder="Enter your password"
        className="password-input"
        onChange={handleChange}
      />
      <ValidationsFeedback
        options={options}
        validationStatus={validationStatus}
      />
    </div>
  );
};
