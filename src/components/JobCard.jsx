function JobCard({ job }) {
    return (
      <div className="p-6 bg-white border rounded-xl hover:shadow-lg">
  
        <div className="flex items-start justify-between">
  
          <div>
            <h3 className="text-xl font-bold text-gray-900">
              {job.title}
            </h3>
  
            <p className="mt-1 text-gray-500">
              {job.company}
            </p>
          </div>
  
          <span className="px-3 py-1 text-sm text-blue-600 bg-blue-100 rounded-full">
            {job.type}
          </span>
  
        </div>
  
        <p className="mt-4 text-gray-600">
          {job.description}
        </p>
  
        <div className="flex flex-wrap gap-2 mt-4">
          {job.skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 text-sm bg-gray-100 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
  
        <div className="flex items-center justify-between mt-6">
  
          <span className="font-semibold text-green-600">
            {job.salary}
          </span>
  
          <button className="px-5 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
            Apply
          </button>
  
        </div>
  
      </div>
    )
  }
  
  export default JobCard