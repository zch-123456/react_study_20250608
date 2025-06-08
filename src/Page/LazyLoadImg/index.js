import { useEffect, useRef, useState } from "react"
import { Spin } from "antd"

const Page = () => {
  const ref = useRef([])
  const [showList, setShowList] = useState([])
  const [unShowList, setUnShowList] = useState(() =>
    Array(8).fill(
      "https://res.waiqin365.com/d/qince-web/platform/systemParamters/effectDraw.png"
    )
  )
  useEffect(() => {
    _init()

    document.documentElement.innerHTML = null
  }, [])

  const _init = () => {
    if (
      (Array.isArray(unShowList) && unShowList.length === 0) ||
      !Array.isArray(unShowList)
    )
      return
    const newImg = new Image()
    newImg.src = unShowList[0]
    ref.current.push({ loading: true })
    const _arr1 = JSON.parse(JSON.stringify(ref.current))
    setShowList(_arr1)
    newImg.onload = () => {
      setTimeout(() => {
        const _last = ref.current.slice(-1)[0]
        _last.loading = false
        _last.url = unShowList[0]
        ref.current.pop()
        ref.current.push(_last)
        const _arr = JSON.parse(JSON.stringify(ref.current))
        setShowList(_arr)
        unShowList.shift()
        setUnShowList(unShowList)
        setTimeout(() => {
          _init()
        }, 1000)
      }, 100)
    }
    newImg.onerror = () => {}
  }

  return (
    <div
      style={{
        display: "grid",
        gap: 10,
        gridTemplateColumns: "repeat(4, 1fr)"
      }}
    >
      <div
        className="bg"
        style={{
          width: 200,
          height: 200,
          background:
            "url(https://res.waiqin365.com/d/qince-web/platform/systemParamters/effectDraw.png)"
        }}
      ></div>
      {/* {showList.map((i, index) => {
        return i.loading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Spin key={index} />
          </div>
        ) : (
          <img style={{ width: 100, height: 100 }} src={i.url} key={index} />
        );
      })} */}
    </div>
  )
}

export default Page
