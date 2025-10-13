import { Route, BrowserRouter, Routes } from "react-router-dom"
import { Header, Footer } from "../components"
import { Gallery, Posts, Home, NotFound } from "../pages"

const RoutesLayout = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default RoutesLayout
