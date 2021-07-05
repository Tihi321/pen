const { TAG_ADDRESS, NOVEL_ADDRESS } = require("../constants");

const createTagURI = (tag) =>
  `/${TAG_ADDRESS}/${tag.toLowerCase().replace(/ /g, "-")}`;

const createNovelURI = (serie) =>
  `/${NOVEL_ADDRESS}/${serie.toLowerCase().replace(/ /g, "-")}`;

module.exports = {
  createTagURI,
  createNovelURI,
};
