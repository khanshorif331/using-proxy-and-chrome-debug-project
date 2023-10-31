import puppeteer from 'puppeteer'
import 'dotenv/config'

const browser = await puppeteer.connect({
	browserURL: `${process.env.BROWSER_URL_LOCAL}`,
})

const page = await browser.newPage()
await page.goto('https://duckduckgo.com/')
console.log(await page.title())

// /opt/google/chrome/google-chrome --remote-debugging-port=9222
