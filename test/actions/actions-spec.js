import {
  updateActualText, updateCorrectedText,
  UPDATE_ACTUAL_TEXT, UPDATE_CORRECTED_TEXT
} from '../../src/js/actions/actions';
import axios from 'axios';

describe('Redux Actions', () => {
  let correctedText = 'this is the corrected text';
  let originalText = 'this is the original text';
  let interceptor;

  beforeAll(() => {
    interceptor = axios.interceptors.request.use(config => {
      if (config.url === 'http://localhost:9999/' && config.method === 'get') {
        return {
          ...config,
          adapter: (resolve, reject) => {
            resolve({ data: { value: correctedText } });
          }
        };
      }
      return config;
    });
  });

  it('creates a redux action for actualText', () => {
    let action = updateActualText(123);
    let expected = {
      type: UPDATE_ACTUAL_TEXT,
      value: 123
    };
    expect(action).toEqual(expected);
  });

  it('dispatches an async action for correctedText', done => {
    const dispatch = jasmine.createSpy('dispatch');
    updateCorrectedText(dispatch, originalText)
    .then(() => {
      let action = {
        type: UPDATE_CORRECTED_TEXT,
        value: correctedText
      };
      expect(dispatch).toHaveBeenCalledWith(action);
      done();
    });
  });

  afterAll(() => {
    axios.interceptors.eject(interceptor);
  });
});
