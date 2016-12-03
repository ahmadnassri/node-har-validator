#!/usr/bin/env node

import * as validate from './promise'
import chalk from 'chalk'
import program from 'commander'
import fs from 'fs'
import HARError from './error'
import path from 'path'

program
  .usage('[options] <files...>')
  .option('-s, --schema [name]', 'validate schema name (log, request, response, etc ...)')
  .parse(process.argv)

if (!program.args.length) {
  program.help()
}

let schema = program.schema || 'har'

program.args.map((fileName) => {
  let file = chalk.yellow.italic(path.basename(fileName))

  new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, data) => err === null ? resolve(data) : reject(err))
  })

  .then(JSON.parse)
  .then(validate[schema])
  .then((data) => console.log('%s [%s] is a valid %s', chalk.green('✓'), file, chalk.magenta(schema)))
  .catch((err) => {
    console.error('[%s]', file)

    if (err instanceof SyntaxError) {
      return console.error('%s failed to read JSON: %s', chalk.red('✖'), chalk.red(err.message))
    }

    if (err instanceof HARError) {
      err.errors.forEach((details) => console.error('%s validation failed on %s: %s', chalk.red('✖'), chalk.cyan.italic(details.dataPath || '.'), chalk.red(details.message)))
      return
    }

    console.error('%s an unknown error has occured: %s', chalk.red('✖'), chalk.red(err.message))
  })
})
