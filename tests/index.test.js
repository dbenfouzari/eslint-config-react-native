import { ESLint } from "eslint";
import path from "path";

describe("Normal config", () => {
  const eslint = new ESLint({
    useEslintrc: false,
    baseConfig: require("../index.js"),
  });

  it("should result to something in js", async () => {
    const invalidJs = "example/index.js";
    const resultJs = await eslint.lintFiles([invalidJs]);

    expect(resultJs).toEqual([
      {
        filePath: path.resolve(invalidJs),
        messages: [
          {
            column: 7,
            endColumn: 13,
            endLine: 2,
            line: 2,
            message: "'square' is assigned a value but never used.",
            messageId: "unusedVar",
            nodeType: "Identifier",
            ruleId: "no-unused-vars",
            severity: 1,
          },
        ],
        errorCount: 0,
        warningCount: 1,
        fixableErrorCount: 0,
        fixableWarningCount: 0,
        source: resultJs[0].source,
        usedDeprecatedRules: resultJs[0].usedDeprecatedRules,
      },
    ]);
  });

  it("should result to something in ts", async () => {
    const invalidTs = "example/index.ts";
    const resultTs = await eslint.lintFiles([invalidTs]);

    expect(resultTs).toEqual([
      {
        filePath: path.resolve(invalidTs),
        messages: [
          {
            column: 7,
            endColumn: 13,
            endLine: 2,
            line: 2,
            message: "'square' is assigned a value but never used.",
            messageId: "unusedVar",
            nodeType: "Identifier",
            ruleId: "@typescript-eslint/no-unused-vars",
            severity: 2,
          },
        ],
        errorCount: 1,
        warningCount: 0,
        fixableErrorCount: 0,
        fixableWarningCount: 0,
        source: resultTs[0].source,
        usedDeprecatedRules: resultTs[0].usedDeprecatedRules,
      },
    ]);
  });
});

describe("Recommended config", () => {
  const eslint = new ESLint({
    useEslintrc: false,
    baseConfig: require("../recommended.js"),
  });

  it("should result to something in ts", async () => {
    const invalidTs = "example/recommended-example.ts";
    const resultTs = await eslint.lintFiles([invalidTs]);

    expect(resultTs).toEqual([
      {
        filePath: path.resolve(invalidTs),
        messages: [
          {
            column: 1,
            endColumn: 31,
            endLine: 1,
            fix: {
              range: [30, 30],
              text: `
`,
            },
            line: 1,
            message:
              "There should be at least one empty line between import groups",
            nodeType: "ImportDeclaration",
            ruleId: "import/order",
            severity: 2,
          },
          {
            column: 8,
            endColumn: 15,
            endLine: 1,
            line: 1,
            message: "'example' is defined but never used.",
            messageId: "unusedVar",
            nodeType: "Identifier",
            ruleId: "@typescript-eslint/no-unused-vars",
            severity: 2,
          },
          {
            column: 21,
            endColumn: 30,
            endLine: 1,
            fix: {
              range: [20, 29],
              text: "'./index'",
            },
            line: 1,
            message: "Strings must use singlequote.",
            messageId: "wrongQuotes",
            nodeType: "Literal",
            ruleId: "quotes",
            severity: 1,
          },
          {
            column: 1,
            endColumn: 25,
            endLine: 2,
            fix: {
              range: [0, 56],
              text: `import path from "path";
import example from "./index";
`,
            },
            line: 2,
            message: "`path` import should occur before import of `./index`",
            nodeType: "ImportDeclaration",
            ruleId: "import/order",
            severity: 2,
          },
          {
            column: 8,
            endColumn: 12,
            endLine: 2,
            line: 2,
            message: "'path' is defined but never used.",
            messageId: "unusedVar",
            nodeType: "Identifier",
            ruleId: "@typescript-eslint/no-unused-vars",
            severity: 2,
          },
          {
            column: 18,
            endColumn: 24,
            endLine: 2,
            fix: {
              range: [48, 54],
              text: "'path'",
            },
            line: 2,
            message: "Strings must use singlequote.",
            messageId: "wrongQuotes",
            nodeType: "Literal",
            ruleId: "quotes",
            severity: 1,
          },
          {
            column: 7,
            endColumn: 13,
            endLine: 5,
            line: 5,
            message: "'square' is assigned a value but never used.",
            messageId: "unusedVar",
            nodeType: "Identifier",
            ruleId: "@typescript-eslint/no-unused-vars",
            severity: 2,
          },
        ],
        errorCount: 5,
        warningCount: 2,
        fixableErrorCount: 2,
        fixableWarningCount: 2,
        source: resultTs[0].source,
        usedDeprecatedRules: resultTs[0].usedDeprecatedRules,
      },
    ]);
  });
});
