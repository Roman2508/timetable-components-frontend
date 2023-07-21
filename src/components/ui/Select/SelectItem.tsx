import React from 'react'
import styles from './Select.module.scss'
import cn from 'classnames'
import { ThemeContext } from '@/app/layout'

interface ISelectItemProps {
  value: string
  onChange: React.Dispatch<React.SetStateAction<string>>
}

const SelectItem: React.FC<ISelectItemProps> = ({ value, onChange }) => {
  const { colorMode } = React.useContext(ThemeContext)

  const handleChange = () => {
    onChange(value)
  }

  return (
    <div
      onClick={handleChange}
      className={cn(styles.selectItem, {
        [styles.selectItemDark]: colorMode === 'dark',
        [styles.selectItemLight]: colorMode === 'light',
      })}>
      {value}
    </div>
  )
}

export default SelectItem
