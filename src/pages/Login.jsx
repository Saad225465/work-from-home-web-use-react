function Login({ setPage }) {
    return (
      <div className="flex items-center justify-center min-h-screen px-6 bg-gray-50">
  
        <div className="w-full max-w-md p-8 bg-white border rounded-xl shadow-sm">
  
          <h1 className="text-3xl font-bold text-center text-blue-600">
            WorkHome
          </h1>
  
          <h2 className="mt-6 text-2xl font-bold text-center">
            Login
          </h2>
  
          <form className="mt-8 space-y-5">
  
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
                placeholder="Enter your password"
                className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
  
            <button
              type="submit"
              className="w-full py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              Login
            </button>
  
          </form>
  
          <p className="mt-6 text-center text-gray-600">
            Don't have an account?
  
            <button
              onClick={() => setPage('signup')}
              className="ml-2 text-blue-600 hover:underline"
            >
              Sign Up
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
  
  export default Login