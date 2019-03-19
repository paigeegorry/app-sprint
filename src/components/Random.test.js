import React from 'react';
import renderer from 'react-test-renderer';
import Random from './Random';

describe('Random snapshot', () => {
  it('can match a snapshot', () => {
    const tree = renderer.create(
      <Random
        random={{}}
        onClick={jest.fn()}
      />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
