const defaultConfig = require("./index");

module.exports = {
  ...defaultConfig,
  extends: [
    ...defaultConfig.extends,
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
  ],
  rules: {
    ...defaultConfig.rules,
    // Disable those rules since TypeScript already does its checks
    "import/default": "off",
    "import/no-unresolved": "off",
    "import/namespace": "off",
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        groups: ["external", "builtin", "parent", "sibling", "index"],
        pathGroups: [
          {
            pattern: "{components,components/*,modules,modules/*}",
            group: "builtin",
          },
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
        alphabetize: { order: "asc", caseInsensitive: true },
      },
    ],
  },
};
