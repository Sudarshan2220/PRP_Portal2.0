import React from "react";
import "./ChangePassword.css";

import logo from "../assets/Changepassword/logo.png";
import search from "../assets/Changepassword/search.png";
import notification from "../assets/Changepassword/notification.png";
import ai from "../assets/Changepassword/ai.png";
import help from "../assets/Changepassword/help.png";
import profile from "../assets/Changepassword/profile.png";
import dropdown from "../assets/Changepassword/dropdown.png";
import password from "../assets/Changepassword/password.png";

function ChangePassword() {

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Password updated successfully!");
  };

  const handleCancel = () => {
    document.getElementById("changePwd-form").reset();
  };

  return (
    <div className="changePwd-page">

      <header className="changePwd-header">

        <div className="changePwd-brand">

          <img
            src={logo}
            alt="Logo"
            className="changePwd-logo"
          />

          <div className="changePwd-brandText">

            <h3>
              AI Education & Workforce Development Platform
            </h3>

            <p>Connect . Discover . Succeed</p>

          </div>

        </div>

        <div className="changePwd-search">

          <img src={search} alt="Search" />

          <input
            type="text"
            placeholder="Search Keyword, Location,..."
          />

        </div>

        <div className="changePwd-headerIcons">

          <img src={notification} alt="Notification" />

          <img src={ai} alt="AI" />

          <img src={help} alt="Help" />

          <img
            src={profile}
            alt="Profile"
            className="changePwd-profile"
          />

          <img src={dropdown} alt="Dropdown" />

        </div>

      </header>

      <aside className="changePwd-sidebar">

        <button>Dashboard</button>

        <button>Job Search</button>

        <button className="changePwd-dropdownBtn">

          Applications Center

          <img src={dropdown} alt="" />

        </button>

        <button>Interview Schedule</button>

        <button>Assessments Center</button>

        <button>My Offers</button>

        <button>Training Programs</button>

        <button>AI Career Assistant</button>

        <button>Resume Manager</button>

        <button>MY Profile</button>

        <button>Notification Center</button>

        <button>Help Center & FAQ</button>

        <button>Account Settings</button>

      </aside>

      <main className="changePwd-main">

        <div className="changePwd-card">

          <h1>Change Your Password</h1>

          <p className="changePwd-description">
            Keep your account secure by creating a strong and unique password.
          </p>

          <form
            id="changePwd-form"
            onSubmit={handleSubmit}
          >

            <div className="changePwd-field">

              <label>Current Password</label>

              <input
                type="password"
                placeholder="Enter your current Password"
                required
              />

            </div>

            <div className="changePwd-field">

              <label>New Password</label>

              <input
                type="password"
                placeholder="Enter your new Password"
                minLength="8"
                required
              />

            </div>

            <div className="changePwd-field">

              <label>Confirm new Password</label>

              <input
                type="password"
                placeholder="Re-enter your new Password"
                minLength="8"
                required
              />

            </div>

            <div className="changePwd-info">

              <img src={password} alt="Password" />

              <p>
                Your password must be at least 8 characters long and include
                an uppercase letter, a number and a special character.
              </p>

            </div>

            <div className="changePwd-buttons">

              <button
                type="button"
                className="changePwd-cancel"
                onClick={handleCancel}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="changePwd-update"
              >
                Update Password
              </button>

            </div>

          </form>

        </div>

      </main>

    </div>
  );
}

export default ChangePassword;