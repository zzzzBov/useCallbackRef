import * as React from 'react'

export interface IButtonProps {
  onClick (): void
}

export class Button extends React.PureComponent<IButtonProps> {
  render () {
    const {
      children,
      onClick
    } = this.props

    console.log(children, 'rerender')

    return (
      <button type='button' onClick={onClick}>
        {children}
      </button>
    )
  }
}
