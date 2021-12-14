'use strict'

const openPr = require('./openPr')
const release = require('./release')
const { logError } = require('./log')

module.exports = async function ({ github, context, inputs }) {
  if (context.eventName === 'workflow_dispatch') {
    return openPr({ context, inputs })
  }

  if (context.eventName === 'pull_request') {
    return release({ github, context, inputs })
  }

  logError('Unsupported event')
}
