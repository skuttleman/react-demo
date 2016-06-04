import React from 'react';
import { Differences } from '../../src/js/components/Differences';
import actions from '../../src/js/actions/actions';

describe('Differences Component', () => {
  it('finds no difference between phrases with identical words', () => {
    let actualText = 'This is \t\tmy \n poor    attempt  to    type  text.';
    let correctedText = 'This is my poor attempt to type text.';
    let differences = new Differences({ actualText, correctedText });
    expect(differences.calculateDifferences()).toEqual(0);
  });

  it('calculates the differences between phrases', () => {
    let actualText = 'Dis is my   por atempt  tu\ttyep\ntext.';
    let correctedText = 'This is my poor attempt to type text.';
    let differences = new Differences({ actualText, correctedText });
    expect(differences.calculateDifferences()).toEqual(5);
  });
});
