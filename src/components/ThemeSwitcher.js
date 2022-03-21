import { useContext } from 'react'
import { themeContext } from '../contexts/ThemeContextProvider'
import MoonIcon from './icons/MoonIcon'
import SunIcon from './icons/SunIcon'

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext(themeContext)

  return (
    <div className="fixed top-4 right-8">
      <button onClick={toggleTheme}>
        {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
      </button>
    </div>
  )
}
