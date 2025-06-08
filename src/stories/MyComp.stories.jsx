import { MyComp } from "./MyComp"
import { fn, within, userEvent } from "@storybook/test"
import React from "react"

export default {
  title: "Extra/MyComp",
  component: MyComp,
  tags: ["autodocs"],
  parameters: {
    layout: "centered"
  },
  argTypes: {
    backgroundColor: { control: "color" }
  },
  args: { onClick: fn() }
}

export const TestMyComp = {
  args: {
    text: "测试一下"
  },
  render() {
    return <MyComp />
  },
  play: async function ({ canvasElement }) {
    console.log("eeeeeeeeee", canvasElement)
    const canvas = within(canvasElement)
    console.log("=.>>...", canvas)
    const b = canvas.getByTestId("mmm")
    const c = canvasElement.querySelector(".kkkk")
    console.log("vvvv", c)

    // const btn = await canvas.getByText(/测试一下/);
    // await userEvent.click(btn);
    // btn.textContent = 'wwwwwwwwww'
  },
  loaders: [
    async () => {
      await "111"
      return { kk: "111111" }
    }
  ]
}
