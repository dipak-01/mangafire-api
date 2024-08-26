 
import type { ReleasingManga, MostViewedManga, RecentlyUpdatedManga, NewReleaseManga, MangaCategory } from '../manga';
import type { HttpError } from 'http-errors';

export interface ScrapedHomePage {
    releasingManga: Array<ReleasingManga> | HttpError;

    mostViewedManga: {
        day: Array<MostViewedManga> | HttpError;
        week: Array<MostViewedManga> | HttpError;
        month: Array<MostViewedManga> | HttpError;
    };

    recentlyUpdatedManga: Array<RecentlyUpdatedManga> | HttpError;

    newReleaseManga: Array<NewReleaseManga> | HttpError;
}

