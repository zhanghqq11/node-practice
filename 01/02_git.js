const download = require('download-git-repo')
const repo = 'github:SAP/openui5-sample-app';
const desc = 'test1';

const { clone} = require('./download')

clone(repo, desc)
