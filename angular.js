const baseRules = require('./rules/base');
const angularRules = require('./rules/angular');

const parser = '@typescript-eslint/parser';

const configs = [
	'airbnb-base',
	'plugin:@typescript-eslint/recommended',
	'plugin:import/typescript',
	// Disable rules which might conflict with Prettier
	'prettier',
	'prettier/@typescript-eslint',
];

const plugins = [
  'jest',
  'new-with-error',
  'sort-class-members',
  'sort-destructure-keys',
  'sort-imports-es6',
  'switch-case',
  '@typescript-eslint',
  '@typescript-eslint/tslint'
];

module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'node': true
  },
	parser,
	extends: configs,
	plugins,
	rules: {
		...baseRules,
		...angularRules,
	},
};
