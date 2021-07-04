const { TAG_ADDRESS } = require("../constants");

const createTagURI = tag => `/${TAG_ADDRESS}/${tag.toLowerCase()}`;

module.exports = {
  createTagURI
};
