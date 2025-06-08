// import { cloneElement } from "react";

function Wrap({ children, renderProps }) {
  console.log("props", children)
  return (
    <div>
      {renderProps({
        test: "方法111",
        onClick() {
          alert("官网推荐的方法")
        }
      })}
      {/* {cloneElement(children, {
        test: "我是高阶组件进来的",
        onClick() {
          alert(1111);
        },
      })} */}
    </div>
  )
}

export default Wrap
