const categories = [
    {
      name: 'Web Development',
      jobs: '120 Jobs',
      icon: '💻',
    },
    {
      name: 'Graphic Design',
      jobs: '85 Jobs',
      icon: '🎨',
    },
    {
      name: 'Data Science',
      jobs: '65 Jobs',
      icon: '📊',
    },
    {
      name: 'Digital Marketing',
      jobs: '90 Jobs',
      icon: '📱',
    },
  ]
  
  function Categories() {
    return (
      <section className="max-w-7xl px-6 py-16 mx-auto">
  
        <h2 className="text-3xl font-bold text-center text-gray-900">
          Popular Categories
        </h2>
  
        <p className="mt-3 text-center text-gray-600">
          Explore jobs by category
        </p>
  
        <div className="grid gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-4">
  
          {categories.map((category) => (
            <div
              key={category.name}
              className="p-6 text-center bg-white border rounded-xl hover:shadow-lg cursor-pointer"
            >
              <div className="text-4xl">
                {category.icon}
              </div>
  
              <h3 className="mt-4 text-lg font-bold">
                {category.name}
              </h3>
  
              <p className="mt-2 text-gray-500">
                {category.jobs}
              </p>
            </div>
          ))}
  
        </div>
  
      </section>
    )
  }
  
  export default Categories