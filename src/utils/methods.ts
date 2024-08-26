import type { Manga, MostViewedManga, RecentlyUpdatedManga } from '../types/manga';

import type { CheerioAPI, SelectorType } from 'cheerio';
import createHttpError, { HttpError } from 'http-errors';

// export const extractMangas = ($: CheerioAPI, selector: SelectorType): Array<Manga> | HttpError => {
//     try {
//         const manga = Array<Manga>;
//         $(selector).each((i, el) => {

//             const mangaId=$(el).find("")?.attr("")?.slice().split("")[]||null
//         });

//         manga.push({
//             id:mangaId,
//             name:$(el).find("")?.text()?.trim()||null,
//             names:$(el).find("")?.text()?.trim()||null

//         })
//     } catch (error) {}
// };
