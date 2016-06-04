import { combineReducers } from 'redux';
import { UPDATE_ACTUAL_TEXT, UPDATE_CORRECTED_TEXT } from '../actions/actions';

const simpleReducer = (CASE, state = '', { type, value }) => {
  return (type === CASE) ? value : state;
};

export default combineReducers({
  actualText: simpleReducer.bind(null, UPDATE_ACTUAL_TEXT),
  correctedText: simpleReducer.bind(null, UPDATE_CORRECTED_TEXT)
});
