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
  return (
    <section className='section'>
      <div className="title">
        <h2>experience</h2>  
        <div className="underline"></div>
      </div>
      <div className='jobs-center'>
        {/*btn container*/}
        {/*job info*/}
        <article className='job-info'>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className='job-date'>{dates}</p>
          { duties.map((duty, index) => {
            return <div key={index} className="job-desc">
              <FaAngleDoubleRight className="job-icon" />
              <p>{duty}</p>
              
            </div>
          }) }
        </article>
      </div>
    </section>
  );
}

export default App
