import * as React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'

interface Props extends RouteComponentProps<{}> {}

class ScrollToTop extends React.Component<Props> {
  public componentDidUpdate (prevProps: Props) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  public render () {
    return this.props.children
  }
}

export default withRouter(ScrollToTop)
