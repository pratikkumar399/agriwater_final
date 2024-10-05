
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Dashboard from './components/Dashboard'
import Home from './components/Home'
import CommonFooter from './components/CommonFooter'
import CommonHeader from './components/CommonHeader'
import Blogs from './components/Blogs'


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <CommonHeader />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/blogs" element={<Blogs />} />
          </Routes>
        </main>
        <CommonFooter />
      </div>
    </Router>
  )
}

export default App