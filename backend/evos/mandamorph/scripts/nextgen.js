import {createNextGen} from '../../createNextGen.js'
import {mutate} from './mutate.js';
import {draw} from './draw.js';

createNextGen("mandamorph", mutate, draw)