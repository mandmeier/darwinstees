import express from 'express';
import {getEvos, getMutants, likeMutant, getMetadata} from '../controllers/evoControllers.js';
import {getProduct, getOrCreateItem} from '../controllers/productControllers.js';
import { getClientSecret } from '../controllers/stripeControllers.js'
import { addOrUpdateCustomer } from '../controllers/customerControllers.js'
import { createPrintOrder } from '../controllers/orderControllers.js'


const router = express.Router();

router.get('/server/evos/:lineage', getEvos);
router.get('/server/mutants/:lineage', getMutants);
router.get('/server/metadata', getMetadata);
router.post('/server/like', likeMutant);

router.get('/server/products/:_id', getProduct);
router.post('/server/items', getOrCreateItem);
router.post('/server/payment', getClientSecret);

router.post('/server/customer', addOrUpdateCustomer)
router.post('/server/order', createPrintOrder)

export default router;
