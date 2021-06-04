import express from 'express';
import {getEvos,getMutants, createEvo, getEvo} from '../controllers/evoControllers.js';

const router = express.Router();

router.get('/server/evos/:lineage', getEvos);
router.get('/server/mutants/:lineage', getMutants);

router.post('/evos', createEvo);
router.get('/evos/:id', getEvo);



export default router;
