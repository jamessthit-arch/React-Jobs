import JobListings from "../components/JobListings"

const JobsPage = () => {
  return (
    <select className= 'bg-blue-50 px-4 py-6'>
    <JobListings  isHome={ false }/>
    </select>
  )
}

export default JobsPage