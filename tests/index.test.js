import { ESLint } from "eslint";
import path from "path";

describe("Normal config", () => {
  const eslint = new ESLint({
    useEslintrc: false,
    baseConfig: require("../src/index.js"),
  });

  it("should result to something in ts", async () => {
    const invalidTs = "example/recommended-example.tsx";
    const result = await eslint.lintFiles([invalidTs]);

    expect(result).toEqual([
      {
        filePath: path.resolve(invalidTs),
        messages: expect.any(Array),
        errorCount: 9,
        warningCount: 3,
        fixableErrorCount: 5,
        fixableWarningCount: 3,
        source: expect.any(String),
        usedDeprecatedRules: expect.any(Array),
      },
    ]);
  });
});

describe("With i18n", () => {
  const baseConfig = require("../src/index.js");

  const fullConfig = {
    ...baseConfig,
    rules: {
      ...(baseConfig.rules || {}),
      "@dbenfouzari/react-native/no-child-string": ["error"],
    },
  };

  const eslint = new ESLint({
    useEslintrc: false,
    baseConfig: fullConfig,
  });

  it("should result to something in ts", async () => {
    const invalidTs = "example/recommended-example.tsx";
    const result = await eslint.lintFiles([invalidTs]);

    expect(result).toEqual([
      {
        filePath: path.resolve(invalidTs),
        messages: expect.any(Array),
        errorCount: 10,
        warningCount: 3,
        fixableErrorCount: 5,
        fixableWarningCount: 3,
        source: expect.any(String),
        usedDeprecatedRules: expect.any(Array),
      },
    ]);
  });
});
