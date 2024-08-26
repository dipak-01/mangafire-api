import { Manga, RelatedManga, SimilarManga } from '../manga';
import { HttpError } from 'http-errors';

export interface ScrapedMangaInfo {
    mangaInfo: Array<Manga> | HttpError;
    relatedManga: Array<RelatedManga> | HttpError;
    similarManga: Array<SimilarManga> | HttpError;
}
