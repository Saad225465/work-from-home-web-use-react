import { useState } from 'react'

function Navbar({ setPage }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm">
      <div className="flex items-center justify-between max-w-7xl px-6 py-4 mx-auto">

        {/* Logo */}
        <button
          onClick={() => setPage('home')}
          className="text-2xl font-bold text-blue-600"
        >
          WorkHome
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <button className="text-gray-700 hover:text-blue-600">
            Home
          </button>

          <button className="text-gray-700 hover:text-blue-600">
            Jobs
          </button>

          <button className="text-gray-700 hover:text-blue-600">
            Categories
          </button>

          <button className="text-gray-700 hover:text-blue-600">
            About
          </button>

          <button className="text-gray-700 hover:text-blue-600">
            Contact
          </button>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-3">
          <button
            onClick={() => setPage('login')}
            className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50"
          >
            Login
          </button>

          <button
            onClick={() => setPage('signup')}
            className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Sign Up
          </button>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl md:hidden"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="px-6 pb-5 md:hidden">
          <div className="flex flex-col gap-4">

            <button className="text-left text-gray-700">
              Home
            </button>

            <button className="text-left text-gray-700">
              Jobs
            </button>

            <button className="text-left text-gray-700">
              Categories
            </button>

            <button className="text-left text-gray-700">
              About
            </button>

            <button className="text-left text-gray-700">
              Contact
            </button>

            <button
              onClick={() => setPage('login')}
              className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg"
            >
              Login
            </button>

            <button
              onClick={() => setPage('signup')}
              className="px-4 py-2 text-white bg-blue-600 rounded-lg"
            >
              Sign Up
            </button>

          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar