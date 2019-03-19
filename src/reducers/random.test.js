import reducer from './random';
import { FETCH_RANDOM } from '../actions/random';

describe('random reducer', () => {
  it('can handle fetch action', () => {
    const state = {
      random: { body: 'hello' }
    };

    const reduced = reducer(state, {
      type: FETCH_RANDOM,
      payload: state.random
    });
    expect(reduced).toEqual({ random: { body: 'hello' } });
  });
});
