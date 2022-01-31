import '@testing-library/jest-dom/extend-expect';

global['_paq'] = {
  push: jest.fn(),
};
