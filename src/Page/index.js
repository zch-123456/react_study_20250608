import { useEffect } from "react"
import { Button } from "antd"
import { post } from "../utils/request"
import uniqueId from "lodash"
import qs from "querystring"

const Page = () => {
  useEffect(() => {
    const n = new URLSearchParams("name=11&a=1&a=2&b=222&c=444&a=555")
    n.set("a", "小米")

    n.forEach((item) => console.log("-----", item))
    // n.entries((p) => console.log(p, "==="));
    console.log("====", n.values())

    const b = [1, 5, 99, 464, 9292]
    console.log("n===>>>", b.keys())
  }, [])

  const handleClick = () => {
    localStorage.removeItem("accessToken")
    Promise.all([
      post({ key: "00" }),
      post({ key: "11" }),
      post({ key: "22" }),
      post({ key: "33" })
    ]).then((res) => console.log("四个请求res", res))
  }

  console.log("=======")
  return (
    <>
      <Button onClick={handleClick}>点击</Button>
    </>
  )
}

export default Page
