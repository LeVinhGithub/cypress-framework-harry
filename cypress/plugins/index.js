/// <reference types="cypress" />

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {};

/// <reference types="@shelex/cypress-allure-plugin" />

const allureWriter = require("@shelex/cypress-allure-plugin/writer");

module.exports = (on, config) => {
  allureWriter(on, config);

  config.env.e2eLocalCI = process.env.E2E_LOCAL_CI === "true";
  return config;
};
