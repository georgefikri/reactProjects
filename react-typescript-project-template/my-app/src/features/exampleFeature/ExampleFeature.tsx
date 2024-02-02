// src/components/ExampleFeature.tsx
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { increment, decrement, setValue } from './exampleSlice';

const ExampleFeature = () => {
  const value = useAppSelector((state) => state.someFeature.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h1>Example Feature</h1>
      <p>Value: {value}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(setValue(10))}>Set Value to 10</button>
    </div>
  );
};

export default ExampleFeature;
