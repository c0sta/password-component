import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { PasswordInput } from "@components";
import "@testing-library/jest-dom";
import { ValidationsType } from "@types";
import {
  INVALID_TEST_CASES,
  PLACEHOLDER,
  STATUS,
  VALID_TEST_CASES,
} from "./mocks";

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
