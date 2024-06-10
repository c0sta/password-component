import { ValidationsType } from "@types";

/**
 * Hook to encapsulate the `validate` method, for password validations.
 * @returns True if the password match the internal validations and False if does not match.
 */
export const usePasswordValidator = () => {
  const SPECIAL_CHARS = "!@#$%^&*";

  const validate = (type: ValidationsType, value: string) => {
    const splittedValue = value.split("");

    const validations: Record<ValidationsType, () => boolean> = {
      specialCharacters: () =>
        SPECIAL_CHARS.split("").some((specialChar) =>
          value.includes(specialChar)
        ),
      numeric: () =>
        splittedValue.some((char) => Number.isInteger(+char || null)),
      uppercase: () => /[A-Z]/.test(value),
      consecutiveCharacters: () =>
        !splittedValue.some(
          (currentChar, index) => currentChar === splittedValue[index + 1]
        ) && splittedValue.length >= 2,
    };

    return validations[type]();
  };

  return { validate };
};
