import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { PasswordInput } from "@components";
import "@testing-library/jest-dom";
import { ValidationsType } from "@types";

const PLACEHOLDER = "Enter your password";
// enum LABELS {
//   SPECIAL_CHAR = "Has a special character !@#$%^&*",
//   NUMERIC = "Has a number 0-9",
//   UPPERCASE = "Has uppercase letter",
// }
enum STATUS {
  VALID = "valid-input",
  INVALID = "invalid-input",
}

const INVALID_TEST_CASES = [
  // [message, validationType]
  ["do not have special character", "specialCharacters"],
  ["do not have numeric digit", "numeric"],
  ["do not have uppercase letter", "uppercase"],
  ["have consecutive letters", "consecutiveCharacters"],
];

const VALID_TEST_CASES = [
  // [message, validationType, passwordMock]
  ["have special character", "specialCharacters", "password@"],
  ["have numeric digit", "numeric", "password123"],
  ["have uppercase letter", "uppercase", "Password"],
  ["do not have consecutive letters", "consecutiveCharacters", "pasword"],
];

describe("PasswordInput Unit Test", () => {
  it("should exist", async () => {
    render(<PasswordInput />);
    expect(await screen.findByPlaceholderText(PLACEHOLDER)).toBeInTheDocument();
  });

  describe("Validate INVALID status", () => {
    test.each(INVALID_TEST_CASES)(
      "should display INVALID status if password %s",
      async (_, validationType) => {
        const { getByPlaceholderText, getByTestId } = render(
          <PasswordInput
            options={[{ type: validationType as ValidationsType }]}
          />
        );

        const passwordField = getByPlaceholderText(PLACEHOLDER);
        await userEvent.type(passwordField, "password");

        const invalidStatus = getByTestId(STATUS.INVALID);
        expect(invalidStatus).toBeInTheDocument();
      }
    );
  });

  describe("Validate VALID status", () => {
    test.each(VALID_TEST_CASES)(
      "should display VALID status if password %s",
      async (_, validationType, passwordMock) => {
        const { getByPlaceholderText, getByTestId } = render(
          <PasswordInput
            options={[{ type: validationType as ValidationsType }]}
          />
        );

        const passwordField = getByPlaceholderText(PLACEHOLDER);
        await userEvent.type(passwordField, passwordMock);

        const validStatus = getByTestId(STATUS.VALID);
        expect(validStatus).toBeInTheDocument();
      }
    );
  });
});
