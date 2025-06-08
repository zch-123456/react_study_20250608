import { create } from "zustand"

const myMiddleWare = (fn) => (set, get, store) => {
  return fn(set, get, store)
}

const myCreate = (fn) => {
  console.log("FNFNFN", fn())
  return (ak) => {
    const m = fn()
    return ak(m)
  }
}

export default myCreate(
  myMiddleWare((set) => ({
    name: "",
    setName(val) {
      set({ name: val })
    }
  }))
)
