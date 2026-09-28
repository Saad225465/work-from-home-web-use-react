function Footer() {
    return (
      <footer className="mt-10 bg-gray-900 text-white">
  
        <div className="grid max-w-7xl gap-10 px-6 py-12 mx-auto md:grid-cols-4">
  
          <div>
            <h2 className="text-2xl font-bold text-blue-400">
              WorkHome
            </h2>
  
            <p className="mt-4 text-gray-400">
              Find remote jobs and build your career from anywhere.
            </p>
          </div>
  
          <div>
            <h3 className="font-bold">
              Company
            </h3>
  
            <div className="mt-4 space-y-2 text-gray-400">
              <p>About Us</p>
              <p>Contact</p>
              <p>Careers</p>
            </div>
          </div>
  
          <div>
            <h3 className="font-bold">
              For Job Seekers
            </h3>
  
            <div className="mt-4 space-y-2 text-gray-400">
              <p>Browse Jobs</p>
              <p>Categories</p>
              <p>Career Advice</p>
            </div>
          </div>
  
          <div>
            <h3 className="font-bold">
              Follow Us
            </h3>
  
            <div className="flex gap-4 mt-4 text-gray-400">
              <span>Facebook</span>
              <span>LinkedIn</span>
            </div>
          </div>
  
        </div>
  
        <div className="py-5 text-center border-t border-gray-700 text-gray-400">
          © 2026 WorkHome. All rights reserved.
        </div>
  
      </footer>
    )
  }
  
  export default Footer