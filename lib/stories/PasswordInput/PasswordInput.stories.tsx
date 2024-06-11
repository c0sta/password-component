import type { Meta, StoryObj } from "@storybook/react";
import { PasswordInput } from "@components";
import { defaultProps } from "@constants";
import { ValidationsType } from "@types";
import { CustomStylesExample } from "./examples/CustomStyles/CustomStyles";

const validations = defaultProps?.map(({ type }) => type) as ValidationsType[];

const meta: Meta<typeof PasswordInput> = {
  title: "Components/PasswordInput",
  component: PasswordInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    options: {
      description:
        "Array of Validations that the `<PasswordInput />` will use. Receives the `message`, `type` of validation and a `validate()` function to customize *each* validation",
      options: ["all", ...validations],
      mapping: {
        all: defaultProps,
        numeric: [defaultProps?.[0]],
        specialCharacters: [defaultProps?.[1]],
        uppercase: [defaultProps?.[2]],
        consecutiveCharacters: [defaultProps?.[3]],
      },
      control: {
        type: "select",
      },
    },
  },
} satisfies Meta<typeof PasswordInput>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * By default the component comes with all the following validations enabled:
 * - **Numeric**
 * - **Special characters**
 * - **Uppercase**
 * - **Consecutive**
 */
export const Default: Story = {
  args: {},
};

/**
 * It's possible to customize each one of the validation that the `<PasswordInput />` will do internally providing the `validate` function inside the `options` prop. Example:
 *
 * ```tsx
 * <PasswordInput
 *  options={[
 *    {
 *      type: "specialCharacters", // Type of validation
 *      message: "Custom validation function. (Type 'test' to validate)", // Custom message
 *      validate: (value) => value === "test", // Custom validate function
 *    },
 *  ]}
 * />
 *
 * ```
 */
export const CustomValidation: Story = {
  name: "Custom validation",
  args: {
    options: [
      {
        type: "specialCharacters",
        message: "Custom validation function. (Type 'test' to validate)",
        validate: (value) => value === "test",
      },
    ],
  },
};

/**
 * Inspired by Material-UI it's possible to extend the styles using the internal CSS classes that are described below:
 * - **Container**:      `.password-wrapper`
 * - **Input**:          `.password-input`
 * - **Validations**:    `.validations-feedback`
 * - **Icon**:           `.icon`
 * - **Valid/Invalid Status**:  `.valid-icon / .invalid-icon`
 */
export const CustomStyles: Story = {
  name: "Custom styles",
  args: {},
  render: (args) => {
    return <CustomStylesExample {...args} />;
  },
};
