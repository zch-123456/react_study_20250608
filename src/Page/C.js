import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"

const middleWare = (fc, { name = "", storage }) => {
  return (set, get, store) => {
    const newSet = (fn) => {
      set(fn)
      console.log(storage, name)
      storage.setItem(
        name,
        JSON.stringify({
          state: get()
        })
      )
    }
    return fc(newSet, get, store)
  }
}

const createJSONStorage1 = (val) => {
  console.log(val())
  return val()
}

const test1 = middleWare(
  persist(
    (set) => {
      return {
        name: "33",
        age: 2,
        updateName(val) {
          set(() => ({ name: val }))
        },
        updateAge(val) {
          set(() => ({ age: val }))
        }
      }
    },
    {
      name: "guan4444g1",
      storage: createJSONStorage(() => sessionStorage)
    }
  ),
  { name: "guang133333333", storage: createJSONStorage1(() => localStorage) }
)

console.log(test1, "test1")

export default create(test1)
