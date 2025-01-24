// ****************************************************************************************************************
// The purpose of this component is to display list of Job Boxes. 
// When used in the Home Page it displays only three jobs
// When used in the 'jobs' Page it displays all the jobs.
// ****************************************************************************************************************

import JobListing from './JobListing';
import { useEffect, useState } from 'react';
import Spinner from './Spinner';

const JobListings = ({ isHome = false }) => {

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true); // to add any spinner or something similar

  useEffect(() => {

    // Get the list of job objects from the server. Either all object or with limit.
    const fetchJobs = async () => {
      const apiUrl = isHome ? "/api/jobs?_limit=3" : "/api/jobs"
      try {
        const res = await fetch(apiUrl);
        const data = await res.json()
        setJobs(data)

      }
      catch (error) {
        console.log("Error Fetching Data ", error)
      }
      finally {
        setLoading(false)
      }

    }

    fetchJobs()

  }, [])
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? 'Recent Jobs' : 'All Jobs'}
        </h2>

        {loading ? <Spinner loading={loading} /> : <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Take the three job objects and display them using JobListing Component */}
          {jobs.map((job) => (
            <JobListing key={job.id} job_obj={job} />
          ))}


        </div>}


      </div>
    </section >
  )
}

export default JobListings
