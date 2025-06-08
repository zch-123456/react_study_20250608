import useZustand from "./C"

const B = () => {
  const { name, updateName } = useZustand((state) => ({
    name: state.name,
    age: state.age,
    updateName: state.updateName
  }))
  return <input value={name} onChange={(e) => updateName(e.target.value)} />
}

export default B
