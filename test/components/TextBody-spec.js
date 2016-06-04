import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { TextBody } from '../../src/js/components/TextBody';
import actions from '../../src/js/actions/actions';

describe('TextBody Component', () => {
  let component;
  let title = 'Component Title';
  let text = 'This is the text.';

  beforeEach(() => {
    component = TestUtils.renderIntoDocument(
      <TextBody title={title} text={text} />
    );
  });

  it('renders the title to the page', () => {
    let h1 = TestUtils.scryRenderedDOMComponentsWithTag(component, 'h1')[0];
    expect(h1.textContent).toEqual(`${title}:`);
  });

  it('renders the text to the page', () => {
    let p = TestUtils.scryRenderedDOMComponentsWithTag(component, 'p')[0];
    expect(p.textContent).toEqual(text);
  });

  it('renders "..." if there is no text', () => {
    component = TestUtils.renderIntoDocument(
      <TextBody title={title} text="" />
    );
    let p = TestUtils.scryRenderedDOMComponentsWithTag(component, 'p')[0];
    expect(p.textContent).toEqual('...');
  });
});
