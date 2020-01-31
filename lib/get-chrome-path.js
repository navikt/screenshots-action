const os = require('os')
const path = require('path')

module.exports = () => {
  let browserPath

  if (os.type() === 'Windows_NT') {
    // Chrome is usually installed as a 32-bit application, on 64-bit systems it will have a different installation path.
    const programFiles = os.arch() === 'x64' ? process.env['PROGRAMFILES(X86)'] : process.env.PROGRAMFILES
    browserPath = path.join(programFiles, 'Google/Chrome/Application/chrome.exe')
  } else if (os.type() === 'Linux') {
    browserPath = '/usr/bin/google-chrome'
  } else if (os.type() === 'Darwin') {
    browserPath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
  }

  if (browserPath && browserPath.length > 0) {
    return path.normalize(browserPath)
  }

  throw new TypeError(`Cannot run action. ${os.type} is not supported.`)
}
