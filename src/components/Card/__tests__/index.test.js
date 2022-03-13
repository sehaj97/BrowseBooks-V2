import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Card from '..';

afterEach(cleanup);

describe('Card component', () => {
  it('renders', () => {
    render(<Card />);
  });

  it('matches snapshot DOM node structure', () => {
    const { asFragment } = render(<Card />);
    expect(asFragment()).toMatchSnapshot();
  });

  })