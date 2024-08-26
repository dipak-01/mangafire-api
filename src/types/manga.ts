export interface Manga {
    id: string | null;
    name: string | null;
    poster: string | null;
    names: string | null;
    status: string | null;
    type: string | null;
    ratingMal: string | null;
    description: string | null;
    ratingMangafire: number | null;
    moreInfo: {
        author: string | null;
        published: string | null;
        genres: string | null;
        magazines: string | null;
    };
}

export type CommonMangaProps = 'id' | 'name' | 'poster';
export interface ReleasingManga extends Pick<Manga, CommonMangaProps | 'status' | 'description'> {
    currentChapters: string | null;
    genres: [] | null;
}
export type MostViewedMangaTimePeriod = 'day' | 'month' | 'year';
export interface MostViewedManga extends Pick<Manga, CommonMangaProps> {
    rank: number | null;
}
export interface RecentlyUpdatedManga extends Pick<Manga, CommonMangaProps | 'type'> {
    latestChapters: [] | null;
}
export interface NewReleaseManga extends Pick<Manga, CommonMangaProps> {}

export interface MangaCategory extends Pick<Manga, CommonMangaProps> {
    currentChapters: string | null;
}
export interface RelatedManga {
    [key: string]: { id: string | null; name: string | null };
}
export interface SimilarManga extends RecentlyUpdatedManga {}
export type MangaCategories = 'manga' | 'one-shot' | 'douginshi' | 'novel' | 'manhwa' | 'manhua';
export type MangaSort = 'newest' | 'updated' | 'added' | 'trending' | 'most-viewed' | 'most-favourited';
export type MangaGenre =
    | 'action'
    | 'adventure'
    | 'avant-garde'
    | 'boys-love'
    | 'comedy'
    | 'demons'
    | 'drama'
    | 'ecchi'
    | 'fantasy'
    | 'girls-love'
    | 'gourmet'
    | 'harem'
    | 'horror'
    | 'isekai'
    | 'iyashikei'
    | 'josei'
    | 'kids'
    | 'magic'
    | 'mahou-shoujo'
    | 'martial-arts'
    | 'mecha'
    | 'military'
    | 'music'
    | 'mystery'
    | 'parody'
    | 'psychological'
    | 'reverse-harem'
    | 'romance'
    | 'school'
    | 'sci-fi'
    | 'seinen'
    | 'shoujo'
    | 'shounen'
    | 'slice-of-life'
    | 'space'
    | 'sports'
    | 'super-power'
    | 'supernatural'
    | 'suspense';
