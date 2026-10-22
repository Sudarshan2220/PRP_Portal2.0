import React, { useState } from "react";
import "./Recruiter-registration.css";
import registrationillustration from "../assets/RegistrationAssets/registration-illustration.png" 
import logo1 from "../assets/RegistrationAssets/logo-1.png"
import logo2 from "../assets/RegistrationAssets/logo-2.png"

export default function Registration() {
  const [form, setForm] = useState({
    role: "Company",
    fullName: "",
    email: "",
    mobile: "",
    designation: "",
    companyName: "",
    companyLocation: "",
    website: "",
    industry: "",
    password: "",
    confirmPassword: "",
    agree: false
  });
  const [message, setMessage] = useState("");

  const update = (event) => {
    const { name, value, type, checked } = event.target;
    setForm((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value
    }));
    setMessage("");
  };

  const submitForm = (event) => {
    event.preventDefault();
    if (form.password.length < 8) {
      setMessage("Password must contain at least 8 characters.");
      return;
    }
    if (form.password !== form.confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }
    if (!form.agree) {
      setMessage("Please accept the Terms of service and privacy policy.");
      return;
    }
    setMessage("Registration form validated successfully.");
  };

  return (
    <main className="registration-page">
      <section className="registration-hero">
        <header className="registration-brand">
          <img className="registration-logo" src={logo1} alt="Platform logo" />
          <div>
            <div className="registration-brand-title">AI Education &amp; Workforce Development Platform</div>
            <div className="registration-brand-tagline">Connect • Discover • Succeed</div>
          </div>
        </header>

        <div className="registration-intro">
          <h1>Manage Placements.<br />Create Opportunities.</h1>
          <p>Streamline training, placement activities and recruitment<br className="registration-desktop-break" /> coordination - all in one platform.</p>
        </div>

        <div className="registration-illustration-wrap">
          <img className="registration-illustration" src={registrationillustration} alt="People collaborating around mobile devices" />
        </div>

        <footer className="registration-security">
          <img className="registration-security-icon" src={logo2} alt="" />
          <span className="registration-security-divider" />
          <p><span>Secure Today. Ready for Tomorrow.</span><br />Securely connect students, institutions, and employers on one platform.</p>
        </footer>
      </section>

      <section className="registration-form-side">
        <div className="registration-form-container">
          <h2>Your Journey Starts Here</h2>
          <p className="registration-subtitle">Join our ecosystem of professional employers.</p>

          <form onSubmit={submitForm}>
            <div className="registration-field registration-role-field">
              <label htmlFor="registration-role">Select your role</label>
              <select id="registration-role" name="role" value={form.role} onChange={update}>
                <option>Company</option>
                <option>Student</option>
                <option>Institution</option>
              </select>
            </div>

            <div className="registration-fields-grid">
              <div className="registration-field">
                <label htmlFor="registration-fullName">Full Name</label>
                <input id="registration-fullName" name="fullName" value={form.fullName} onChange={update} placeholder="Enter your full name" required />
              </div>
              <div className="registration-field">
                <label htmlFor="registration-email">Email Address</label>
                <input id="registration-email" name="email" type="email" value={form.email} onChange={update} placeholder="Enter your email address" required />
              </div>
              <div className="registration-field">
                <label htmlFor="registration-mobile">Mobile Number</label>
                <input id="registration-mobile" name="mobile" type="tel" value={form.mobile} onChange={update} placeholder="123567890" pattern="[0-9]{10}" title="Enter a 10-digit mobile number" required />
              </div>
              <div className="registration-field">
                <label htmlFor="registration-designation">Designations / Job Title</label>
                <input id="registration-designation" name="designation" value={form.designation} onChange={update} placeholder="UI/UX Designer" required />
              </div>
              <div className="registration-field">
                <label htmlFor="registration-companyName">Company Name</label>
                <input id="registration-companyName" name="companyName" value={form.companyName} onChange={update} placeholder="Adhway Creation" required />
              </div>
              <div className="registration-field">
                <label htmlFor="registration-companyLocation">Company Location</label>
                <input id="registration-companyLocation" name="companyLocation" value={form.companyLocation} onChange={update} placeholder="Coimbatore" required />
              </div>
              <div className="registration-field">
                <label htmlFor="registration-website">Company Website</label>
                <input id="registration-website" name="website" type="url" value={form.website} onChange={update} placeholder="www.adhway.com" />
              </div>
              <div className="registration-field">
                <label htmlFor="registration-industry">Industry Type</label>
                <input id="registration-industry" name="industry" value={form.industry} onChange={update} placeholder="Designer" required />
              </div>
              <div className="registration-field">
                <label htmlFor="registration-password">Password</label>
                <input id="registration-password" name="password" type="password" value={form.password} onChange={update} placeholder="**********" autoComplete="new-password" required />
              </div>
              <div className="registration-field">
                <label htmlFor="registration-confirmPassword">Confirm Password</label>
                <input id="registration-confirmPassword" name="confirmPassword" type="password" value={form.confirmPassword} onChange={update} placeholder="**********" autoComplete="new-password" required />
              </div>
            </div>

            <label className="registration-agreement">
              <input type="checkbox" name="agree" checked={form.agree} onChange={update} />
              <span>I agree to the <strong>Terms of service</strong> and <strong>privacy policy</strong> regarding my administrative access.</span>
            </label>

            {message && <p className="registration-message" role="status">{message}</p>}
            <button className="registration-submit" type="submit">Complete Registration</button>
          </form>

          <div className="registration-login-prompt">
            <span>Already have an account?</span>
            <a href="/login">Login</a>
          </div>
        </div>
      </section>
    </main>
  );
}
