import createHttpError from 'http-errors';
import type { RequestHandler } from 'express';

import { scrapedMangaInfo } from '../parsers/index';
import type { InfoMangaPathParamas } from '../types/controllers/index';

// /anime/:genreName?page=${page}

const getMangaInfo: RequestHandler<InfoMangaPathParamas, Awaited<ReturnType<typeof scrapedMangaInfo>>, unknown, unknown> = async (req, res, next) => {
    console.log("inside get info");
    try {
        const id = req.params.id ? decodeURIComponent(req.params.id) : null;

        console.log(`Fetching manga info for ID: ${id}`);
        const data = await scrapedMangaInfo(id as string);

        res.status(200).json(data);
    } catch (err: any) {
        console.error(`Error fetching manga info: ${err.message}`);
        next(err);
    }
};
export default getMangaInfo;
