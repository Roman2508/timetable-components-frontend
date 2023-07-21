import React from 'react'
import styles from './Paper.module.scss'
import { ThemeContext } from '@/app/layout'
import cn from 'classnames'

interface IPaperProps {
  children: JSX.Element | JSX.Element[]
  width?: string
}

const Paper: React.FC<React.PropsWithChildren<IPaperProps>> = ({ children, width }) => {
  const { colorMode } = React.useContext(ThemeContext)

  const paperStyles = {
    width: width ? width : 'auto',
  }

  return (
    <div className={cn(styles.paper, styles[colorMode])} style={paperStyles}>
      {children}
    </div>
  )
}

export default Paper
