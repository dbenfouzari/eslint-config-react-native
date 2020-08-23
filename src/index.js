module.exports = {
  extends: ["./configs/default", "./configs/i18next", "./configs/import"].map(
    require.resolve
  ),
};
