const {
  POSTS_PER_PAGE,
  CONTACT,
  META_DATA,
  AUTHOR_DATA
} = require("./constants");

const Metadata = {
  title: META_DATA.TITLE,
  description: META_DATA.DESCRIPTION,
  intro: META_DATA.INTRO,
  siteUrl: META_DATA.SITE_URL
};

const Author = {
  name: AUTHOR_DATA.NAME,
  summary: AUTHOR_DATA.SUMMARY
};

const Social = {
  email: CONTACT.MAIL,
  github: CONTACT.GITHUB,
  linkedin: CONTACT.LINKEDIN
};

const Setting = {
  pathPrefix: "/",
  postsPerPage: POSTS_PER_PAGE,
  isKatex: true
};

module.exports = {
  Metadata,
  Author,
  Social,
  Setting
};
