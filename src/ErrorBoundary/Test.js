import React, { useEffect, useState } from "react"

export default (props) => {
  const [name, setName] = useState(11)

  useEffect(() => {
    func()
    return () => {
      console.log("wwwwww", window.a.b)
    }
  }, [])

  const func = () => {
    setName(111)

    // console.log(window.a.b);
  }
  return <div onClick={func}>111+{JSON.parse(name)}</div>
}
