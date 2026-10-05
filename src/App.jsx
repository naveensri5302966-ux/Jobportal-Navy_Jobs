import { useState } from "react";
import ApplicationDashboard from "./Components/ApplicationDashboard";
import Header from "./components/Header";
import Home from "./components/Home";
import SearchBar from "./components/SearchBar";
import FilterPanel from "./components/FilterPanel";
import JobList from "./components/JobList";
import JobDetail from "./components/JobDetail";
import ApplicationForm from "./components/ApplicationForm";
import SavedJobs from "./components/SavedJobs";
import JobAlerts from "./components/JobAlerts";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import "./App.css";

const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Tech Solutions",
    location: "Coimbatore",
    salary: "₹5 - 8 LPA",
    minSalary: 5,
    industry: "IT",
    experience: "0-2 Years",
    jobType: "Full Time",
    description:
      "Build modern and responsive web applications using React and JavaScript.",
  },
  {
    id: 2,
    title: "Cyber Security Analyst",
    company: "SecureNet",
    location: "Chennai",
    salary: "₹6 - 10 LPA",
    minSalary: 6,
    industry: "Cyber Security",
    experience: "1-3 Years",
    jobType: "Full Time",
    description:
      "Monitor security systems, investigate threats and protect company infrastructure.",
  },
  {
    id: 3,
    title: "Python Developer",
    company: "CodeWorks",
    location: "Bangalore",
    salary: "₹7 - 12 LPA",
    minSalary: 7,
    industry: "IT",
    experience: "2-4 Years",
    jobType: "Full Time",
    description:
      "Develop scalable applications and backend services using Python.",
  },
  {
    id: 4,
    title: "UI/UX Designer",
    company: "Creative Labs",
    location: "Chennai",
    salary: "₹4 - 7 LPA",
    minSalary: 4,
    industry: "Design",
    experience: "0-2 Years",
    jobType: "Part Time",
    description:
      "Design clean and intuitive interfaces for web and mobile applications.",
  },
  {
    id: 5,
    title: "Data Analyst",
    company: "DataWorks",
    location: "Coimbatore",
    salary: "₹6 - 9 LPA",
    minSalary: 6,
    industry: "Data Science",
    experience: "1-3 Years",
    jobType: "Full Time",
    description:
      "Analyze business data and create meaningful reports and dashboards.",
  },
  {
    id: 6,
    title: "React Intern",
    company: "Startup Hub",
    location: "Bangalore",
    salary: "₹2 - 4 LPA",
    minSalary: 2,
    industry: "IT",
    experience: "Fresher",
    jobType: "Internship",
    description:
      "Learn React development and work with an experienced frontend team.",
  },
];

function App() {
  const [page, setPage] = useState("home");
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [industry, setIndustry] = useState("");
  const [salary, setSalary] = useState("");
  const [experience, setExperience] = useState("");
  const [jobType, setJobType] = useState("");
  const [savedJobs, setSavedJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [applicationJob, setApplicationJob] = useState(null);
  const [applications, setApplications] = useState([]);
  const [jobAlert, setJobAlert] = useState(null);

  function handleApplicationSubmit(applicationData) {
    const newApplication = {
      id: Date.now(),
      ...applicationData,
      status: "Applied",
      interviewDate: null,
    };

    setApplications((prev) => [...prev, newApplication]);
    setApplicationJob(null);
    setPage("dashboard");
    window.scrollTo(0, 0);
  }

  function updateApplicationStatus(id, newStatus) {
    setApplications((prev) =>
      prev.map((application) =>
        application.id === id
          ? {
              ...application,
              status: newStatus,
            }
          : application
      )
    );
  }

  function handleAlertSave(alertData) {
    setJobAlert(alertData);
  }

  const filteredJobs = jobs.filter((job) => {
    const searchText = keyword.toLowerCase();

    const matchesKeyword =
      job.title.toLowerCase().includes(searchText) ||
      job.company.toLowerCase().includes(searchText) ||
      job.location.toLowerCase().includes(searchText);

    const matchesLocation =
      location === "" || job.location === location;

    const matchesIndustry =
      industry === "" || job.industry === industry;

    const matchesSalary =
      salary === "" || job.minSalary >= Number(salary);

    const matchesExperience =
      experience === "" || job.experience === experience;

    const matchesJobType =
      jobType === "" || job.jobType === jobType;

    return (
      matchesKeyword &&
      matchesLocation &&
      matchesIndustry &&
      matchesSalary &&
      matchesExperience &&
      matchesJobType
    );
  });

  function saveJob(job) {
    const alreadySaved = savedJobs.some(
      (item) => item.id === job.id
    );

    if (alreadySaved) {
      setSavedJobs((prev) =>
        prev.filter((item) => item.id !== job.id)
      );
    } else {
      setSavedJobs((prev) => [...prev, job]);
    }
  }

  function viewDetails(job) {
    setSelectedJob(job);
    window.scrollTo(0, 0);
  }

  function applyJob(job) {
    setApplicationJob(job);
    setSelectedJob(null);
    setPage("apply");
    window.scrollTo(0, 0);
  }

  function closeDetails() {
    setSelectedJob(null);
  }

  function removeSavedJob(id) {
    setSavedJobs((prev) =>
      prev.filter((job) => job.id !== id)
    );
  }

  function clearFilters() {
    setKeyword("");
    setLocation("");
    setIndustry("");
    setSalary("");
    setExperience("");
    setJobType("");
  }

  function changePage(newPage) {
    setPage(newPage);
    setSelectedJob(null);
    window.scrollTo(0, 0);
  }

  return (
    <div className="app">
      <Header
        setPage={changePage}
        currentPage={page}
      />

      <main>
        {page === "home" && (
          <Home setPage={changePage} />
        )}

        {page === "jobs" && (
          <>
            <div className="page-heading">
              <p className="eyebrow">OPPORTUNITIES</p>
              <h1>Find Your Next Job</h1>
              <p>
                Search through available opportunities
                and find the one that fits you.
              </p>
            </div>

            <SearchBar
              keyword={keyword}
              setKeyword={setKeyword}
              location={location}
              setLocation={setLocation}
            />

            <FilterPanel
              industry={industry}
              setIndustry={setIndustry}
              salary={salary}
              setSalary={setSalary}
              experience={experience}
              setExperience={setExperience}
              jobType={jobType}
              setJobType={setJobType}
              clearFilters={clearFilters}
            />

            <div className="result-count">
              {filteredJobs.length} job
              {filteredJobs.length !== 1 ? "s" : ""}
              {" "}found
            </div>

            <JobDetail
              job={selectedJob}
              onClose={closeDetails}
              onApply={applyJob}
            />

            <JobList
              jobs={filteredJobs}
              savedJobs={savedJobs}
              onSave={saveJob}
              onViewDetails={viewDetails}
            />
          </>
        )}

        {page === "saved" && (
          <SavedJobs
            savedJobs={savedJobs}
            onRemove={removeSavedJob}
            onViewDetails={viewDetails}
            onApply={applyJob}
          />
        )}

        {page === "apply" && applicationJob && (
          <ApplicationForm
            job={applicationJob}
            onBack={() => changePage("jobs")}
            onSubmit={handleApplicationSubmit}
          />
        )}

        {page === "dashboard" && (
          <ApplicationDashboard
            applications={applications}
            savedJobs={savedJobs}
            jobAlert={jobAlert}
            onUpdateStatus={updateApplicationStatus}
            setPage={changePage}
          />
        )}

        {page === "alerts" && (
          <JobAlerts onAlertSave={handleAlertSave} />
        )}

        {page === "profile" && (
          <Profile />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;