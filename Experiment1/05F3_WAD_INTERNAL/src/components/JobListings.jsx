import { Link } from 'react-router-dom';

function JobListings() {
  const jobs = [
    { id: 1, title: "React Developer", company: "Google", loc: "USA" },
    { id: 2, title: "Backend Developer", company: "Amazon", loc: "India" },
    { id: 3, title: "Fullstack Developer", company: "Microsoft", loc: "Remote" },
  ];

  return (
    <div className="mt-5">
      <h2>Job Listings</h2>
      <div className="mt-4">
        {jobs.map(j => (
          <div key={j.id} className="card mb-3">
            <div className="card-body d-flex justify-content-between">
              <div>
                <h5>{j.title}</h5>
                <p>{j.company} - {j.loc}</p>
              </div>
              <Link to="/apply" className="btn btn-info">Apply</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobListings;