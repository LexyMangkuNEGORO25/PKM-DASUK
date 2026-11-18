import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import ScrollToTop from './components/layout/ScrollToTop'
import Berita from './pages/Berita'
import BeritaDetail from './pages/BeritaDetail'
import Home from './pages/Home'
import Kontak from './pages/Kontak'
import NotFound from './pages/NotFound'
import Pelayanan from './pages/Pelayanan'
import Profil from './pages/Profil'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="profil" element={<Profil />} />
          <Route path="pelayanan" element={<Pelayanan />} />
          <Route path="berita" element={<Berita />} />
          <Route path="berita/:slug" element={<BeritaDetail />} />
          <Route path="kontak" element={<Kontak />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}
