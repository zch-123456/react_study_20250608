import React from "react"

/**
 *
 * @param {*} param0
 * @returns
 */
export const MyComp = ({
  text,
  color = "green",
  backgroundColor = "",
  onClick,
  ...others
}) => {
  console.log("======", others)
  return (
    <div data-testid="mmm" className="kkkk" style={{ color, backgroundColor }}>
      {text}
    </div>
  )
}

MyComp.propTypes = {
  /** 文本 */
  text: String,
  /** 颜色 */
  color: String,
  /** 函数 */
  onClick: Function
}
