(async () => {
  const core = require('@actions/core')
  const puppeteer = require('puppeteer-core')
  const io = require('@actions/io')
  const getChromePath = require('./lib/get-chrome-path')
  const takeScreenshots = require('./lib/take-screenshots')

  try {
    await io.mkdirP(`${process.env.GITHUB_WORKSPACE}/screenshots/`)
    const url = core.getInput('url')

    const browser = await puppeteer.launch({
      executablePath: getChromePath(),
      defaultViewport: { width: 1920, height: 1080 }
    })

    const page = await browser.newPage()

    await takeScreenshots(page, url)

    await browser.close()
  } catch (error) {
    core.setFailed(`Failed to run action. ${error}`)
    process.exit(1)
  }
})()
