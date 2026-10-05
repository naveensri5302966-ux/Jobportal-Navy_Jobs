import { useEffect, useState } from "react";
import "./Profile.css";

function Profile() {

  const [profile, setProfile] = useState(null);

  const [isCreating, setIsCreating] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [skills, setSkills] = useState("");

  const [message, setMessage] = useState("");


  /* =========================================
     LOAD SAVED PROFILE
  ========================================= */

  useEffect(() => {

    const savedProfile =
      localStorage.getItem("eerieJobsProfile");

    if (savedProfile) {

      const data = JSON.parse(savedProfile);

      setProfile(data);

    } else {

      setIsCreating(true);

    }

  }, []);


  /* =========================================
     SAVE NEW PROFILE
  ========================================= */

  function handleSave(e) {

    e.preventDefault();

    const newProfile = {
      name: name,
      email: email,
      skills: skills
    };


    localStorage.setItem(
      "eerieJobsProfile",
      JSON.stringify(newProfile)
    );


    setProfile(newProfile);

    setIsCreating(false);

    setMessage("✓ Profile created successfully!");


    setTimeout(() => {
      setMessage("");
    }, 3000);
  }


  /* =========================================
     LOGOUT
  ========================================= */

  function handleLogout() {

    // Remove saved profile
    localStorage.removeItem("eerieJobsProfile");

    // Clear current profile
    setProfile(null);

    // Clear form
    setName("");
    setEmail("");
    setSkills("");

    // Show create profile form
    setIsCreating(true);

    setMessage("");
  }


  /* =========================================
     EDIT PROFILE
  ========================================= */

  function handleEdit() {

    setName(profile.name || "");
    setEmail(profile.email || "");
    setSkills(profile.skills || "");

    setIsCreating(true);
  }


  /* =========================================
     CREATE PROFILE PAGE
  ========================================= */

  if (isCreating) {

    return (

      <div className="profile-page">

        <div className="profile-header">

          <p className="profile-label">
            CREATE YOUR PROFILE
          </p>

          <h1>
            My Profile
          </h1>

          <p className="profile-description">
            Add your personal information and skills.
          </p>

        </div>


        <form
          className="profile-card"
          onSubmit={handleSave}
        >

          {/* NAME */}

          <div className="profile-input-group">

            <label>
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              required
            />

          </div>


          {/* EMAIL */}

          <div className="profile-input-group">

            <label>
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              required
            />

          </div>


          {/* SKILLS */}

          <div className="profile-input-group profile-full">

            <label>
              Skills
            </label>

            <input
              type="text"
              placeholder="Java, React, Python..."
              value={skills}
              onChange={(e) =>
                setSkills(e.target.value)
              }
            />

            <small>
              Add your technical skills separated by commas.
            </small>

          </div>


          {/* BUTTONS */}

          <div className="profile-bottom">

            {message && (

              <span className="profile-saved-message">
                {message}
              </span>

            )}


            <button
              type="submit"
              className="profile-save-button"
            >
              Save Profile
            </button>

          </div>

        </form>

      </div>

    );
  }


  /* =========================================
     SAVED PROFILE PAGE
  ========================================= */

  return (

    <div className="profile-page">

      <div className="profile-header">

        <p className="profile-label">
          YOUR INFORMATION
        </p>

        <h1>
          My Profile
        </h1>

        <p className="profile-description">
          Your saved profile information.
        </p>

      </div>


      {/* PROFILE DISPLAY */}

      <div className="saved-profile-card">


        {/* AVATAR */}

        <div className="saved-profile-avatar">

          {profile?.name
            ? profile.name.charAt(0).toUpperCase()
            : "?"}

        </div>


        {/* INFORMATION */}

        <div className="saved-profile-info">

          <p className="saved-profile-label">
            PROFILE
          </p>

          <h2>
            {profile?.name}
          </h2>

          <p className="saved-profile-email">
            {profile?.email}
          </p>


          {/* SKILLS */}

          <div className="saved-profile-skills">

            <span className="skills-title">
              Skills
            </span>


            <div className="skill-list">

              {profile?.skills ? (

                profile.skills
                  .split(",")
                  .map((skill, index) => (

                    <span key={index}>
                      {skill.trim()}
                    </span>

                  ))

              ) : (

                <span>
                  No skills added
                </span>

              )}

            </div>

          </div>


          {/* ACTIONS */}

          <div className="saved-profile-actions">

            <button
              className="profile-edit-button"
              onClick={handleEdit}
            >
              Edit Profile
            </button>


            <button
              className="profile-logout-button"
              onClick={handleLogout}
            >
              Logout
            </button>

          </div>

        </div>

      </div>

    </div>

  );
}

export default Profile;