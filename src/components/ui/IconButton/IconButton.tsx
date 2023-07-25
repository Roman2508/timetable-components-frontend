import React from 'react'
import cn from 'classnames'
import { ThemeContext } from '@/app/layout'
import styles from './IconButton.module.scss'

interface IIconButtonProps {
  children: JSX.Element | JSX.Element[] | string | string[]
  additionalStyles?: React.CSSProperties
}

const IconButton: React.FC<React.PropsWithChildren<IIconButtonProps>> = ({ children, additionalStyles = {} }) => {
  const { colorMode } = React.useContext(ThemeContext)

  return (
    <div
      style={{ ...additionalStyles }}
      className={cn(styles.iconButton, {
        [styles['light']]: colorMode === 'light',
        [styles['dark']]: colorMode === 'dark',
      })}>
      {children}
    </div>
  )
}

export default IconButton
