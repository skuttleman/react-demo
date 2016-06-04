export const actualConnector = ({ actualText: text }) => {
  return {
    title: 'Actual Text',
    text
  };
};

export const correctedConnector = ({ correctedText: text }) => {
  return {
    title: 'Corrected Text',
    text
  };
};
