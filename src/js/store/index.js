import { combineReducers, createStore } from 'redux';

const countDispatches = (state = 0, { type }) => {
  if (type.match(/WHATEVER/)) {
    return state + 1;
  }
  return state;
};

const typeReducer = (CASE, state = '', { type, value }) => {
  return (CASE === type) ? value : state;
};

export default createStore(combineReducers({
  countDispatches,
  typeWhatever: typeReducer.bind(null, 'TYPE_WHATEVER'),
  typeWhateverElse: typeReducer.bind(null, 'TYPE_WHATEVER_ELSE')
}));
