import { Route, BrowserRouter, Routes } from "react-router-dom"
import { Header, Footer, NewHeader } from "../components"
import { Gallery, Posts, Service, Home, AboutUs,Terms, NotFound, PostDetails, PostCreate } from "../pages"

const RoutesLayout = () => {
  return (
    <BrowserRouter>
      <NewHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/services" element={<Service />} />
        <Route path="/posts/create" element={<PostCreate />} />
        <Route path="/posts/detail/:id" element={<PostDetails />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/about/terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default RoutesLayout
