// import { useEffect, useState, useRef } from 'react';

// function App() {
//     const [count, setCount] = useState(0);

//     const updateCount = () => {
//         setCount(count + 1);
//     };
//     const ref = useRef(updateCount);

//     ref.current = updateCount;

//     useEffect(() => {
//         const timer = setInterval(() =>updateCount(), 1000);

//         return () => {
//             clearInterval(timer);
//         }
//     }, []);

//     return <div>{count}</div>;
// }

// export default App;

import { useState } from "react"
import { styled, css, createGlobalStyle } from "styled-components"

const A = createGlobalStyle`
  div {font-size: 40px;}
  li {
    list-style: none;
  }
 h1 {
  font-size: 130px;
 }
`

function App() {
  return (
    <>
      <A />
      <ul>
        <li>111</li>
        <li>111</li>
        <li>111</li>
      </ul>
      <h1>a2a2</h1>
    </>
  )
}

export default App
