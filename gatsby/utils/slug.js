const removePostNameSlugSuffix = (path) => path.replace(/\[(.*?)\]/g, "");

const getSlugFromPath = (path) => {
  const pathArray = path.split("/");

  return pathArray[pathArray.length - 1];
};

module.exports = {
  getSlugFromPath,
  removePostNameSlugSuffix,
};
