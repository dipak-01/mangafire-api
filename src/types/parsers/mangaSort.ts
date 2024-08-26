 import { ScrapedMangaGenre } from './mangaGenre';

export interface ScrapedMangaSort
    extends Pick<ScrapedMangaGenre, 'mangaCategory' | 'currentPage' | 'hasNextPage' | 'totalEntities' | 'totalPages' | 'currentChapters'> {
    sort: string;
}
