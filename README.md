# @dbenfouzari/eslint-config-react-native

## Installation

```shell
yarn add -D @dbenfouzari/eslint-config-react-native
```

or if you are using npm

```shell
npm i -D @dbenfouzari/eslint-config-react-native
```

Enable it by inserting in your project

```json
{
  "extends": ["@dbenfouzari/react-native"]
}
```

## Basic configuration

Aka

```json
{
  "extends": ["@dbenfouzari/react-native"]
}
```

`@react-native-community` already did a really good ESLint config.<br>
It's really complete and works great.

Enabling this simple configuration is the same as enabling only `@react-native-community`.

## Available rules

### `eslint-plugin-import`

I really love this one, because it makes things clean and tidy.

Your imports will go from

```tsx
import ForgotPassword from "./forgot-password";
import { render } from "@testing-library/react-native";
import navigationProps from "../../../storybook/navigationProps";
import React from "react";
```

To

```tsx
import { render } from "@testing-library/react-native";
import React from "react";

import navigationProps from "../../../storybook/navigationProps";

import ForgotPassword from "./forgot-password";
```

It will, in order :

- Group your imports (external, builtin, parent, sibling, index)
- In each group, sort imports by name

Benefits are multiple : it will avoid many conflits caused by a committer that imported the same, but in another place, it makes things tidy and easy to find if you should.

I personnaly enable it on every project I work on, and I can't do without it.

### `@dbenfouzari/eslint-plugin-react-native`

It's `off` by default.
You can enable it by doing

```json
{
  "extends": ["@dbenfouzari/react-native"],
  "rules": {
    "@dbenfouzari/react-native/no-child-string": ["error"]
  }
}
```

The configuration is pretty basic, but I may improve it in the future.

## Prettier

It's using Prettier to format your code. The configuration used for Prettier is the one that is recommended by Prettier (https://github.com/prettier/eslint-plugin-prettier#recommended-configuration).

You can then set your own Prettier's options in a `.prettierrc` file

```json
{
  "trailingComma": "es5",
  "tabWidth": 2,
  "singleQuote": true
}
```
