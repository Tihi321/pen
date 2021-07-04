const tags = require("./tags");
const pagination = require("./pagination");
const contact = require("./contact");
const site = require("./site");

module.exports = {
  ...tags,
  ...pagination,
  ...contact,
  ...site
};
