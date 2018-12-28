import * as React from 'react'
import { Button as RebassButton } from 'rebass'
import Styled from 'styled-components'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const StyledButton = Styled(RebassButton)``

export const Button = (props: Props) => <StyledButton {...props} />
