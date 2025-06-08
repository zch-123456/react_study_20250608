import { Input } from "antd"
import useZustand from "./index"

export default () => {
  const { name, setName } = useZustand((s) => {
    console.log("rrrrr", s)
    return {
      name: s.name,
      setName: s.setName
    }
  })

  return (
    <Input
      value={name}
      placeholder="请输入"
      onChange={(e) => setName(e.target.value)}
    />
  )
}
