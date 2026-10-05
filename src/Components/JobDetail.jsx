function JobDetail({
  job,
  onClose,
  onApply
}) {

  if (!job) {
    return null;
  }


  return (

    <section className="job-detail">

      <div className="detail-header">

        <div>

          <p className="detail-label">
            JOB DETAILS
          </p>

          <h2>
            {job.title}
          </h2>

          <p className="detail-company">
            {job.company}
          </p>

        </div>


        <button
          className="detail-close-icon"
          onClick={onClose}
        >
          ×
        </button>

      </div>


      <div className="job-detail-info">

        <div>
          <span>LOCATION</span>
          <strong>{job.location}</strong>
        </div>

        <div>
          <span>SALARY</span>
          <strong>{job.salary}</strong>
        </div>

        <div>
          <span>EXPERIENCE</span>
          <strong>{job.experience}</strong>
        </div>

        <div>
          <span>JOB TYPE</span>
          <strong>{job.jobType}</strong>
        </div>

      </div>


      <div className="detail-section">

        <h3>
          About the Role
        </h3>

        <p>
          {job.description}
        </p>

      </div>


      <div className="detail-buttons">

        <button
          className="apply-button"
          onClick={() =>
            onApply(job)
          }
        >
          Apply Now →
        </button>


        <button
          className="close-button"
          onClick={onClose}
        >
          Close
        </button>

      </div>

    </section>
  );
}


export default JobDetail;