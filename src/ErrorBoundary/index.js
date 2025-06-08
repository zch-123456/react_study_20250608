import React from "react"

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    console.log("异常错误", error)
    return { hasError: true }
  }

  componentDidCatch(e) {
    console.log("======>>>>>>>>>...", e)
    console.log("ttt", this.props)
    // Sentry.captureMessage(`联邦内部报错, ${e}`, "info");
  }

  render() {
    if (this.state.hasError) {
      // 当加载远程联邦组件失败之后，直接加载本地组件(需要业务额外打包)
      return this.props.fallbackComponent
    }
    return this.props.children
  }
}

export default ErrorBoundary
