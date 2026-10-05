import { useState } from "react";

function ApplicationForm({ job, onBack, onSubmit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [resume, setResume] = useState("");
  const [coverLetter, setCoverLetter] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const applicationData = {
      applicantName: name,
      email: email,
      phone: phone,
      resume: resume,
      coverLetter: coverLetter,
      jobTitle: job?.title || "",
      company: job?.company || "",
    };

    if (onSubmit) {
      onSubmit(applicationData);
    }
  }

  return (
    <section className="application-page">

      <div className="application-top">

        <button
          type="button"
          className="application-back-top"
          onClick={onBack}
        >
          ← Back
        </button>

        <p className="application-eyebrow">
          JOB APPLICATION
        </p>

        <h1>
          Apply for {job?.title || "this Job"}
        </h1>

        <p className="application-company">
          {job?.company}
        </p>

      </div>

      <form
        className="application-form"
        onSubmit={handleSubmit}
      >

        <div className="application-field">
          <label>Full Name</label>

          <input
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="application-field">
          <label>Email Address</label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="application-field">
          <label>Phone Number</label>

          <input
            type="tel"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <div className="application-field">
          <label>Resume</label>

          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(e) =>
              setResume(e.target.files[0]?.name || "")
            }
            required
          />
        </div>

        <div className="application-field">
          <label>Cover Letter</label>

          <textarea
            placeholder="Write your cover letter..."
            value={coverLetter}
            onChange={(e) => setCoverLetter(e.target.value)}
            required
          />
        </div>

        <div className="application-buttons">

          <button
            type="button"
            className="application-cancel"
            onClick={onBack}
          >
            Cancel
          </button>

          <button
            type="submit"
            className="application-submit"
          >
            Submit Application
          </button>

        </div>

      </form>

    </section>
  );
}

export default ApplicationForm;