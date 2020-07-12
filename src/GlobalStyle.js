import { createGlobalStyle } from "styled-components"
import style from "styled-theming"

const getBackground = style("mode", {
  dark: "#282c34",
  light: "#fff",
})
const getForeground = style("mode", {
  dark: "#fff",
  light: "#282c34",
})

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${getBackground};
    color: ${getForeground};
  }
  .App-header {
    background-color: ${getBackground};
    color: ${getForeground};
  }
  .App-toggle-dark-mode {
    color: ${getForeground};
    background-color: ${getBackground};
  }
`

export default GlobalStyle
