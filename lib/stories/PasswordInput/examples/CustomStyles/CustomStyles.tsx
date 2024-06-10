import { PasswordInput } from "@components";
import { PasswordInputProps } from "@types";
import "./styles.css";

export const CustomStylesExample = ({ options }: PasswordInputProps) => (
  <div className="custom-input">
    <PasswordInput options={options} />
  </div>
);
