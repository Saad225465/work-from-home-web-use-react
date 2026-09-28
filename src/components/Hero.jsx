function Hero() {
    return (
      <section className="px-6 py-24 text-center bg-blue-50">
  
        <h1 className="max-w-4xl mx-auto text-4xl font-bold text-gray-900 md:text-6xl">
          Find Your Perfect
          <span className="text-blue-600"> Work From Home </span>
          Job
        </h1>
  
        <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-600">
          Discover remote jobs and build your career from anywhere.
        </p>
  
        {/* Search */}
        <div className="flex flex-col max-w-3xl gap-3 mx-auto mt-10 sm:flex-row">
  
          <input
            type="text"
            placeholder="Search jobs..."
            className="flex-1 px-5 py-4 bg-white border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          />
  
          <button className="px-8 py-4 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700">
            Search
          </button>
  
        </div>
  
      </section>
    )
  }
  
  export default Hero