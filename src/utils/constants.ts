import { config } from 'dotenv';

config();
const DOMAIN = process.env.DOMAIN || 'mangafire.to';
export const SRC_BASE_URL = `https://${DOMAIN}` as const;
export const SRC_HOME_URL = `${SRC_BASE_URL}/home` as const;
export const ACCEPT_ENCODING_HEADER = 'gzip, deflate, br';
export const USER_AGENT_HEADER = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4692.71 Safari/537.36';
export const ACCEPT_HEADER =
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9';
