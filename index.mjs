import { ZenRows } from 'zenrows'
import 'dotenv/config'

const scrape = async (url) => {
    const client = new ZenRows(process.env.ZENROWS_API_KEY)
    console.log('scraping ' + url)
    try {
        const request = await client.get(url, {
          js_render: true,
          premium_proxy: true,
          json_response: true,
    })
        const data = await request.text()
        console.log('SUCCESS:')
        console.log(data)
    } catch (error) {
        console.error('ERROR:')
        console.error(error.message)
        if (error.response) {
            console.error(error.response.data)
        }
    }
}

const DEFAULT_SCRAPE_URL = 'https://app.zenrows.com/register'
scrape(process.env.npm_config_url || DEFAULT_SCRAPE_URL)