import { getRandom } from './random';

describe('random reducer', () => {
  it('can get a random obj from state', () => {
    const state = {
      random: { body: 'hello' }
    };

    const selectedRandom = getRandom(state);
    expect(selectedRandom).toEqual({ body: 'hello' });
  });
});
