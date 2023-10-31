import puppeteer from 'puppeteer'
import 'dotenv/config'
import { anonymizeProxy, closeAnonymizedProxy } from 'proxy-chain'
const getHTML = async (url, OLD_PROXY_URL) => {
	// console.log(url, OLD_PROXY_URL)
	// http://HOST:PORT
	const proxyURL = await anonymizeProxy(OLD_PROXY_URL)
	console.log(proxyURL)
	const browser = await puppeteer.launch({
		args: [`--proxy-server=${proxyURL}`],
	})

	const page = await browser.newPage()

	await page.goto(url)

	const content = await page.content()
	console.log(proxyURL)
	await page.close()
	// await browser.close()
	await closeAnonymizedProxy(proxyURL)
	return content
	// console.log(proxyURL)
}
getHTML('https://httpbin.org/ip', process.env.CRAWLBASE_PROXY_URL).then(
	console.log
)
getHTML('https://httpbin.org/ip', process.env.WEBSHARE_PROXY_URL).then(
	console.log
)
// getHTML()
