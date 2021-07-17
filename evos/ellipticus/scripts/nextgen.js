import {createNextGen} from '../../createNextGen.js'
import {mutate} from './mutate.js';
import {draw} from './draw.js';

createNextGen("ellipticus", mutate, draw)
