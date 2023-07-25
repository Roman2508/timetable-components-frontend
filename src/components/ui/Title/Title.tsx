import React from 'react'
import styles from './Title.module.scss'
import { ThemeContext } from '@/app/layout'

interface ITitleProps {
  color?: 'black' | 'white' | 'gray' | 'green'
  Variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  align?: 'left' | 'right' | 'center'
  additionalStyles?: React.CSSProperties
  children: JSX.Element | JSX.Element[] | string
}

const titleColors = {
  black: '#00272f',
  white: '#ffffff',
  gray: '#a7a7a7',
  green: '#20bd5f',
}

const Title: React.FC<React.PropsWithChildren<ITitleProps>> = ({
  children,
  Variant = 'h3',
  color = 'black',
  align = 'center',
  additionalStyles = {},
}) => {
  const { colorMode } = React.useContext(ThemeContext)

  const [titleColor, setTitleColor] = React.useState<keyof typeof titleColors>('black')

  React.useEffect(() => {
    if (colorMode === 'dark') {
      if (color === 'black') {
        setTitleColor('white')
      } else {
        setTitleColor(color)
      }
    }

    if (colorMode === 'light') {
      if (color === 'white') {
        setTitleColor('black')
      } else {
        setTitleColor(color)
      }
    }
  }, [colorMode])

  return (
    <div className={styles.titleWrapper}>
      <Variant style={{ color: titleColors[titleColor], textAlign: align, ...additionalStyles }}>{children}</Variant>
    </div>
  )
}

export default Title
