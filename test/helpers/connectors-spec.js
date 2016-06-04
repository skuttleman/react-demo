// export const actualConnector = ({ actualText: text }) =>
//   ({ title: 'Actual Text', text });
//
// export const correctedConnector = ({ correctedText: text }) =>
//   ({ title: 'Corrected Text', text });
//
// export const differencesConnector = ({ actualText, correctedText }) =>
//   ({ actualText, correctedText });
//
// export const typeConnector = ({ dispatch }) => ({ dispatch });



import {
  actualConnector, correctedConnector, differencesConnector, typeConnector
} from '../../src/js/helpers/connectors';

describe('Connector Methods', () => {
  let store = {
    actualText: 'actualText',
    correctedText: 'correctedText',
    dispatch: () => null
  };

  describe('actualConnector method', () => {
    it('returns a new object containing a title and text', () => {
      let actual = actualConnector(store);
      let expected = {
        title: 'Actual Text',
        text: store.actualText
      };
      expect(actual).toEqual(expected);
    });
  });

  describe('correctedConnector method', () => {
    it('returns a new object containing a title and text', () => {
      let actual = correctedConnector(store);
      let expected = {
        title: 'Corrected Text',
        text: store.correctedText
      };
      expect(actual).toEqual(expected);
    });
  });

  describe('differencesConnector method', () => {
    it('returns a new object containing actualText and correctedText', () => {
      let actual = differencesConnector(store);
      let expected = {
        actualText: store.actualText,
        correctedText: store.correctedText
      };
      expect(actual).toEqual(expected);
    });
  });

  describe('typeConnector method', () => {
    it('returns a new object containing actualText and correctedText', () => {
      let actual = typeConnector(store);
      let expected = {
        dispatch: store.dispatch
      };
      expect(actual).toEqual(expected);
    });
  });
});
