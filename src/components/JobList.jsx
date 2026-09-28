import JobCard from './JobCard'

const jobs = [
  {
    title: 'Frontend Developer',
    company: 'Tech Solutions',
    type: 'Remote',
    salary: '$800 - $1200',
    description: 'Build modern websites and web applications.',
    skills: ['React', 'JavaScript', 'Tailwind'],
  },
  {
    title: 'Graphic Designer',
    company: 'Creative Studio',
    type: 'Remote',
    salary: '$600 - $1000',
    description: 'Create graphics and visual content.',
    skills: ['Photoshop', 'Figma', 'Canva'],
  },
  {
    title: 'Data Analyst',
    company: 'Data Corp',
    type: 'Remote',
    salary: '$900 - $1400',
    description: 'Analyze data and create useful reports.',
    skills: ['Python', 'Pandas', 'Excel'],
  },
]

function JobList() {
  return (
    <section className="max-w-7xl px-6 py-16 mx-auto">

      <h2 className="text-3xl font-bold text-gray-900">
        Latest Jobs
      </h2>

      <div className="grid gap-6 mt-10 md:grid-cols-2">

        {jobs.map((job) => (
          <JobCard
            key={job.title}
            job={job}
          />
        ))}

      </div>

    </section>
  )
}

export default JobList