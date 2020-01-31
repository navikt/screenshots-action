const devices = require('puppeteer-core/DeviceDescriptors')
const generateFilename = require('./generate-filename')
const emulateDevices = require('./emulate-devices')
const screenshotFolder = `${process.env.GITHUB_WORKSPACE}/screenshots`

module.exports = async (page, url) => {
  const takeScreenshot = async device => {
    await page.emulate(devices[device])
    await page.goto(url, { waitUntil: 'networkidle2' })
    await page.screenshot({ path: `${screenshotFolder}/${generateFilename(device)}`, fullPage: true })
    return true
  }

  await page.goto(url, { waitUntil: 'networkidle2' })
  await page.screenshot({ path: `${screenshotFolder}/chrome-full.png`, fullPage: true })

  while (emulateDevices.length > 0) {
    const device = emulateDevices.pop()
    await takeScreenshot(device)
  }

  return true
}
