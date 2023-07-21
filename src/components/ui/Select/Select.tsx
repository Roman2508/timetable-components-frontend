import React from 'react'
import styles from './Select.module.scss'
import cn from 'classnames'
import { ThemeContext } from '@/app/layout'
import { BiSolidDownArrow } from 'react-icons/bi'

interface ISelectProps {
  children?: JSX.Element | JSX.Element[]
  variant?: 'outlined' | 'standart'
  label?: string
  value?: string
  width?: string
}

const Select: React.FC<ISelectProps> = ({
  children,
  label = '',
  value = '',
  width = '220px',
  variant = 'outlined',
}) => {
  const { colorMode } = React.useContext(ThemeContext)

  const [isFocus, setIsFocus] = React.useState(false)
  const [isFocusLabel, setIsFocusLabel] = React.useState(false)
  const [isSelectListOpen, setSelectListOpen] = React.useState(false)

  const onFocusHandler = () => {
    setIsFocus(true)
    setIsFocusLabel(true)
    setSelectListOpen(true)
  }

  const onBlurHandler = () => {
    if (!value) {
      setIsFocus(false)
    }
    setIsFocusLabel(false)
    setIsFocusLabel(false)
  }

  console.log(value)

  return (
    <>
      <div className={styles.wrapper}>
        <label
          className={cn(styles.label, {
            [styles.focusLabel]: isFocusLabel,
            [styles.standartLabel]: variant === 'standart',
            [styles.outlinedLabel]: variant === 'outlined',
            [styles.focusLabelDark]: isFocus && colorMode === 'dark',
            [styles.focusLabelLight]: isFocus && colorMode === 'light',
            [styles.focusStandartLabel]: isFocus && variant === 'standart',
            [styles.focusOutlinedLabel]: isFocus && variant === 'outlined',
          })}>
          {label}
        </label>

        <div
          className={cn(styles.inputWrapper, {
            [styles.bottomLine]: isFocus && variant === 'standart',
            [styles.focusInput]: isFocusLabel,
          })}>
          {/*  */}
          <input
            readOnly
            value={value}
            type="text"
            onBlur={onBlurHandler}
            style={{ width: width }}
            onFocus={onFocusHandler}
            className={cn(styles.input, {
              [styles.outlinedInput]: variant === 'outlined',
              [styles.standartInput]: variant === 'standart',
              [styles.darkModeInput]: colorMode === 'dark',
              [styles.lightModeInput]: colorMode === 'light',
            })}
            // onChange={(e) => setValue(e.target.value)}
          />

          <BiSolidDownArrow
            className={cn(styles.inputIcon, {
              [styles.rotated]: isFocusLabel,
            })}
            size={14}
          />
        </div>

        <div
          className={cn(styles.selectList, {
            [styles.selectListDark]: colorMode === 'dark',
            [styles.selectListLight]: colorMode === 'light',
            [styles.selectListHide]: !isSelectListOpen,
          })}
          onClick={() => setSelectListOpen(false)}>
          {children}
        </div>
      </div>

      {isSelectListOpen && <div className={styles.selectListOverlay} onClick={() => setSelectListOpen(false)} />}
    </>
  )
}

export default Select
