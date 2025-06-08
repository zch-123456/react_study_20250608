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

function App(props) {
  console.log("====", props)
  return (
    <>
      <div>a1a1a1a1</div>
    </>
  )
}

export default App
