const devices = require('./devices')
const generateFilename = require('./generate-filename')
const screenshotFolder = `${process.env.GITHUB_WORKSPACE}/screenshots`

module.exports = async (page, url) => {
  const allDevices = devices
  const takeScreenshot = async device => {
    await page.emulate(device)
    await page.goto(url, { waitUntil: 'networkidle0' })
    await page.screenshot({ path: `${screenshotFolder}/${generateFilename(device.name)}`, fullPage: true })
    return true
  }

  await page.goto(url, { waitUntil: 'networkidle0' })
  await page.screenshot({ path: `${screenshotFolder}/chrome-full.png`, fullPage: true })

  while (allDevices.length > 0) {
    const device = allDevices.pop()
    await takeScreenshot(device)
  }

  return true
}
