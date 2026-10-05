function JobCard({
  job,
  onSave,
  isSaved,
  onViewDetails
}) {

  return (

    <div className="job-card">


      {/* INDUSTRY */}

      <p className="job-industry">
        {job.industry}
      </p>


      {/* TITLE */}

      <h2>
        {job.title}
      </h2>


      {/* COMPANY */}

      <p className="job-company">
        {job.company}
      </p>


      {/* INFORMATION */}

      <div className="job-information">

        <p>
          📍 {job.location}
        </p>

        <p>
          💰 {job.salary}
        </p>

        <p>
          ⏳ {job.experience}
        </p>

      </div>


      {/* BUTTONS */}

      <div className="job-card-buttons">


        <button
          className="details-button"
          onClick={() =>
            onViewDetails(job)
          }
        >
          View Details
        </button>


        <button
          className={
            isSaved
              ? "save-job-button saved"
              : "save-job-button"
          }
          onClick={() =>
            onSave(job)
          }
        >

          {isSaved
            ? "✓ Saved"
            : "♡ Save"}

        </button>


      </div>

    </div>

  );

}


export default JobCard;