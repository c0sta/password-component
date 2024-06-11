# Password Component

Small library for a Password validation component developed as a technical challenge for a Front-end Engineer position @ Qenvus.

# Configuration

Follow these steps to run the library locally using Storybook or install it on other project locally using `npm link`.

## 1. Prerequisites

- Repository clone
- Node 20.11
- NPM
- Docker _(Optional)_
  > If you have `docker`/`docker-compose` installed, run `docker-compose up` inside the project folder and wait the script to install the dependencies and execute the Storybook service on port `6006`.

## 2. Installing

Once you have the repository cloned locally on your machine, install the dependencies by running:

```bash
npm install
```

## 3. Running

### Storybook

Since this is a library we don't have a `npm run dev` script, so our Development Server is the Storybook by itself.

```bash
npm run storybook
```

### Linking to other project

Linking the repo makes possible to install the library on another project without the necessity to publish it to a external registry.

To do so, run the following command's inside the local repository path:

#### Library

**1.** Build the project:

```bash
npm run build
```

**2.** Link it using `npm` to create a symlink to the library:

```bash
npm link
```

#### External project

**1.** Now link the external project with the local library

```bash
npm link password-component
```

**2.** Confirm that a reference to the library inside the external project `node_modules` was created correctly, like the example below:

![link-reference](https://github.com/c0sta/password-component/assets/36762964/357d7b05-56b4-486a-9957-2da35d66f76a)

**3.** Import it:

```tsx
import "password-component/dist/style.css";
import { PasswordInput } from "password-component/dist/index.es";
```

# Requirements

The requirements were:

- [x] Should accept a list of password requirements as a prop, e.g: ` options={passwordReqs}`
- [x] The list of requirements can be flexible (has 1 or more)
- [x] The following password requirements must be implemented and available in the library
  - [x] Has one or more of these special characters: !@#$%^&\*
  - [x] Has a number / digit
  - [x] Has an uppercase letter
  - [x] Has NO consecutive letters\*\*\*\* (stretch goal)
- [X] The component should be styled as above, but should be able to be extended.
- [X] There should be a way for us to validate your implementation - this could be automated
  testing, a reference build, whatever you’re comfortable with.

Notes about future improvements in the Library:

- Receive the icons for _Valid_ and _Invalid_ status
- Use compound component pattern to make `<PasswordInput />` and `<ValidationsFeedback />` flexible and detached from each other. API Example:

```tsx
// usage example
return (
  <Password>
    <Password.Input options={passwordRes} />
    {"...other components"}
    <Password.Feedback />
  </Password>
);
```
