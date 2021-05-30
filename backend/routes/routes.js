import express from 'express';
import {getEvos,getMutants} from '../controllers/evoControllers.js';

const router = express.Router();

router.get('/server/evos', getEvos);
router.get('/server/mutants', getMutants);



export default router;
