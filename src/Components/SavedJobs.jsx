function SavedJobs({
  savedJobs,
  onRemove,
  onViewDetails,
  onApply
}) {

  return (

    <section className="saved-page">

      <div className="page-heading">

        <p className="eyebrow">
          YOUR COLLECTION
        </p>

        <h1>
          Saved Jobs
        </h1>

        <p>
          Jobs you've saved for later.
        </p>

      </div>


      {savedJobs.length === 0 ? (

        <div className="no-results">

          <div className="no-results-icon">
            ♡
          </div>

          <h2>
            No saved jobs
          </h2>

          <p>
            Save interesting jobs and they will appear here.
          </p>

        </div>

      ) : (

        <div className="saved-job-list">

          {savedJobs.map((job) => (

            <article
              className="saved-job-card"
              key={job.id}
            >

              <div className="saved-job-info">

                <span className="job-industry">
                  {job.industry}
                </span>

                <h2>
                  {job.title}
                </h2>

                <div className="saved-meta">

                  <span>
                    {job.company}
                  </span>

                  <span>
                    📍 {job.location}
                  </span>

                  <span>
                    💰 {job.salary}
                  </span>

                </div>

              </div>


              <div className="saved-job-actions">

                <button
                  className="details-button"
                  onClick={() =>
                    onViewDetails(job)
                  }
                >
                  Details
                </button>


                <button
                  className="apply-button"
                  onClick={() =>
                    onApply(job)
                  }
                >
                  Apply
                </button>


                <button
                  className="remove-button"
                  onClick={() =>
                    onRemove(job.id)
                  }
                >
                  Remove
                </button>

              </div>

            </article>

          ))}

        </div>

      )}

    </section>
  );
}


export default SavedJobs;