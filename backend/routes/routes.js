import express from 'express';
import {getEvos,getMutants,likeMutant} from '../controllers/evoControllers.js';

const router = express.Router();

router.get('/server/evos/:lineage', getEvos);
router.get('/server/mutants/:lineage', getMutants);
router.post('/server/like/:lineage/:_id', likeMutant);


// router.post('/evos', createEvo);
// router.get('/evos/:id', getEvo);



export default router;
