const path = require('path');
const { CLIEngine } = require('eslint');

const cleanReport = ({ results, ...report }) => ({
  ...report,
  results: results.map(({ filePath, ...result }) => ({
      ...result,
      filePath: path.relative(process.cwd(), filePath).replace(/\\/g, "/"),
  })),
});

const createEngine = ({ configFile, parserOptions = {} }) => {
  return new CLIEngine({
      configFile,
      cwd: path.resolve(__dirname, 'fixtures'),
      /*useEslintrc: false,
      ignore: false,*/
      parserOptions
  });
};

module.exports = {
  cleanReport,
  createEngine
};
