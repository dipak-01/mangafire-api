import createHttpError from 'http-errors';
import type { RequestHandler } from 'express';
import type { MangaSort } from '../types/manga';
import { scrapedMangaSort } from '../parsers/index';
import type { SortMangaPathParamas, SortMangaQueryParamas } from '../types/controllers/index';

// /anime/:genreName?page=${page}
const getMangaGenre: RequestHandler<SortMangaPathParamas, Awaited<ReturnType<typeof scrapedMangaSort>>, unknown, SortMangaQueryParamas> = async (
    req,
    res,
    next
) => {
    try {
        const sort = req.params.sort ? decodeURIComponent(req.params.sort) : null;

        const page: number = req.query.page ? Number(decodeURIComponent(req.query?.page as string)) : 1;

        if (sort === null) {
            throw createHttpError.BadRequest('sort required');
        }

        const data = await scrapedMangaSort(sort as MangaSort, page);

        res.status(200).json(data);
    } catch (err: any) {
        console.error(err);
        next(err);
    }
};

export default getMangaGenre;
