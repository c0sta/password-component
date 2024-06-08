import "./styles.css";
interface Props {
  options: Array<
    "numeric" | "specialCharacter" | "uppercase" | "consecutiveCharacters"
  >;
}
export const PasswordInput: React.FC<Props> = () => {
  return (
    <input
      type="password"
      placeholder="Enter your password"
      className="password-input"
    />
  );
};
