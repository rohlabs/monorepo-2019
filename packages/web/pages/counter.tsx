import * as React from 'react'
import { Button } from '@monorepo/ui'

export default () => {
  const [count, setCount] = React.useState(0)

  return (
    <>
      <p>You clicked me: {count} times</p>
      <Button onClick={() => setCount(count + 1)}>Click me</Button>
    </>
  )
}
