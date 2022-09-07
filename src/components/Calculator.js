import React from 'react';
// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  render() {
    return (
      <div className="calculator">
        <div className="calculator__display">
          <div className="calculator__display-result">0</div>
        </div>
        <div className="calculator__buttons">
          <div className="calculator__buttons-row">
            <button type="submit">AC</button>
            <button type="submit">+/-</button>
            <button type="submit">%</button>
            <button type="submit" className="operation">÷</button>
          </div>
          <div className="calculator__buttons-row">
            <button type="submit">7</button>
            <button type="submit">8</button>
            <button type="submit">9</button>
            <button type="submit" className="operation">x</button>
          </div>
          <div className="calculator__buttons-row">
            <button type="submit">4</button>
            <button type="submit">5</button>
            <button type="submit">6</button>
            <button type="submit" className="operation">-</button>
          </div>
          <div className="calculator__buttons-row">
            <button type="submit">1</button>
            <button type="submit">2</button>
            <button type="submit">3</button>
            <button type="submit" className="operation">+</button>
          </div>
          <div className="calculator__buttons-row">
            <button type="submit" className="zero">0</button>
            <button type="submit">.</button>
            <button type="submit" className="operation">=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
