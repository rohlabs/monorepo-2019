import * as React from 'react'
import styled, { ThemeProps } from 'styled-components'
import { space, SpaceProps } from 'styled-system'
import theme, { Theme } from '../../theme'

export interface ButtonProps
  extends SpaceProps<number>,
    React.HTMLAttributes<HTMLButtonElement> {
  theme?: Theme
}
type ButtonStyledProps = ButtonProps & ThemeProps<Theme>
const ButtonStyled = styled.button`
  -webkit-font-smoothing: antialiased;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
  font-family: inherit;
  border-width: 0;
  border-style: solid;
  background: ${(props: ButtonStyledProps) => props.theme.colors.success};
  padding: 8px 10px;
  border-radius: 3px;
  color: #fff;

  ${space};
`
export const Button: React.SFC<ButtonProps> = ({ children, ...props }) => {
  return <ButtonStyled {...props}>{children}</ButtonStyled>
}

Button.defaultProps = {
  theme: theme
}

Button.displayName = 'Button'
