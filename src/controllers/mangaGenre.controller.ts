import createHttpError from 'http-errors';
import type { RequestHandler } from 'express';
import type { MangaGenre } from '../types/manga';
import { scrapedMangaGenre } from '../parsers/index';
import type { GenreMangaPathParamas, GenreMangaQueryParamas } from '../types/controllers/index';

// /anime/:genreName?page=${page}
const getMangaGenre: RequestHandler<GenreMangaPathParamas, Awaited<ReturnType<typeof scrapedMangaGenre>>, unknown, GenreMangaQueryParamas> = async (
    req,
    res,
    next
) => {
    try {
        const genre = req.params.genreName ? decodeURIComponent(req.params.genreName) : null;
        const page: number = req.query.page ? Number(decodeURIComponent(req.query?.page as string)) : 1;
        if (genre === null) {
            throw createHttpError.BadRequest('genre required');
        }

        const data = await scrapedMangaGenre(genre as MangaGenre, page);

        res.status(200).json(data);
    } catch (err: any) {
        console.error(err);
        next(err);
    }
};

export default getMangaGenre;
