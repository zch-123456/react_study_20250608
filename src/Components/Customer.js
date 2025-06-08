function Customer(props) {
  console.log("props", props)
  return <div {...props}>{props.test || ""}</div>
}

export default Customer
