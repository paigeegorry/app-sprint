import { getRandom } from '../services/random.js';

export const FETCH_RANDOM = 'FETCH_RANDOM';
export const fetchRandom = () => ({
  type: FETCH_RANDOM,
  payload: getRandom()
});
