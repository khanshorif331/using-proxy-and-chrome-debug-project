import puppeteer from 'puppeteer'
import 'dotenv/config'

// const browser = await puppeteer.connect({
// 	browserURL: 'http://localhost:9222',
// })

const browser = await puppeteer.connect({
	browserWSEndpoint: `${process.env.BROWSER_URL}?token=${process.env.BROWSERLESS_TOKEN}`,
})

const page = await browser.newPage()
await page.goto('https://duckduckgo.com/')
console.log(await page.title())

// /opt/google/chrome/google-chrome --remote-debugging-port=9222
