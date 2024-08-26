import { ScrapedMangaCategory } from './mangaCategory';

export interface ScrapedMangaGenre
    extends Pick<ScrapedMangaCategory, 'mangaCategory' | 'currentPage' | 'hasNextPage' | 'totalEntities' | 'totalPages'> {
    genreName: string;
    currentChapters: [];
}
