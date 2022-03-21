import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ThemeSwitcher from './components/ThemeSwitcher'
import ThemeContextProvider from './contexts/ThemeContextProvider'

import Home from './pages/Home'
import MovieDetail from './pages/MovieDetail'

export default function App() {
  return (
    <ThemeContextProvider>
      <ThemeSwitcher />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movies/:id" element={<MovieDetail />} />
        </Routes>
      </BrowserRouter>
    </ThemeContextProvider>
  )
}
