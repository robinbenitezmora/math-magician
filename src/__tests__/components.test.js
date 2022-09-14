import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from '../components/Calculator';
import Quote from '../components/Quote';
import Navbar from '../components/Navbar';
import Home from '../components/Home';

describe('Test Calculator component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Home page renders correctly', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Quote page renders correctly', () => {
    const tree = renderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Navbar renders correctly', () => {
    const tree = renderer.create(<Router><Navbar /></Router>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Simulate click event', () => {
    render(<Calculator />);
    const key4 = screen.getByText('4');
    const key5 = screen.getByText('5');
    const key6 = screen.getByText('6');
    fireEvent.click(key4);
    fireEvent.click(key5);
    fireEvent.click(key6);
    expect(screen.getByText('456'));
  });
});
