/**
 * @type {import("@stryker-mutator/api/core").StrykerOptions}
 */
module.exports = {
  packageManager: "npm",
  reporters: ["clear-text", "progress", "html"],
  testRunner: "jest",
  coverageAnalysis: "off",
};
