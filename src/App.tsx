import { lazy,Suspense } from "react";
import {Loading} from "./components";
import {Footer, Navbar,PageNotFound } from "./components"
import { BrowserRouter as Router, Route,Routes } from "react-router-dom"

const Home = lazy(() => import('./routes/Home'))
const Gallery = lazy(() => import('./routes/Gallery'))
const Contact = lazy(() => import('./routes/Contact'))

function App() {

  return (
    <Router>
      <Navbar />
      <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="galerija" element={<Gallery/>}/>
        <Route path="kontakt" element={<Contact/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
      </Suspense>
      <Footer />
    </Router>
  )
}

export default App