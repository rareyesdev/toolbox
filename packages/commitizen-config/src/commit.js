#!/usr/bin/env node
"use strict";

const path = require('path');
const { bootstrap } = require('commitizen/dist/cli/git-cz');

const { findPackageFolder } = require('./find-package-folder');

bootstrap({
  cliPath: findPackageFolder('commitizen', __dirname),
  config: { path: "cz-conventional-changelog" }
});
