import * as React from 'react'
import { Button as RebassButton } from 'rebass'
import Styled from '~/theme/styled-components'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const StyledButton = Styled(RebassButton)`
    color: white;
`

export const Button = (props: Props) => <StyledButton {...props} />
