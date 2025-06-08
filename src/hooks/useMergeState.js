import React, { useEffect, useState } from "react"

export default ({ value, onChange, defaultValue }) => {
  // 传入defaultValue表示默认值
  const [state, setState] = useState(defaultValue)

  useEffect(() => {
    // 首次不执行
    if (value === undefined) {
      // 从受控变非受控
      setState(value)
    }
  }, [value])

  const mergeState = value === undefined ? state : value
}
