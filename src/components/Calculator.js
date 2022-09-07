import React from 'react';
// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  render() {
    return (
      <div className="calculator">
        <div className="calculator-display">
          <div className="calculator-display-result">0</div>
        </div>
        <div className="calculator-buttons">
          <div className="calculator-buttons-row">
            <button type="submit" className="btn">AC</button>
            <button type="submit" className="btn">+/-</button>
            <button type="submit" className="btn">%</button>
            <button type="submit" className="btn-operation">÷</button>
          </div>
          <div className="calculator-buttons-row">
            <button type="submit" className="btn">7</button>
            <button type="submit" className="btn">8</button>
            <button type="submit" className="btn">9</button>
            <button type="submit" className="btn-operation">x</button>
          </div>
          <div className="calculator-buttons-row">
            <button type="submit" className="btn">4</button>
            <button type="submit" className="btn">5</button>
            <button type="submit" className="btn">6</button>
            <button type="submit" className="btn-operation">-</button>
          </div>
          <div className="calculator-buttons-row">
            <button type="submit" className="btn">1</button>
            <button type="submit" className="btn">2</button>
            <button type="submit" className="btn">3</button>
            <button type="submit" className="btn-operation">+</button>
          </div>
          <div className="calculator-buttons-row">
            <button type="submit" className="btn zero">0</button>
            <button type="submit" className="btn">.</button>
            <button type="submit" className="btn-operation">=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;