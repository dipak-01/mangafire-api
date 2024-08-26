import createHttpError from 'http-errors';
import type { RequestHandler } from 'express';
import type { MangaCategories } from '../types/manga';
import { scrapedMangaCategory } from '../parsers/index';
import type { CategoryMangaPathParamas, CategoryMangaQueryParamas } from '../types/controllers/index';

// /anime/:category?page=${page}
const getMangaCategory: RequestHandler<
    CategoryMangaPathParamas,
    Awaited<ReturnType<typeof scrapedMangaCategory>>,
    unknown,
    CategoryMangaQueryParamas
> = async (req, res, next) => {
    try {
        const category = req.params.category ? decodeURIComponent(req.params.category) : null;

        const page: number = req.query.page ? Number(decodeURIComponent(req.query?.page as string)) : 1;

        if (category === null) {
            throw createHttpError.BadRequest('category required');
        }

        const data = await scrapedMangaCategory(category as MangaCategories, page);

        res.status(200).json(data);
    } catch (err: any) {
        console.error(err);
        next(err);
    }
};

export default getMangaCategory;
