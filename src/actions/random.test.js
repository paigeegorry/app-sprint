import { FETCH_RANDOM, fetchRandom } from './random';

jest.mock('../services/random.js');

describe('random action', () => {
  it('can handle the fetch action', () => {
    const action = fetchRandom();

    expect(action).toEqual({
      type: FETCH_RANDOM,
      payload: Promise.resolve()
    });
  });
});
