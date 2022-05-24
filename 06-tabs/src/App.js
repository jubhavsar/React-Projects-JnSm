import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, serValue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newjobs = await response.json();
    
    setJobs(newjobs);
    setLoading(false);
  }

  // invoke fetchJobs function
  useEffect(() => {
    fetchJobs();
  }, []);

  if(loading) {
    return (
    <section className='section loading'>
      <h1>Loading...</h1>
    </section>
    )
  }
  const { title, company, dates, duties } = jobs[value];
  return <h2>Jobs</h2>
}

export default App
