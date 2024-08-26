import { SRC_BASE_URL, SRC_HOME_URL, ACCEPT_HEADER, USER_AGENT_HEADER, ACCEPT_ENCODING_HEADER } from '../utils/index';
import createHttpError, { type HttpError } from 'http-errors';

//  import puppeteer from 'puppeteer-extra';
// import StealthPlugin from 'puppeteer-extra-plugin-stealth';
// import superagent, { SuperAgent } from 'superagent';
import axios, { AxiosError } from 'axios';
import { load, type CheerioAPI, type SelectorType } from 'cheerio';
import { type ScrapedMangaSort } from '../types/parsers/index';
import { type MangaSort } from '../types/manga';

async function scrapedMangaSort(sort: MangaSort, page: number = 1): Promise<ScrapedMangaSort | HttpError> {
    const res: ScrapedMangaSort = {
        mangaCategory: [],
        currentChapters: [],
        totalEntities: '',
        sort,
        currentPage: page,
        hasNextPage: false,
        totalPages: 1
    };
    try {
        // puppeteer.use(StealthPlugin());
        // const browser = await puppeteer.launch({
        //     headless: true,
        //     args: [' --no-sandbox', '--disable-setuid-sandbox', '--dns-prefetch-disable'],
        //     ignoreDefaultArgs: ['--disable-extensions']
        // });
        // const page = await browser.newPage();
        // await page.setJavaScriptEnabled(true);
        // await page.setUserAgent(
        //     'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        // );
        // await page.setDefaultNavigationTimeout(20000);
        // await page.goto(SRC_HOME_URL, { waitUntil: 'networkidle2' });
        // const content = await page.content();

        // await browser.close();
        const scrapeUrl: URL = new URL(`${SRC_BASE_URL}/${sort}`);
        const content = await axios.get(`${scrapeUrl}?page=${page} `, {
            headers: {
                'User-Agent': USER_AGENT_HEADER,
                'Accept-Encoding': ACCEPT_ENCODING_HEADER,
                Accept: ACCEPT_HEADER
            }
        });

        const $: CheerioAPI = load(content.data);
        console.log(content.data);
        return res;
    } catch (err: any) {
        if (err instanceof AxiosError) {
            console.error('Axios error:', err.response?.status, err.response?.statusText, err.message);
            throw createHttpError(err.response?.status || 500, err.response?.statusText || 'Something went wrong');
        }
        console.error('Unexpected error:', err.message);
        throw createHttpError.InternalServerError(err.message);
    }
    // or handle the error in a different way
}

export default scrapedMangaSort;
