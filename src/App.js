import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Layout from './components/Layout'
import Home from './pages/Home'
import MovieDetail from './pages/MovieDetail'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies/:id" element={<MovieDetail />} />
      </Routes>
    </BrowserRouter>
  )
}
