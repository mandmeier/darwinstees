import express from 'express';
import {getEvos,getMutants, createEvo, getEvo} from '../controllers/evoControllers.js';

const router = express.Router();

router.get('/server/evos', getEvos);
router.get('/server/mutants', getMutants);

router.post('/evos', createEvo);
router.get('/evos/:id', getEvo);



export default router;
