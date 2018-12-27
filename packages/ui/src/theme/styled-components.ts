// styled-components.ts
import * as styledComponents from 'styled-components'
// tslint:disable no-duplicate-imports
import { ThemedStyledComponentsModule } from 'styled-components'
import { Theme } from './type'

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider
} = styledComponents as ThemedStyledComponentsModule<Theme>

export { css, createGlobalStyle, keyframes, ThemeProvider }
export default styled

// Export Global Style
export const GlobalStyle = createGlobalStyle`
body {
  background-color: #F9FBFD;
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
