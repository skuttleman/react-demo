export const actualConnector = ({ actualText: text }) =>
  ({ title: 'Actual Text', text });

export const correctedConnector = ({ correctedText: text }) =>
  ({ title: 'Corrected Text', text });

export const differencesConnector = ({ actualText, correctedText }) =>
  ({ actualText, correctedText });

export const typeConnector = ({ dispatch }) => ({ dispatch });
