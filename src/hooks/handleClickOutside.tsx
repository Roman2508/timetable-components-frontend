import React from 'react'

//setIsOpen: React.Dispatch<React.SetStateAction<boolean>>, isOpen: boolean

type TypeOut = {
  ref: any
  isShow: boolean
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>
}

export const handleClickOutside = (defaultValue: boolean): TypeOut => {
  const ref = React.useRef<any | null>(null)

  const [isShow, setIsShow] = React.useState(defaultValue)

  const handleVisible = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsShow(false)
    }
  }

  React.useEffect(() => {
    document.addEventListener('click', handleVisible, true)

    return () => {
      document.removeEventListener('click', handleVisible, true)
    }
  }, [])

  return { ref, isShow, setIsShow }
}
