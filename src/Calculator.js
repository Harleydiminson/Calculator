import React, { useState } from 'react';
import MyButton from './MyButton';
import './Calculator.css'; 

function Calculator() {


  const [input, setInput] = useState('0');
  const [operator, setOperator] = useState(null);
  const [firstValue, setFirstValue] = useState(null);


  const handleButtonClick = (value) => {

    if (['+', '-', '*', '/'].includes(value)) {
      const parsedInput = parseFloat(input);
      setFirstValue(parseFloat(input));
      setInput(parsedInput + value.toString());
      setOperator(value);
      return;
    }

    if (value === '=') {
      const secondValue = input.split(operator)[1]
      const result = calculate(parseFloat(firstValue), parseFloat(secondValue), operator);
      setInput(parseFloat(result.toFixed(2)));
      setFirstValue(null); 
      setOperator(null);   
      console.log(result)
      return;
    }



    if (value === 'C') {
      setInput('0');
      setFirstValue(null);
      setOperator(null);
      return
    }

    if (value === '+/-') {
      setInput((parseFloat(input) * -1).toString());
      return;
    }

    if (value === '%') {
      setInput((parseFloat(input) / 100).toString());
      return;
    }

    if (input.length === 14) return;

    if (input === '0' && value !== '.') {
      setInput(value.toString());
      return
    }
    const mid = input.split(operator);
    if (value === '.' && mid[0].includes('.') && mid[1].includes('.')) {
      return
    }
    else setInput(input + value.toString());
  };


  const calculate = (firstValue, secondValue, operator) => {
    console.log(firstValue)
    console.log(secondValue)
    console.log(operator)

    switch (operator) {
      case '+':
        return firstValue + secondValue;
      case '-':
        return firstValue - secondValue;
      case '*':
        return firstValue * secondValue;
      case '/':
        return firstValue / secondValue;
      default:
        return secondValue;
    }
  };

  return (
    <div className="calculator">
      <div className="display">{input}</div>
      <div className="buttons">
        <MyButton onClick={handleButtonClick} label='C' />
        <MyButton onClick={handleButtonClick} label='%' />
        <MyButton onClick={handleButtonClick} label='/' />
        <MyButton onClick={handleButtonClick} label='*' />
        <MyButton onClick={handleButtonClick} label={7} />
        <MyButton onClick={handleButtonClick} label={8} />
        <MyButton onClick={handleButtonClick} label={9} />
        <MyButton onClick={handleButtonClick} label='-' />
        <MyButton onClick={handleButtonClick} label={4} />
        <MyButton onClick={handleButtonClick} label={5} />
        <MyButton onClick={handleButtonClick} label={6} />
        <MyButton onClick={handleButtonClick} label='+' />
        <MyButton onClick={handleButtonClick} label={1} />
        <MyButton onClick={handleButtonClick} label={2} />
        <MyButton onClick={handleButtonClick} label={3} />
        <MyButton onClick={handleButtonClick} className='equals' label='=' />
        <MyButton onClick={handleButtonClick} className='plus-minus' label='+/-' />
        <MyButton onClick={handleButtonClick} className='zero' label={0} />
        <MyButton onClick={handleButtonClick} className='point' label='.' />

      </div>
    </div>
  );
}

export default Calculator;

