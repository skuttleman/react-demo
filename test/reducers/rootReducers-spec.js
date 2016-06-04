import { UPDATE_ACTUAL_TEXT, UPDATE_CORRECTED_TEXT } from '../../src/js/actions/actions';
import { reducers } from '../../src/js/reducers/rootReducers';
const { actualText, correctedText } = reducers;

describe('Root Reducers', () => {
  describe('actualText Reducer', () => {
    it('returns new state when type is UPDATE_ACTUAL_TEXT', () => {
      let action = {
        type: UPDATE_ACTUAL_TEXT,
        value: 'this is the new value'
      };
      expect(actualText('old value', action)).toEqual('this is the new value');
    });

    it('returns default state in all other cases', () => {
      let action = {
        type: 'SOME_RANDOM_TYPE',
        value: 'this is the new value'
      };
      expect(actualText('old value', action)).toEqual('old value');
    });
  });

  describe('correctedText Reducer', () => {
    it('returns new state when type is UPDATE_ACTUAL_TEXT', () => {
      let action = {
        type: UPDATE_CORRECTED_TEXT,
        value: 'this is the new value'
      };
      expect(correctedText('old value', action)).toEqual('this is the new value');
    });

    it('returns default state in all other cases', () => {
      let action = {
        type: 'SOME_RANDOM_TYPE',
        value: 'this is the new value'
      };
      expect(correctedText('old value', action)).toEqual('old value');
    });
  });
});
