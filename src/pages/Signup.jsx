function Signup({ setPage }) {
    return (
      <div className="flex items-center justify-center min-h-screen px-6 bg-gray-50">
  
        <div className="w-full max-w-md p-8 bg-white border rounded-xl shadow-sm">
  
          <h1 className="text-3xl font-bold text-center text-blue-600">
            WorkHome
          </h1>
  
          <h2 className="mt-6 text-2xl font-bold text-center">
            Create Account
          </h2>
  
          <form className="mt-8 space-y-5">
  
            <div>
              <label className="block mb-2 font-medium">
                Full Name
              </label>
  
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
  
            <div>
              <label className="block mb-2 font-medium">
                Email
              </label>
  
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
  
            <div>
              <label className="block mb-2 font-medium">
                Password
              </label>
  
              <input
                type="password"
                placeholder="Create a password"
                className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
  
            <button
              type="submit"
              className="w-full py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              Create Account
            </button>
  
          </form>
  
          <p className="mt-6 text-center text-gray-600">
            Already have an account?
  
            <button
              onClick={() => setPage('login')}
              className="ml-2 text-blue-600 hover:underline"
            >
              Login
            </button>
          </p>
  
          <button
            onClick={() => setPage('home')}
            className="block mx-auto mt-6 text-gray-500 hover:text-blue-600"
          >
            ← Back to Home
          </button>
  
        </div>
  
      </div>
    )
  }
  
  export default Signup