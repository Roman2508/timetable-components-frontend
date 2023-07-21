import React from 'react'
import styles from './List.module.scss'
import { ThemeContext } from '@/app/layout'
import cn from 'classnames'

interface IListWrapperProps {
  children: JSX.Element | JSX.Element[] | string | string[]
}

const ListWrapper: React.FC<React.PropsWithChildren<IListWrapperProps>> = ({ children }) => {
  const { colorMode } = React.useContext(ThemeContext)

  return (
    <div
      className={cn(styles.wrapper, {
        [styles.wrapperDark]: colorMode === 'dark',
        [styles.wrapperLight]: colorMode === 'light',
      })}>
      {children}
    </div>
  )
}

export default ListWrapper
