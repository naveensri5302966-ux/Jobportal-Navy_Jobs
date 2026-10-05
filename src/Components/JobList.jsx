function JobList({
  jobs,
  savedJobs,
  onSave,
  onViewDetails
}) {

  if (jobs.length === 0) {
    return (
      <div className="no-results">
        <div className="no-results-icon">
          ◌
        </div>

        <h2>No jobs found</h2>

        <p>
          No matching job opportunities available.
        </p>
      </div>
    );
  }

  return (
    <section className="job-list">

      {jobs.map((job) => {

        const isSaved = savedJobs.some(
          (item) => item.id === job.id
        );

        return (
          <article
            className="job-card"
            key={job.id}
          >

            <span className="job-industry">
              {job.industry}
            </span>

            <h2>{job.title}</h2>

            <p className="job-company">
              {job.company}
            </p>

            <div className="job-information">
              <p>📍 {job.location}</p>
              <p>💰 {job.salary}</p>
              <p>⏳ {job.experience}</p>
              <p>◈ {job.jobType}</p>
            </div>

            <div className="job-card-buttons">

              <button
                className="details-button"
                onClick={() => onViewDetails(job)}
              >
                View Details
              </button>

              <button
                className={
                  isSaved
                    ? "save-job-button saved"
                    : "save-job-button"
                }
                onClick={() => onSave(job)}
              >
                {isSaved ? "✓ Saved" : "♡ Save"}
              </button>

            </div>

          </article>
        );
      })}

    </section>
  );
}

export default JobList;