import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui"
import { DcPage, MarvelPage, SearchPage, HeroPage } from "../pages"

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />

      <main>
        <section className="p-y">
          <Routes>
            <Route path="marvel" element={<MarvelPage />} />
            <Route path="dc" element={<DcPage />} />

            <Route path="search" element={<SearchPage />} />
            <Route path="hero/:id" element={<HeroPage />} />

            <Route path="/" element={<Navigate to="/marvel" />} />

          </Routes>
        </section>
      </main>
    </>
  )
}

