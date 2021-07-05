const removePostNameSlugSuffix = (path) => path.replace(/\[(.*?)\]/g, "");
const getPostNameNumber = (path) => parseInt(path.split("]")[0].substring(1));

const getSlugFromPath = (path) => {
  const pathArray = path.split("/");

  return pathArray[pathArray.length - 1];
};

const getNovelInfo = (path) => ({
  chapter: getPostNameNumber(getSlugFromPath(path)),
  title: removePostNameSlugSuffix(path.split("/")[1]).replace(/-/g, " "),
});

module.exports = {
  getSlugFromPath,
  removePostNameSlugSuffix,
  getNovelInfo,
};
