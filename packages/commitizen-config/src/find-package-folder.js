const fs = require('fs');
const path = require('path');

function findPackageFolder(name, startPath) {
  let currentPath = startPath;
  while (true) {
    const testPath = path.join(currentPath, 'node_modules', name);
    if (fileExists(testPath)) return testPath;
    if (currentPath === '/') break;
    currentPath = path.resolve(currentPath, '..');
  }
  throw new Error('Not found');
}

function fileExists(filePath) {
  let flag = true;
  try {
    fs.accessSync(filePath, fs.F_OK);
  } catch {
    flag = false;
  }
  return flag;
}

module.exports = {
  findPackageFolder,
};
