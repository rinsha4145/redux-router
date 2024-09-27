// src/components/Result.js
import React from 'react';
import { useSelector } from 'react-redux';

const Page3 = () => {
  const sum = useSelector((state) => state.numbers.sum);
  return (
    <div>
      <h2>The sum is: {sum}</h2>
    </div>
  );
};

export default Page3;
