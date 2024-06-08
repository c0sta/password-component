import "./styles.css";
import { Status } from "@components";
import { defaultProps } from "@constants";
import { PasswordInputProps } from "@types";
import { usePasswordInput } from "./usePasswordInput";

export const PasswordInput: React.FC<PasswordInputProps> = ({
  options = defaultProps,
}) => {
  const { handleChange, validationStatus } = usePasswordInput({ options });

  return (
    <div>
      <input
        // type="password"
        placeholder="Enter your password"
        className="password-input"
        onChange={handleChange}
      />

      <ul className="validations-feedback">
        {options?.map(({ type, message }) => (
          <li className="validation">
            <Status status={validationStatus[type]} /> {message}
          </li>
        ))}
      </ul>
    </div>
  );
};
