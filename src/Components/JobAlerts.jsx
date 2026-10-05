import { useState } from "react";

function JobAlerts({ onAlertSave }) {
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [frequency, setFrequency] = useState("Daily");
  const [enabled, setEnabled] = useState(false);
  const [saved, setSaved] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    const alertData = {
      email,
      category,
      location,
      frequency,
      enabled
    };

    localStorage.setItem("jobAlert", JSON.stringify(alertData));

    if (onAlertSave) {
      onAlertSave(alertData);
    }

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 3000);
  }

  return (
    <section className="job-alerts-page">
      <div className="alerts-heading">
        <p className="eyebrow">STAY UPDATED</p>
        <h1>Job Alerts</h1>
        <p>
          Get notified when new jobs matching your preferences become available.
        </p>
      </div>

      <form className="job-alert-form" onSubmit={handleSubmit}>
        <div className="alert-field">
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="alert-field">
          <label>Job Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Any Job</option>
            <option value="IT">IT</option>
            <option value="Cyber Security">Cyber Security</option>
            <option value="Design">Design</option>
            <option value="Data Science">Data Science</option>
          </select>
        </div>

        <div className="alert-field">
          <label>Location</label>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="">Any Location</option>
            <option value="Coimbatore">Coimbatore</option>
            <option value="Chennai">Chennai</option>
            <option value="Bangalore">Bangalore</option>
          </select>
        </div>

        <div className="alert-field">
          <label>Alert Frequency</label>
          <select
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
          >
            <option value="Daily">Daily</option>
            <option value="Weekly">Weekly</option>
          </select>
        </div>

        <label className="alert-enable">
          <input
            type="checkbox"
            checked={enabled}
            onChange={(e) => setEnabled(e.target.checked)}
          />
          <span>Enable Job Alerts</span>
        </label>

        <div className="alert-actions">
          {saved && <span className="alert-success">✓ Alert saved</span>}

          <button type="submit" className="save-alert-button">
            Save Alert
          </button>
        </div>
      </form>
    </section>
  );
}

export default JobAlerts;