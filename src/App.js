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
import _axios from "./utils/axios"
import {
  styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider
} from "styled-components"
import Test1 from "./Test/a1"
import Test2 from "./Test/a2"
import { color } from "storybook/internal/theming"

const f1 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(90deg);
  }
`

const _css = css`
  color: ${(p) => p._color};
  background-color: ${(p) => p._bgColor} !important;
  font-size: 30px;
`

const StyledDiv1 = styled.div`
  background-color: blue;
`

const StyledDiv = styled.div.attrs((p) => {
  p._color = "#ff9008"
  console.log("ttttttt", p)
  return p
})`
  background-color: red;

  /* font-size: 20px; */
  ${StyledDiv1} {
    font-size: 50px;
  }
  margin-bottom: 10px;
  color: ${(p) => p._color};
   {
    background-color: green;
  }

  &.aaa + & {
    background-color: pink;
  }
  ${_css}
  ${(p) => p.otherstyle}
  color: ${(p) => p.theme.color};
`

function App() {
  const [content, setContent] = useState("")
  const [content1, setContent1] = useState("")
  const [content2, setContent2] = useState("")

  const updateCount = () => {
    _axios.post("/cm/a").then((res1) => setContent(res1))
    _axios.post("/sku/a").then((res1) => setContent1(res1))
    _axios.post("/stock/aab").then((res1) => setContent2(res1))
  }

  return (
    <>
      <Test1 />
      <div>3333333333</div>
      <StyledDiv _bgColor="blue">7777</StyledDiv>
      <StyledDiv className="aaa">779999999977</StyledDiv>
      <StyledDiv _color="#ff9008">
        779999wwwwwwww999977
        <StyledDiv1>2333333333</StyledDiv1>
      </StyledDiv>
      <StyledDiv>779333999999977</StyledDiv>
    </>
  )
}

export default App
