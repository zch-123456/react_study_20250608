import {
  render,
  screen,
  fireEvent,
  waitFor,
  cleanup,
  renderHook,
  act
} from "@testing-library/react"
import App from "./App"

import useCount from "./hooks/useCount"

afterEach(cleanup)

// test("renders learn react link", async () => {
//   const { container } = render(<App />);
//   const a = screen.getByTestId("aaaaa");
//   const b = container.querySelector("button");

//   fireEvent.click(b);

// console.log('=====', performance.now())

//   const m = () => new Promise(r=>setTimeout(() => {
//     r('kkkkk')
//   }, 2000))

//   const c  = await m()

// console.log('=====111', performance.now())

//   console.log('=====>>>>>>', c)

//   // console.log('===>>>', performance.now())

//   setTimeout(async () => {
//     console.log("七佛那个1111");
//     await waitFor(
//       () => {
//         // console.log('pepepep', performance.now())
//         console.log("==-------", b.textContent);

//         expect(a.textContent).toEqual("0");
//       },
//       {
//         timeout: 2000,
//       }
//     );
//   }, 1000);
// });

it(`testhook`, async () => {
  const a = renderHook(() => useCount(10))

  console.log("=====", a)
  const { result } = a
  const [count, add, dec] = result.current
  console.log("=======", add, count, dec)

  expect(count).toEqual(10)

  await act(() => add(23))

  console.log("=================", result.current)

  expect(result.current[0]).toBe(33)
})
