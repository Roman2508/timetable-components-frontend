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
  htmlType?: 'text' | 'number'
  setValue: React.Dispatch<React.SetStateAction<string>>
}

const Input: React.FC<IInputProps> = ({
  setValue,
  label = '',
  value = '',
  isError = false,
  width = '220px',
  htmlType = 'text',
  errorMessage = '',
  variant = 'outlined',
}) => {
  const { colorMode } = React.useContext(ThemeContext)

  const [isFocus, setIsFocus] = React.useState(false)
  const [isFocusLabel, setIsFocusLabel] = React.useState(false)

  const onFocusHandler = () => {
    setIsFocus(true)
    setIsFocusLabel(true)
  }

  const onBlurHandler = () => {
    if (!value) {
      setIsFocus(false)
    }
    setIsFocusLabel(false)
  }

  return (
    <div className={styles.wrapper}>
      <label
        className={cn(styles.label, {
          [styles.errorLabel]: isError,
          [styles.focusLabel]: isFocusLabel,
          [styles.standartLabel]: variant === 'standart',
          [styles.outlinedLabel]: variant === 'outlined',
          [styles.focusLabelDark]: isFocus && colorMode === 'dark',
          [styles.focusLabelLight]: isFocus && colorMode === 'light',
          [styles.focusStandartLabel]: isFocus && variant === 'standart',
          [styles.focusOutlinedLabel]: isFocus && variant === 'outlined',
        })}
      >
        {label}
      </label>

      <div
        className={cn(styles.inputWrapper, {
          [styles.bottomLine]: isFocus && variant === 'standart',
          [styles.focusInput]: isFocusLabel,
          [styles.errorBottomLine]: isError,
        })}
      >
        {/*  */}
        <input
          value={value}
          type={htmlType}
          onBlur={onBlurHandler}
          style={{ width: width }}
          onFocus={onFocusHandler}
          className={cn(styles.input, {
            [styles.outlinedInput]: variant === 'outlined',
            [styles.standartInput]: variant === 'standart',
            [styles.darkModeInput]: colorMode === 'dark',
            [styles.lightModeInput]: colorMode === 'light',
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
