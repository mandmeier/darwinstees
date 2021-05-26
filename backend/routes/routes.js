import express from 'express';
import {getEvos,} from '../controllers/evoControllers.js';

const router = express.Router();

router.get('/server/evos', getEvos);



export default router;
