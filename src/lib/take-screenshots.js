const devices = require('./devices')
const generateFilename = require('./generate-filename')
const screenshotFolder = `${process.env.GITHUB_WORKSPACE}/screenshots`

module.exports = async (page, url) => {
  const takeScreenshot = async device => {
    const { name } = device
    await page.emulate(device)
    await page.goto(url, { waitUntil: 'networkidle2' })
    await page.screenshot({ path: `${screenshotFolder}/${generateFilename(name)}`, fullPage: true })
    return true
  }

  await page.goto(url, { waitUntil: 'networkidle2' })
  await page.screenshot({ path: `${screenshotFolder}/chrome-full.png`, fullPage: true })

  while (devices.length > 0) {
    const device = devices.pop()
    await takeScreenshot(device)
  }

  return true
}
