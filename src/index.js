module.exports = {
  extends: ["./configs/default", "./configs/i18next", "./configs/import"].map(
    require.resolve
  ),
  rules: {
    "i18next/no-literal-string": 'off'
  }
};
