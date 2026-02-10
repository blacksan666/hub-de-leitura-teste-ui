const { tr } = require("@faker-js/faker");
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:3000/",
    projectId: "xp9t67",
    video: true
  },
});
