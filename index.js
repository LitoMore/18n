'use strict';

const path = require('path');
const pkgDir = require('pkg-dir');

const dir = pkgDir.sync();
const config = require(path.join(dir, '18n.config'));
const {
	langPath = 'languages',
	langPacks = ['en-us'],
	selector = () => {
		return langPacks[0];
	}
} = config;

const langCode = selector();
const lang = require(path.join(dir, langPath, langCode));

module.exports = lang;
