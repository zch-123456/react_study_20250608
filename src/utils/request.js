import myAxios from "./axios"

export const post = (params) => {
  return myAxios.post("http://localhost:9999/login", params)
}
