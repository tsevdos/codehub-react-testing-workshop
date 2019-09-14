module.exports = {
  verbose: true,
  rootDir: "./app",
  testPathIgnorePatterns: ["./node_modules/", "./cypress/"],
  setupFilesAfterEnv: ["<rootDir>/examples/setupEnzyme.js"]
};
