import { render, screen } from "@testing-library/react";
import { PasswordInput } from "@components";
import "@testing-library/jest-dom";

describe("PasswordInput Unit Test", () => {
  it("should exist", async () => {
    render(<PasswordInput options={[]} />);
    expect(
      await screen.findByPlaceholderText("Enter your password")
    ).toBeInTheDocument();
  });

  it.todo(
    "should display error if password do not have one or more special characters"
  );

  it.todo("should display error if password do not have a numeric digit");

  it.todo("should display error if password do not have an uppercase letter");

  it.todo("should display error if password has consecutive letters");
});
