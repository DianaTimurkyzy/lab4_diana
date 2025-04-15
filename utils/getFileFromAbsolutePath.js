const path = require("path");

const getFileFromAbsolutePath = (relativePath) => {
  return path.join(__dirname, "../", relativePath);
};

module.exports = getFileFromAbsolutePath;