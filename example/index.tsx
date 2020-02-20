import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useCallbackRef } from '../.';

import { Button } from './Button'

const App = () => {
  const [x, setX] = React.useState(0)
  const [y, setY] = React.useState(0)
  const [z, setZ] = React.useState(0)
  
  const plusX = () => {
    setX(x + 1)
  }
  
  const minusX = () => {
    setX(x - 1)
  }

  const plusY = React.useCallback(() => {
    setY(y + 1)
  }, [y, setY])

  const minusY = React.useCallback(() => {
    setY(y - 1)
  }, [y, setY])

  const plusZ = useCallbackRef(() => {
    setZ(z + 1)
  })

  const minusZ = useCallbackRef(() => {
    setZ(z - 1)
  })

  return (
    <div>
      <Button onClick={plusX}>+X</Button>
      <Button onClick={minusX}>-X</Button>
      <Button onClick={plusY}>+Y</Button>
      <Button onClick={minusY}>-Y</Button>
      <Button onClick={plusZ}>+Z</Button>
      <Button onClick={minusZ}>-Z</Button>
      <div>x: {x}, y: {y}, z: {z}</div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
