'use client'

import './globals.css'
import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Timetable',
  description: 'The best app for creating schedule',
}

export const ThemeContext = React.createContext({
  colorMode: 'light',
  changeColorMode: () => {},
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [colorMode, setColorMode] = React.useState('light')

  React.useEffect(() => {
    const currentColorMode = window.localStorage.getItem('colorMode')
    if (currentColorMode) {
      setColorMode(currentColorMode)
    }
  }, [])

  const changeColorMode = () => {
    setColorMode((prev) => {
      const currentMode = prev === 'light' ? 'dark' : 'light'
      window.localStorage.setItem('colorMode', currentMode)
      return currentMode
    })
  }

  return (
    <ThemeContext.Provider value={{ colorMode, changeColorMode }}>
      <html lang="ua">
        <body>{children}</body>
      </html>
    </ThemeContext.Provider>
  )
}
