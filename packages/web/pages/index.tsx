import * as React from 'react'
import { Button } from '@monorepo/ui'
import NavbarMain from '@/modules/NavbarMain'

export default () => {
  return (
    <div>
      <NavbarMain />
      Hello World! <Button>Click me dude!</Button>
    </div>
  )
}
