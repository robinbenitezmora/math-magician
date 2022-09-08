import React from 'react';
import calculate from '../logic/calculate';
// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.eventCalculator = this.eventCalculator.bind(this);
  }

  eventCalculator(event) {
    const { target } = event;
    const { name } = target;
    const { value } = target;
    const { state } = this;
    const data = calculate(state, { name, value });
    this.setState(data);
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calculator">
        <div className="calculator-display">
          {total || '0'}
          {operation || ''}
          {next || ''}
        </div>
        <div className="calculator-buttons">
          <div className="calculator-buttons-row">
            <button type="submit" onClick={this.eventCalculator} className="btn">AC</button>
            <button type="submit" onClick={this.eventCalculator} className="btn">+/-</button>
            <button type="submit" onClick={this.eventCalculator} className="btn">%</button>
            <button type="submit" onClick={this.eventCalculator} className="btn-operation">÷</button>
          </div>
          <div className="calculator-buttons-row">
            <button type="submit" onClick={this.eventCalculator} className="btn">7</button>
            <button type="submit" onClick={this.eventCalculator} className="btn">8</button>
            <button type="submit" onClick={this.eventCalculator} className="btn">9</button>
            <button type="submit" onClick={this.eventCalculator} className="btn-operation">x</button>
          </div>
          <div className="calculator-buttons-row">
            <button type="submit" onClick={this.eventCalculator} className="btn">4</button>
            <button type="submit" onClick={this.eventCalculator} className="btn">5</button>
            <button type="submit" onClick={this.eventCalculator} className="btn">6</button>
            <button type="submit" onClick={this.eventCalculator} className="btn-operation">-</button>
          </div>
          <div className="calculator-buttons-row">
            <button type="submit" onClick={this.eventCalculator} className="btn">1</button>
            <button type="submit" onClick={this.eventCalculator} className="btn">2</button>
            <button type="submit" onClick={this.eventCalculator} className="btn">3</button>
            <button type="submit" onClick={this.eventCalculator} className="btn-operation">+</button>
          </div>
          <div className="calculator-buttons-row">
            <button type="submit" onClick={this.eventCalculator} className="btn zero">0</button>
            <button type="submit" onClick={this.eventCalculator} className="btn">.</button>
            <button type="submit" onClick={this.eventCalculator} className="btn-operation">=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
