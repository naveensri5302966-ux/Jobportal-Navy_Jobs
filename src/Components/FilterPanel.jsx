function FilterPanel({
  industry,
  setIndustry,

  salary,
  setSalary,

  experience,
  setExperience,

  jobType,
  setJobType,

  clearFilters
}) {

  return (

    <section className="filter-panel">

      <div className="filter-heading">

        <div>

          <p className="eyebrow">
            REFINE
          </p>

          <h3>
            Filter Jobs
          </h3>

        </div>


        <button
          className="clear-filter-button"
          onClick={clearFilters}
        >
          Clear Filters
        </button>

      </div>


      <div className="filter-controls">


        {/* INDUSTRY */}

        <div className="filter-group">

          <label>
            Industry
          </label>

          <select
            value={industry}
            onChange={(e) =>
              setIndustry(e.target.value)
            }
          >

            <option value="">
              All Industries
            </option>

            <option value="IT">
              IT
            </option>

            <option value="Cyber Security">
              Cyber Security
            </option>

            <option value="Design">
              Design
            </option>

            <option value="Data Science">
              Data Science
            </option>

          </select>

        </div>


        {/* SALARY */}

        <div className="filter-group">

          <label>
            Minimum Salary
          </label>

          <select
            value={salary}
            onChange={(e) =>
              setSalary(e.target.value)
            }
          >

            <option value="">
              Any Salary
            </option>

            <option value="3">
              ₹3 LPA+
            </option>

            <option value="5">
              ₹5 LPA+
            </option>

            <option value="7">
              ₹7 LPA+
            </option>

          </select>

        </div>


        {/* EXPERIENCE */}

        <div className="filter-group">

          <label>
            Experience
          </label>

          <select
            value={experience}
            onChange={(e) =>
              setExperience(e.target.value)
            }
          >

            <option value="">
              All Experience
            </option>

            <option value="Fresher">
              Fresher
            </option>

            <option value="0-2 Years">
              0-2 Years
            </option>

            <option value="1-3 Years">
              1-3 Years
            </option>

            <option value="2-4 Years">
              2-4 Years
            </option>

          </select>

        </div>


        {/* JOB TYPE */}

        <div className="filter-group">

          <label>
            Job Type
          </label>

          <select
            value={jobType}
            onChange={(e) =>
              setJobType(e.target.value)
            }
          >

            <option value="">
              All Job Types
            </option>

            <option value="Full Time">
              Full Time
            </option>

            <option value="Part Time">
              Part Time
            </option>

            <option value="Internship">
              Internship
            </option>

          </select>

        </div>

      </div>

    </section>
  );
}


export default FilterPanel;