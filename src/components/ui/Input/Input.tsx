import React from 'react'
import styles from './Input.module.scss'
import cn from 'classnames'
import { ThemeContext } from '@/app/layout'

interface IInputProps {
  variant?: 'outlined' | 'standart'
  isError?: boolean
  errorMessage?: string
  label?: string
  value?: string
  width?: string
  children: JSX.Element | JSX.Element[] | string
  setValue: React.Dispatch<React.SetStateAction<string>>
}

const Input: React.FC<IInputProps> = ({
  setValue,
  label = '',
  value = '',
  isError = false,
  width = '220px',
  errorMessage = '',
  variant = 'outlined',
}) => {
  const { colorMode } = React.useContext(ThemeContext)

  const [isFocus, setIsFocus] = React.useState(false)

  const onBlurHandler = () => {
    if (!value) {
      setIsFocus(false)
    }
  }

  return (
    <div className={styles.wrapper}>
      <label
        className={cn(styles.label, {
          [styles.standartLabel]: variant === 'standart',
          [styles.outlinedLabel]: variant === 'outlined',
          [styles.focusLabelDark]: isFocus && colorMode === 'dark',
          [styles.focusLabelLight]: isFocus && colorMode === 'light',
          [styles.focusStandartLabel]: isFocus && variant === 'standart',
          [styles.focusOutlinedLabel]: isFocus && variant === 'outlined',
          [styles.errorLabel]: isError,
        })}>
        {label}
      </label>

      <div
        className={cn(styles.inputWrapper, {
          [styles.bottomLine]: isFocus && variant === 'standart',
          [styles.errorBottomLine]: isError,
        })}>
        {/*  */}
        <input
          value={value}
          type="text"
          onBlur={onBlurHandler}
          style={{ width: width }}
          onFocus={() => setIsFocus(true)}
          className={cn(styles.input, {
            [styles.outlinedInput]: variant === 'outlined',
            [styles.standartInput]: variant === 'standart',
            [styles.darkModeInput]: colorMode === 'dark',
            [styles.errorInput]: isError,
          })}
          onChange={(e) => setValue(e.target.value)}
        />

        {errorMessage && (
          <p className={cn(styles.errorMessage)} style={{ width: width }}>
            {errorMessage}
          </p>
        )}
      </div>
    </div>
  )
}

export default Input
