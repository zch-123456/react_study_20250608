import {
  forwardRef,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
  useEffect
} from "react"
import { createPortal } from "react-dom"

const D = () => {
  return <div className="bqb">qqqqqqqqqqqqq</div>
}

const C = () => {
  return <D />
}

const Portal = forwardRef(({ portal = document.body }, ref) => {
  const _getPortal = () => {
    if (typeof portal === "string") {
      const _selector = document.querySelector(portal)
      console.log("======", _selector)
      return _selector || document.body
    } else if (portal instanceof HTMLElement) return portal
    return document.body
  }

  useEffect(() => {
    setPortal(_getPortal())
  }, [portal])
  const [_portal, setPortal] = useState(null)

  useImperativeHandle(ref, () => ({
    getContainer: _portal
  }))

  console.log("___", _portal)

  if (!_portal) return

  return createPortal(<div>1111</div>, _portal)
})

export default () => {
  const [ref, setRef] = useState(null)
  const ref1 = useRef()
  const [visible, setVisible] = useState(true)

  console.log(document.querySelector(".abc"))
  return (
    <>
      {visible && <Portal portal={document.body} ref={ref1} />}

      <div ref={setRef}>11111</div>
      <div className="abc">1122</div>
      <div onClick={() => setVisible(!visible)}>2222222</div>
      <C />
    </>
  )
}
