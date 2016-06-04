import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { TypeTastic } from '../../src/js/components/TypeTastic';
import actions from '../../src/js/actions/actions';

describe('TypeTastic Component', () => {
  let component, dispatch;
  let phrase = 'this is the value';

  beforeEach(() => {
    dispatch = jasmine.createSpy('dispatch');
    component = TestUtils.renderIntoDocument(
      <TypeTastic dispatch={dispatch} />
    );
  });

  it('updates actual text', () => {
    spyOn(actions, 'updateCorrectedText');
    let inputBox = TestUtils.scryRenderedDOMComponentsWithTag(component, 'input')[0];
    inputBox.value = phrase;
    TestUtils.Simulate.change(inputBox);
    expect(dispatch).toHaveBeenCalledWith(actions.updateActualText(phrase));
  });

  it('updates corrected text', () => {
    spyOn(actions, 'updateCorrectedText');
    let inputBox = TestUtils.scryRenderedDOMComponentsWithTag(component, 'input')[0];
    inputBox.value = phrase;
    TestUtils.Simulate.change(inputBox);
    expect(actions.updateCorrectedText).toHaveBeenCalledWith(dispatch, phrase);
  });
});
