const { range } = require("lodash");
const { PAGED_PREFIX } = require("../constants");

const createPaginatedURI = (address, pageNumber) =>
  `${address}/${PAGED_PREFIX}/${pageNumber}`;

const createPaged = (numOfPosts, postsPerPage) =>
  Math.ceil(numOfPosts / postsPerPage);

const createPagedPageCallback = ({
  callback,
  postsPerPage,
  numOfPosts,
  path,
  component,
  context
}) => {
  const paged = createPaged(numOfPosts, postsPerPage);
  range(paged).forEach(pageNumber => {
    callback({
      path: pageNumber > 0 ? createPaginatedURI(path, pageNumber) : path,
      component,
      context: {
        ...context,
        src: path,
        limit: postsPerPage,
        skip: pageNumber * postsPerPage,
        current: pageNumber + 1,
        paged
      }
    });
  });
};

module.exports = {
  createPaginatedURI,
  createPaged,
  createPagedPageCallback
};
