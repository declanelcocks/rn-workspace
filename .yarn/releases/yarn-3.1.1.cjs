#!/usr/bin/env node
const fs = require('fs');

if (process.cwd().includes('/packages/app') && process.env['APPCENTER_BUILD_ID'] !== undefined) {
  console.log('Detected to run in packages app, moving app center yarn lock hack to temp file and using root level lock instead')

  if (fs.existsSync('yarn.lock')) {
    fs.renameSync('yarn.lock', '_yarn.lock.bak')
  }
}

if (process.argv[2] === 'list') {
  console.log('List not supported')
  process.exit(0)
}

if (process.argv[2] === 'install' && process.argv[3] === '--network-timeout=600000') {
  console.log('Popping network timeout yarn flag since its not supported')
  process.argv.pop()
}

module.exports = require('./_yarn-3.1.1.cjs')