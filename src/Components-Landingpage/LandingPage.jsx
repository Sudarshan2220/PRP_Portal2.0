import React from "react";
import "./LandingPage.css";
import logo from "../assets/Landingpage/logo.png";
import heroillustration from "../assets/Landingpage/hero-illustration.png";
import useravatar from "../assets/Landingpage/user-avatar.png";
import successStar from "../assets/Landingpage/successStars.png";
import featurejobs from "../assets/Landingpage/feature-jobs.png";
import featureai from "../assets/Landingpage/feature-ai.png";
import featuretraining from "../assets/Landingpage/feature-training.png";
import featureanalytics from "../assets/Landingpage/feature-analytics.png";
import featureusers from "../assets/Landingpage/feature-users.png";
import facebook from "../assets/Landingpage/facebook.png";
import x from "../assets/Landingpage/x.png"
import instagram from "../assets/Landingpage/instagram.png"
import grok from "../assets/Landingpage/grok.png";
import wipro from "../assets/Landingpage/Wipro.png";
import qwen from "../assets/Landingpage/qwen.png";
import deepseek from "../assets/Landingpage/deepseek.png";
import infosys from "../assets/Landingpage/infosys.png";
import claude from "../assets/Landingpage/claude.png";
import openai from "../assets/Landingpage/openai.png";

const features = [
  { icon: featurejobs, title: "Wide Job Opportunities", text: "Access to thousands of\njob opening from top\ncompanies" },
  { icon: featureai, title: "AI Resume Matching", text: "Get matched with the\nright jobs using\nAI technology" },
  { icon: featuretraining, title: "Training & Skill Readiness", text: "Build in-demand skills\nwith industry-relevant\ntraining programs." },
  { icon: featureanalytics, title: "Placement Analytics", text: "Track performance and\nmake date-driven\ndecisions" },
  { icon: featureusers, title: "For Every User", text: "Tailored benefits for\njob seekers, recruiters\nand training institutions" },
];

const stories = [
  { name: "Sarah Chen", role: "Product Designer @ Aura Systems", quote: '“ConnectHire transformed my job search. The AI matching felt intuitive, and within two weeks, I was interviewed and hired by my dream company in fintech. The process was seamless.”' },
  { name: "Jhon Francis", role: "Recruitment Manager @ Vertex Solutions", quote: '“The community gave me the confidence to showcase my work and connect with amazing people. I got my first full-time offer within 6 months. The support and guidance here are unmatched.”' },
  { name: "David Miller", role: "Talent Director @ Zenith Capital", quote: '“The quality of candidates on ConnectHire is unmatched. We reduced our time-to-hire by 40% and have found some of our most productive team members through their automated screening.”' },
];

const companies = [ grok, wipro, qwen, deepseek, infosys, claude, openai];

export default function LandingPage() {
  return (
    <main className="prp-page">
      <header className="prp-header">
        <a className="prp-brand" href="#home">
          <span className="prp-brand-mark"><img src={logo} alt="Platform logo" /></span>
          <span>Placement &amp;<br />Recruitment Platform</span>
        </a>
        <nav className="prp-nav" aria-label="Main navigation">
          <a className="active" href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#recruiters">For Recruiters/Employers</a>
          <a href="#training">For Training Institutions</a>
          <a href="#stories">Success Stories</a>
        </nav>
        <div className="prp-auth"><button className="prp-login">Login</button><button className="prp-register">Register</button></div>
      </header>

      <section className="prp-hero" id="home">
        <div className="prp-hero-copy">
          <p className="prp-eyebrow">BUILD YOUR FUTURE</p>
          <h1>Connect. Learn.<br />Get Placed.</h1>
          <p className="prp-hero-description">The all-in-one platform that bridges the gap between<br className="desktop-break" /> talented individuals, top employers and training institutions.</p>
          <div className="prp-hero-actions"><button className="prp-primary">Get Started</button><button className="prp-secondary">Explore Jobs</button></div>
        </div>
        <div className="prp-hero-art"><img src={heroillustration} alt="Career and recruitment illustration" /></div>
      </section>

      <section className="prp-features" id="features">
        <p className="prp-section-eyebrow">WHY CHOOSE US</p>
        <h2>Everything You Need for a Successful Career</h2>
        <div className="prp-feature-grid">
          {features.map((feature) => <article className="prp-feature-card" key={feature.title}>
            <div className="prp-feature-icon"><img src={feature.icon} alt={feature.title} /></div>
            <h3>{feature.title}</h3><p>{feature.text}</p>
          </article>)}
        </div>
      </section>

      <section className="prp-stories" id="stories">
        <p className="prp-section-eyebrow">SUCCESS STORIES</p>
        <h2>WHAT OUR USERS SAY</h2>
        <div className="prp-story-grid">
          {stories.map((story) => <article className="prp-story-card" key={story.name}>
            <div className="prp-story-top">
              <div className="prp-avatar"><img src={useravatar} alt="User avatar" /></div>
              <div className="prp-person"><img src={successStar} alt="Five-star rating" className="prp-stars-image" /><h3>{story.name}</h3><p>{story.role}</p></div>
            </div>
            <p className="prp-quote">{story.quote}</p>
          </article>)}
        </div>
      </section>

      <section className="prp-trusted" aria-label="Trusted companies">
        <p>TRUSTED BY LEADING COMPANIES</p><h2>TOP COMPANIES HIRE HERE</h2>
        <div className="prp-company-logos">{companies.map((company, index) =>( <img key={index} src={company} alt="Company logo" />))}</div>
      </section>

      <footer className="prp-footer">
        <div className="prp-footer-columns">
          <div><h3>COMPANY</h3><a href="#about">About Us</a><a href="#careers">Careers</a><a href="#contact">contact</a></div>
          <div><h3>PLATFORM</h3><a href="#jobs">Job Postings</a><a href="#ai">AI Resume Matching</a><a href="#training">Training &amp; skill Readiness</a><a href="#analytics">Placement Analytics</a></div>
          <div><h3>SUPPORT</h3><a href="#help">Help Center</a><a href="#faq">FAQ</a><a href="#issue">Raise Issue</a><a href="#support">Contact Support</a></div>
          <div><h3>LEGAL</h3><a href="#privacy">Privacy Policy</a><a href="#terms">Terms &amp; Conditions</a><a href="#cookies">Cookie Policy</a></div>
        </div>
        <div className="prp-footer-bottom"><p>© 2026 Placement and Recruitment Platform.</p><div className="prp-socials"><img src={facebook} alt="Facebook" /><img src={x} alt="X" /><img src={instagram} alt="Instagram" /></div></div>
      </footer>
    </main>
  );
}
