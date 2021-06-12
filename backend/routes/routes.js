import express from 'express';
import {getEvos,getMutants,likeMutant} from '../controllers/evoControllers.js';
import {createDesign} from '../controllers/designControllers.js';
import {getProduct} from '../controllers/productControllers.js';

const router = express.Router();

router.get('/server/evos/:lineage', getEvos);
router.get('/server/mutants/:lineage', getMutants);
router.post('/server/like/:lineage/:_id', likeMutant);


router.get('/server/products/:_id', getProduct);
router.post('/server/designs', createDesign);


// router.post('/evos', createEvo);
// router.get('/evos/:id', getEvo);



export default router;
