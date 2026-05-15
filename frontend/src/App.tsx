import { Routes, Route } from "react-router-dom"

import Header from "./components/Header.tsx"
import Footer from "./components/Footer.tsx"


import Home from "./pages/public/Home.tsx"
import Dashboard from "./pages/admin/Dashboard.tsx"

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App