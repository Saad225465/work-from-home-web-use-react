import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Categories from './components/Categories'
import JobList from './components/JobList'
import Footer from './components/Footer'
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {
  const [page, setPage] = useState('home')

  if (page === 'login') {
    return <Login setPage={setPage} />
  }

  if (page === 'signup') {
    return <Signup setPage={setPage} />
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar setPage={setPage} />

      <Hero />

      <Categories />

      <JobList />

      <Footer />
    </div>
  )
}

export default App