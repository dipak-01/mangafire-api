import { Router, type IRouter } from 'express';
import { getHomePageInfo, getMangaCategory, getMangaGenre, getMangaSort, getMangaInfo } from '../controllers/index';

const router: IRouter = Router();

router.get('/', (_, res) => res.redirect('/'));
router.get('/home', getHomePageInfo);
router.get('/type/:category', getMangaCategory);
router.get('/genre/:genreName', getMangaGenre);
router.get('/sort/:sort', getMangaSort);
router.get('/:id', getMangaInfo);
export default router;
