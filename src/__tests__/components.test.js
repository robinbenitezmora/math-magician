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
	it('Simulate click event numbers', () => {
		render(<Calculator />);
		const allNumbers = '1234567890';
		const keys = [];

		allNumbers.split('').forEach((n) => {
			const key = screen.getByText(`${n}`);
			keys.push(key);
			fireEvent.click(key);
		});

		expect(screen.getByText(allNumbers));
	});
	it('Simulate click SUM 10 + 10 = 20 by click', () => {
		render(<Calculator />);
		const key1 = screen.getByText('1');
		const key0 = screen.getByText('0');
		const keysum = screen.getByText('+');
		const keytotal = screen.getByText('=');
		fireEvent.click(key1);
		fireEvent.click(key0);
		fireEvent.click(keysum);
		fireEvent.click(key1);
		fireEvent.click(key0);
		fireEvent.click(keytotal);
		expect(screen.getByText('20'));
	});
	it('Simulate click REST 100 - 10 = 90 by click', () => {
		render(<Calculator />);
		const key1 = screen.getByText('1');
		const key0 = screen.getByText('0');
		const operationKey = screen.getByText('-');
		const keytotal = screen.getByText('=');
		fireEvent.click(key1);
		fireEvent.click(key0);
		fireEvent.click(key0);
		fireEvent.click(operationKey);
		fireEvent.click(key1);
		fireEvent.click(key0);
		fireEvent.click(keytotal);
		expect(screen.getByText('90'));
	});
	it('Simulate click MULT 10 x 10 = 100 by click', () => {
		render(<Calculator />);
		const key1 = screen.getByText('1');
		const key0 = screen.getByText('0');
		const keysum = screen.getByText('x');
		const keytotal = screen.getByText('=');
		fireEvent.click(key1);
		fireEvent.click(key0);
		fireEvent.click(keysum);
		fireEvent.click(key1);
		fireEvent.click(key0);
		fireEvent.click(keytotal);
		expect(screen.getByText('100'));
	});
	it('Simulate clicking AC clear Screen', () => {
		render(<Calculator />);
		const key1 = screen.getByText('1');
		const key0 = screen.getByText('0');
		const keyAC = screen.getByText('AC');
		fireEvent.click(key1);
		fireEvent.click(key0);
		fireEvent.click(key0);
		fireEvent.click(key0);
		const calcScreen = screen.getByText('1000');
		expect(calcScreen.textContent).toBe('1000');
		fireEvent.click(keyAC);
		expect(calcScreen.textContent).toBe('');
	});
});
describe('Test Page Component Rendering', () => {
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
});
