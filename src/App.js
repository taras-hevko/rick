import React from 'react'

const arr = [1,2,3,4,5,6];

export function App() {
  return (
    <div className="App">
      <h1>Me app</h1>
      {arr.map((el, i) => (
        <p key={arr[i + 1]}>{el}</p>
        ))}

      <p>asd</p>
    </div>
  );
}
