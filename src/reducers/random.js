import { FETCH_RANDOM } from '../actions/random.js';

const initialState = {
  random: {}
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_RANDOM:
      return {
        ...state,
        random: action.payload
      };
    default:
      return state;
  }
}
