import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App1Test"
import { ThemeProvider } from "styled-components"

const a = "1111"
console.log("aaaa")

const root = ReactDOM.createRoot(document.getElementById("root"), {})
root.render(
  <ThemeProvider theme={{ color: "#f1f2f5" }} a={{ b: 1 }}>
    <App />
  </ThemeProvider>
)
