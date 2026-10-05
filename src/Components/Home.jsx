function Home({ setPage }) {

  return (

    <section className="home-page">

      <div className="home-content">

        <p className="eyebrow">
          THE DARK SIDE OF CAREER SEARCH
        </p>


        <h1>
          Find Work That
          <span>
            Finds You.
          </span>
        </h1>


        <p className="home-description">
          Discover opportunities, save the ones
          that interest you, and apply for your
          next opportunity.
        </p>


        <div className="home-buttons">

          <button
            className="home-primary-button"
            onClick={() =>
              setPage("jobs")
            }
          >
            Explore Jobs →
          </button>


          <button
            className="home-secondary-button"
            onClick={() =>
              setPage("alerts")
            }
          >
            Create Job Alert
          </button>

        </div>


        <div className="home-stats">

          <div>
            <strong>6+</strong>
            <span>Jobs</span>
          </div>

          <div>
            <strong>4</strong>
            <span>Industries</span>
          </div>

          <div>
            <strong>3</strong>
            <span>Cities</span>
          </div>

        </div>

      </div>

    </section>
  );
}


export default Home;