import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import FiberApp from "./FiberApp"
import Projects from './Pages/Projects'
import About from './Pages/About'
import BottomNav from "./Components/BottomNav/BottomNav"
import TopNav from "./Components/TopNav/TopNav"
import { Toaster } from 'sonner'

function App() {

  
  

  return (
    <Router>
      <AppContent />
    </Router>
  )
}

function AppContent() {
  // Now useLocation will work here
  const location = useLocation();
  console.log("Current path:", location.pathname);
  
  return (
    <>
    {
      location.pathname === "/" ? <BottomNav /> : null
    }
    <Toaster expand position='top-center' richColors />
    <TopNav />
      <Routes>
        <Route path="/" element={<FiberApp />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  )
}

export default App
