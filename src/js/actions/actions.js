import axios from 'axios';

export const UPDATE_ACTUAL_TEXT = 'UPDATE_ACTUAL_TEXT';
export const UPDATE_CORRECTED_TEXT = 'UPDATE_CORRECTED_TEXT';

const get = url => axios.get(url).then(({ data: { value } }) => value);

export const updateActualText = value => ({ type: UPDATE_ACTUAL_TEXT, value });

export const updateCorrectedText = (dispatch, phrase) => {
  let type = UPDATE_CORRECTED_TEXT;
  get(`http://localhost:9999/${phrase}`).then(value => dispatch({ type, value }));
};
