import { createGlobalStyle } from 'styled-components'
import { Constants } from './constants'

// Export Global Style
export const GlobalStyle = createGlobalStyle`
body {
  background-color: ${Constants.colors.backgrounds.body};
}

* {
  outline: none;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
}
`
