const config = require("./config");
const createPages = require("./createPages");
const createNodes = require("./createNodes");
const postBuild = require("./postBuild");
const schema = require("./schema");

module.exports = {
  ...config,
  ...createPages,
  ...createNodes,
  ...postBuild,
  ...schema,
};
