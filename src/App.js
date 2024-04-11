
import Input from './components/Input'
import Button from './components/Button'

import { Container, Content, Row,} from "./styles";
import {useState} from 'react';

const App = () => {
  const [currentNumber, setCurrenteNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrenteNumber('0')
    setFirstNumber('0')
    setOperation('')
  }

  const handleAddNUmber = (number) => {
    setCurrenteNumber(prev => `${prev === '0' ? '' : prev}${number}`)
  }

  const handleSumNumbers = () => {

    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrenteNumber('0');
      setOperation('+')
    }else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrenteNumber(String(sum))
      setOperation('')
    }
  }

  const handleMinusNumbers = () => {

    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrenteNumber('0');
      setOperation('-')
    }else {
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrenteNumber(String(sum))
      setOperation('')
    }
  }

  const handleMultiplyNumbers = () => {

    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrenteNumber('0');
      setOperation('*')
    }else {
      const sum = Number(firstNumber) * Number(currentNumber);
      setCurrenteNumber(String(sum))
      setOperation('')
    }
  }

  const handleDivideNumbers = () => {

    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrenteNumber('0');
      setOperation('/')
    }else {
      const sum = Number(firstNumber) / Number(currentNumber);
      setCurrenteNumber(String(sum))
      setOperation('')
    }
  }

  const handleEquals = () => {

    if(!firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
      switch(operation){
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleMinusNumbers();
          break;
          case '*':
          handleMultiplyNumbers();
          break;
          case '/':
          handleDivideNumbers();
          break;
        default:
          break;
    }

  }
  }
  return (
    <Container className="App">
      <Content>
      <Input value={currentNumber} />
      <Row>
        <Button label="x" onClick={handleMultiplyNumbers}/>
        <Button label="/" onClick={handleDivideNumbers}/>
        <Button label="c" onClick={handleOnClear}/>
        <Button label="." onClick={() => handleAddNUmber('.')}/>
      </Row>
      <Row>
        <Button label="7" onClick={() => handleAddNUmber('7')}/>
        <Button label="8" onClick={() => handleAddNUmber('8')}/>
        <Button label="9" onClick={() => handleAddNUmber('9')}/>
        <Button label="-" onClick={handleMinusNumbers}/>
      </Row>
      <Row>
        <Button label="4"onClick={() => handleAddNUmber('4')}/>
        <Button label="5" onClick={() => handleAddNUmber('5')}/>
        <Button label="6" onClick={() => handleAddNUmber('6')}/>
        <Button label="+" onClick={handleSumNumbers}/>
      </Row>
      <Row>
        <Button label="1" onClick={() => handleAddNUmber('1')}/>
        <Button label="2" onClick={() => handleAddNUmber('2')}/>
        <Button label="3" onClick={() => handleAddNUmber('3')}/>
        <Button label="=" onClick={handleEquals}/>
      </Row>
      </Content>
    </Container>
  );
}

export default App;
