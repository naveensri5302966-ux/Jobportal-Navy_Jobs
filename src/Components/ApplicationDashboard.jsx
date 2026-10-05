function ApplicationDashboard({
  applications = [],
  savedJobs = [],
  jobAlert = null,
  onUpdateStatus,
  setPage,
}) {
  const savedJobObjects = savedJobs;

  function handleStatusChange(id, newStatus) {
    if (onUpdateStatus) {
      onUpdateStatus(id, newStatus);
    }
  }

  return (
    <section className="application-dashboard">
      <div className="page-heading">
        <p className="eyebrow">APPLICATION TRACKING</p>
        <h1>Application Dashboard</h1>
        <p>
          Track your applications, saved jobs, interview schedules and alerts.
        </p>
      </div>

      <div className="dashboard-summary">
        <div className="dashboard-summary-card">
          <span>Applied Jobs</span>
          <strong>{applications.length}</strong>
        </div>
        <div className="dashboard-summary-card">
          <span>Saved Jobs</span>
          <strong>{savedJobObjects.length}</strong>
        </div>
        <div className="dashboard-summary-card">
          <span>Interviews</span>
          <strong>
            {applications.filter(
              (application) => application.status === "Interview"
            ).length}
          </strong>
        </div>
        <div className="dashboard-summary-card">
          <span>Selected</span>
          <strong>
            {applications.filter(
              (application) => application.status === "Selected"
            ).length}
          </strong>
        </div>
      </div>

      <div className="dashboard-section">
        <div className="dashboard-section-heading">
          <div>
            <p className="eyebrow">MY APPLICATIONS</p>
            <h2>Application Status</h2>
          </div>
        </div>

        {applications.length === 0 ? (
          <div className="dashboard-empty">
            <h3>No applications yet</h3>
            <p>
              Apply for a job and your application will appear here.
            </p>
            <button
              className="dashboard-primary-button"
              onClick={() => setPage("jobs")}
            >
              Browse Jobs
            </button>
          </div>
        ) : (
          <div className="application-tracking-list">
            {applications.map((application) => (
              <div
                className="application-tracking-card"
                key={application.id}
              >
                <div className="tracking-job-info">
                  <h3>{application.jobTitle}</h3>
                  <p>{application.company}</p>

                  <span className="tracking-label">
                    Applied by: {application.applicantName}
                  </span>

                  {application.resume && (
                    <span className="tracking-label">
                      Resume: {application.resume}
                    </span>
                  )}
                </div>

                <div className="tracking-status">
                  <label>Status</label>

                  <select
                    value={application.status}
                    onChange={(e) =>
                      handleStatusChange(
                        application.id,
                        e.target.value
                      )
                    }
                  >
                    <option value="Applied">Applied</option>
                    <option value="Under Review">
                      Under Review
                    </option>
                    <option value="Interview">Interview</option>
                    <option value="Selected">Selected</option>
                    <option value="Rejected">Rejected</option>
                  </select>

                  <span
                    className={`status-badge status-${application.status
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    {application.status}
                  </span>
                </div>

                {application.interviewDate && (
                  <div className="tracking-interview">
                    <strong>Interview</strong>
                    <span>{application.interviewDate}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="dashboard-section">
        <div className="dashboard-section-heading">
          <div>
            <p className="eyebrow">SAVED JOBS</p>
            <h2>My Saved Jobs</h2>
          </div>
        </div>

        {savedJobObjects.length === 0 ? (
          <div className="dashboard-empty">
            <h3>No saved jobs</h3>
            <p>
              Save jobs that you want to apply for later.
            </p>
            <button
              className="dashboard-primary-button"
              onClick={() => setPage("jobs")}
            >
              Find Jobs
            </button>
          </div>
        ) : (
          <div className="dashboard-saved-list">
            {savedJobObjects.map((job) => (
              <div
                className="dashboard-saved-job"
                key={job.id}
              >
                <div>
                  <h3>{job.title}</h3>
                  <p>{job.company}</p>
                </div>

                <button
                  className="dashboard-link-button"
                  onClick={() => setPage("jobs")}
                >
                  View Jobs →
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="dashboard-section">
        <div className="dashboard-section-heading">
          <div>
            <p className="eyebrow">JOB ALERTS</p>
            <h2>Alert Notifications</h2>
          </div>
        </div>

        {!jobAlert ? (
          <div className="dashboard-empty">
            <h3>No job alerts configured</h3>
            <p>
              Create a job alert to receive notifications
              based on your preferences.
            </p>
            <button
              className="dashboard-primary-button"
              onClick={() => setPage("alerts")}
            >
              Create Job Alert
            </button>
          </div>
        ) : (
          <div className="dashboard-alert-card">
            <h3>
              {jobAlert.enabled
                ? "Job Alert Enabled"
                : "Job Alert Disabled"}
            </h3>

            <p>Email: {jobAlert.email}</p>
            <p>
              Category: {jobAlert.category || "Any Job"}
            </p>
            <p>
              Location: {jobAlert.location || "Any Location"}
            </p>
            <p>Frequency: {jobAlert.frequency}</p>

            <span className="status-badge">
              {jobAlert.enabled ? "Active" : "Inactive"}
            </span>
          </div>
        )}
      </div>
    </section>
  );
}

export default ApplicationDashboard;