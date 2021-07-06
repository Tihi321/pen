const tags = require("./tags");
const pagination = require("./pagination");
const slug = require("./slug");
const path = require("./path");

module.exports = {
  ...path,
  ...tags,
  ...pagination,
  ...slug
};
