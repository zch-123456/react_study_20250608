import { useState } from "react"

export default function useCount(_value = 0) {
  const [value, setValue] = useState(_value)

  function add(num) {
    console.log("=====>>>>>>", null)
    setValue((p) => p + num)
  }

  function dec() {
    setValue((p) => p - num)
  }

  console.log("vvvvvvvvvvv", value)

  return [value, add, dec]
}
