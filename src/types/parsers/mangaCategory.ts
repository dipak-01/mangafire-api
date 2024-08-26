import type { MangaCategory } from '../manga';
import type { HttpError } from 'http-errors';
export interface ScrapedMangaCategory {
    mangaCategory: Array<MangaCategory> | HttpError;
    totalEntities: string | null;
    category: string | null;
    totalPages: number | null;
    currentPage: number | null;
    hasNextPage: boolean | null;
}

export type CommonMangaScrapeTypes = 'totalPages' | 'hasNextPage' | 'currentPage';
