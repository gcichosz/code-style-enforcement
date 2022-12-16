module.exports = {
  "*.ts": ["eslint", "prettier --check", () => "tsc --skipLibCheck --noEmit"],
  "!*.ts": ["prettier --write --ignore-unknown"],
};