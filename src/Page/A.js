import useZustand from "./C"

const A = () => {
  const { name, updateName } = useZustand((state) => {
    return {
      name: state.name,
      age: state.age,
      updateName: state.updateName
    }
  })
  return <input value={name} onChange={(e) => updateName(e.target.value)} />
}

export default A
