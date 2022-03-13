import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Search from '..';

afterEach(cleanup);

describe('Search component', () => {
  it('renders', () => {
    render(<Search />);
  });

  it('matches snapshot DOM node structure', () => {
    const { asFragment } = render(<Search />);
    expect(asFragment()).toMatchSnapshot();
  });

  })