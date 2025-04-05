import React, { useState, useEffect } from "react";

const JazzCampaignWebsite = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle smooth scrolling
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (sectionId === "#") return;

    const element = document.querySelector(sectionId);
    if (!element) return;

    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <div className="jazz-campaign">
      <style jsx>{`
        /* Base styles */
        :root {
          --primary: #0353a4;
          --secondary: #00b760;
          --dark: #0d1b2a;
          --light: #f5f5f5;
          --accent: #ff5a5f;
          --gray: #eef2f5;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
            Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        }

        html {
          scroll-behavior: smooth;
          font-size: 16px;
        }

        body {
          background-color: var(--light);
          color: var(--dark);
          line-height: 1.6;
          overflow-x: hidden;
          width: 100%;
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        img {
          max-width: 100%;
          height: auto;
          display: block;
        }

        .container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
        }

        section {
          padding: 60px 0;
          width: 100%;
        }

        /* Typography */
        h1,
        h2,
        h3,
        h4 {
          font-weight: 700;
          line-height: 1.2;
        }

        h1 {
          font-size: 4rem;
          margin-bottom: 20px;
        }

        h2 {
          font-size: 2.2rem;
          margin-bottom: 25px;
          position: relative;
          display: inline-block;
        }

        h3 {
          font-size: 1.5rem;
          margin-bottom: 10px;
        }

        p {
          margin-bottom: 15px;
        }

        /* Header */
        header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          transition: all 0.3s ease;
          padding: 15px 0;
          background-color: transparent;
        }

        header.scrolled {
          background-color: white;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
        }

        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-weight: 800;
          font-size: 1.5rem;
          color: white;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        header.scrolled .logo {
          color: var(--primary);
        }

        .nav-menu {
          display: flex;
          list-style: none;
        }

        .nav-item {
          margin-left: 30px;
        }

        .nav-link {
          color: white;
          font-weight: 600;
          font-size: 1rem;
          transition: all 0.3s ease;
          position: relative;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        header.scrolled .nav-link {
          color: var(--dark);
        }

        .nav-link:after {
          content: "";
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background-color: var(--secondary);
          transition: width 0.3s ease;
        }

        .nav-link:hover:after {
          width: 100%;
        }

        /* Hamburger Menu */
        .hamburger {
          display: none;
          cursor: pointer;
          z-index: 1001;
        }

        .bar {
          display: block;
          width: 25px;
          height: 3px;
          margin: 5px auto;
          transition: all 0.3s ease;
          background-color: white;
        }

        header.scrolled .bar {
          background-color: var(--dark);
        }

        /* Hero Section */
        .hero {
          height: 100vh;
          min-height: 500px;
          background: linear-gradient(
            to bottom,
            rgba(3, 83, 164, 1),
            rgba(0, 183, 96, 1)
          );
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        .hero:before {
          content: "";
          position: absolute;
          right: -150px;
          bottom: -150px;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.1);
        }

        .hero:after {
          content: "";
          position: absolute;
          left: -100px;
          top: -100px;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.1);
        }

        .hero-content {
          color: white;
          position: relative;
          z-index: 1;
          max-width: 800px;
          text-align: center;
          margin: 0 auto;
        }

        .hero-title {
          font-size: 5rem;
          line-height: 1.1;
          margin-bottom: 20px;
          text-transform: uppercase;
        }

        .hero-tagline {
          font-size: 1.5rem;
          opacity: 0.9;
          max-width: 600px;
          margin: 0 auto;
        }

        /* Section styles */
        .section-title {
          text-align: center;
          margin-bottom: 40px;
        }

        .section-title h2 {
          color: var(--primary);
        }

        .section-title h2:after {
          content: "";
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 50px;
          height: 4px;
          background: var(--secondary);
          border-radius: 2px;
        }

        /* Cards */
        .cards-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
        }

        .card {
          background-color: white;
          border-radius: 10px;
          padding: 25px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }

        .card-icon {
          font-size: 1.8rem;
          color: var(--primary);
          margin-bottom: 10px;
          display: inline-block;
        }

        .card-title {
          font-size: 1.3rem;
          margin-bottom: 10px;
          color: var(--primary);
        }

        /* Timeline */
        .timeline-section {
          background-color: var(--gray);
          position: relative;
          overflow: hidden;
        }

        .timeline {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px 50px;
          padding: 20px 0;
        }

        .timeline:before {
          content: "";
          position: absolute;
          top: 0;
          left: 50%;
          width: 3px;
          height: 100%;
          background: var(--primary);
          transform: translateX(-50%);
          z-index: 1;
        }

        .timeline-item {
          background-color: white;
          border-radius: 10px;
          padding: 25px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          position: relative;
          z-index: 2;
        }

        .timeline-item:hover {
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }

        .timeline-item:before {
          content: "";
          position: absolute;
          top: 30px;
          width: 20px;
          height: 3px;
          background: var(--primary);
        }

        .timeline-item:nth-child(odd):before {
          right: -35px;
        }

        .timeline-item:nth-child(even):before {
          left: -35px;
        }

        .timeline-item:after {
          content: "";
          position: absolute;
          top: 25px;
          width: 13px;
          height: 13px;
          border-radius: 50%;
          background: white;
          border: 3px solid var(--primary);
          z-index: 3;
        }

        .timeline-item:nth-child(odd):after {
          right: -42px;
        }

        .timeline-item:nth-child(even):after {
          left: -42px;
        }

        .timeline-item h3 {
          color: var(--primary);
          margin-bottom: 10px;
        }

        /* Profile Card */
        .profile-section {
          text-align: center;
        }

        .profile-card {
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          border-radius: 15px;
          padding: 40px;
          color: white;
          box-shadow: 0 15px 30px rgba(3, 83, 164, 0.2);
          max-width: 400px;
          margin: 0 auto;
          position: relative;
          overflow: hidden;
        }

        .profile-card:before {
          content: "";
          position: absolute;
          top: -50px;
          left: -50px;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.1);
        }

        .profile-card:after {
          content: "";
          position: absolute;
          bottom: -50px;
          right: -50px;
          width: 150px;
          height: 150px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.1);
        }

        .profile-img {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          border: 4px solid white;
          margin: 0 auto 20px;
          position: relative;
          z-index: 1;
          object-fit: cover;
        }

        .profile-name {
          font-size: 2rem;
          margin-bottom: 10px;
          position: relative;
          z-index: 1;
        }

        .profile-position {
          font-size: 1.2rem;
          opacity: 0.9;
          position: relative;
          z-index: 1;
        }

        /* CTA Section */
        .cta-section {
          background: linear-gradient(
            to right,
            var(--primary),
            var(--secondary)
          );
          color: white;
          text-align: center;
          padding: 60px 0;
          position: relative;
          overflow: hidden;
        }

        .cta-section:before {
          content: "";
          position: absolute;
          width: 200px;
          height: 200px;
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          top: -100px;
          left: -100px;
        }

        .cta-section:after {
          content: "";
          position: absolute;
          width: 150px;
          height: 150px;
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          bottom: -75px;
          right: -75px;
        }

        .cta-content {
          position: relative;
          z-index: 1;
          max-width: 700px;
          margin: 0 auto;
        }

        .cta-title {
          font-size: 2.5rem;
          margin-bottom: 15px;
        }

        .cta-text {
          font-size: 1.2rem;
          margin-bottom: 0;
          opacity: 0.9;
        }

        /* Footer */
        footer {
          background-color: white;
          padding: 30px 0;
          text-align: center;
        }

        .footer-text {
          color: #666;
          font-size: 0.9rem;
        }

        /* Responsive Styles */
        @media (max-width: 1200px) {
          .container {
            padding: 0 30px;
          }
        }

        @media (max-width: 992px) {
          html {
            font-size: 15px;
          }

          h1 {
            font-size: 3.5rem;
          }

          .hero-title {
            font-size: 3.5rem;
          }

          .hero {
            min-height: 450px;
          }

          .cards-container {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          }

          .timeline {
            grid-template-columns: 1fr;
            max-width: 500px;
          }

          .timeline:before {
            left: 25px;
          }

          .timeline-item {
            width: calc(100% - 50px);
            margin-left: 50px;
          }

          .timeline-item:before {
            left: -35px !important;
            right: auto !important;
          }

          .timeline-item:after {
            left: -42px !important;
            right: auto !important;
          }
        }

        @media (max-width: 768px) {
          html {
            font-size: 14px;
          }

          section {
            padding: 40px 0;
          }

          h1 {
            font-size: 3rem;
          }

          h2 {
            font-size: 2rem;
          }

          .hamburger {
            display: block;
          }

          .hamburger.active .bar:nth-child(2) {
            opacity: 0;
          }

          .hamburger.active .bar:nth-child(1) {
            transform: translateY(8px) rotate(45deg);
          }

          .hamburger.active .bar:nth-child(3) {
            transform: translateY(-8px) rotate(-45deg);
          }

          .nav-menu {
            position: fixed;
            left: -100%;
            top: 70px;
            flex-direction: column;
            background-color: white;
            width: 100%;
            text-align: center;
            transition: 0.3s;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
            padding: 20px 0;
          }

          .nav-menu.active {
            left: 0;
          }

          .nav-item {
            margin: 15px 0;
          }

          .nav-link {
            color: var(--dark);
          }

          .hero-content {
            text-align: center;
            padding: 0 20px;
          }

          .hero-title {
            font-size: 2.8rem;
          }

          .profile-card {
            padding: 30px 20px;
          }

          .cta-title {
            font-size: 2rem;
          }

          .profile-img {
            width: 120px;
            height: 120px;
          }
        }

        @media (max-width: 480px) {
          html {
            font-size: 13px;
          }

          h1 {
            font-size: 2.5rem;
          }

          .hero-title {
            font-size: 2.2rem;
          }

          .hero-tagline {
            font-size: 1.2rem;
          }

          .container {
            padding: 0 15px;
          }

          .card {
            padding: 20px 15px;
          }

          .profile-card {
            padding: 25px 15px;
          }

          .profile-img {
            width: 100px;
            height: 100px;
          }

          .section-title h2 {
            font-size: 1.8rem;
          }

          .cta-title {
            font-size: 1.8rem;
          }

          .cta-text {
            font-size: 1rem;
          }
        }

        /* Fix for very small screens */
        @media (max-width: 360px) {
          .hero-title {
            font-size: 2rem;
          }

          .logo {
            font-size: 1.2rem;
          }
        }

        /* Landscape mode optimization */
        @media (max-height: 500px) and (orientation: landscape) {
          .hero {
            height: auto;
            min-height: 400px;
            padding: 100px 0 50px;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .profile-img {
            width: 80px;
            height: 80px;
          }
        }

        /* Adjustments for larger screens */
        @media (min-width: 1400px) {
          html {
            font-size: 18px;
          }

          .container {
            max-width: 1320px;
          }
        }
      `}</style>

      {/* Header */}
      <header className={isScrolled ? "scrolled" : ""}>
        <div className="container navbar">
          <a href="#" className="logo">
            Jazz for President
          </a>
          <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
            <li className="nav-item">
              <a
                href="#strengths"
                className="nav-link"
                onClick={(e) => scrollToSection(e, "#strengths")}
              >
                Strengths
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#experience"
                className="nav-link"
                onClick={(e) => scrollToSection(e, "#experience")}
              >
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#vision"
                className="nav-link"
                onClick={(e) => scrollToSection(e, "#vision")}
              >
                Vision
              </a>
            </li>
          </ul>
          <div
            className={`hamburger ${isMenuOpen ? "active" : ""}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            role="button"
            tabIndex="0"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Jazz Singh</h1>
            <p className="hero-tagline">A voice for all Tesla STEM students.</p>
          </div>
        </div>
      </section>

      {/* Strengths Section */}
      <section id="strengths">
        <div className="container">
          <div className="section-title">
            <h2>My Strengths</h2>
          </div>
          <div className="cards-container">
            <div className="card">
              <span className="card-icon" role="img" aria-label="Strength">
                💪
              </span>
              <h3 className="card-title">Communication</h3>
              <p>
                As an experienced debater and public speaker, I excel at clearly
                communicating ideas and listening to diverse perspectives.
              </p>
            </div>
            <div className="card">
              <span className="card-icon" role="img" aria-label="Handshake">
                🤝
              </span>
              <h3 className="card-title">Inclusivity</h3>
              <p>
                I believe every student deserves a voice. My approach ensures
                all grades and student groups are represented in decisions.
              </p>
            </div>
            <div className="card">
              <span className="card-icon" role="img" aria-label="Rocket">
                🚀
              </span>
              <h3 className="card-title">Innovation</h3>
              <p>
                I bring fresh ideas to old problems and am committed to
                implementing practical solutions that enhance student life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="timeline-section">
        <div className="container">
          <div className="section-title">
            <h2>My Experience</h2>
          </div>
          <div className="cards-container">
            <div className="card">
              <span className="card-icon" role="img" aria-label="Chart">
                📊
              </span>
              <h3 className="card-title">Class Officer</h3>
              <p>
                Served as Sophomore Class Representative, organizing class
                events and representing student concerns.
              </p>
            </div>
            <div className="card">
              <span className="card-icon" role="img" aria-label="Trophy">
                🏆
              </span>
              <h3 className="card-title">Club Leadership</h3>
              <p>
                Founded and led the Debate Club, growing membership by 40% and
                organizing our first interschool competition.
              </p>
            </div>
            <div className="card">
              <span className="card-icon" role="img" aria-label="Globe">
                🌍
              </span>
              <h3 className="card-title">Community Service</h3>
              <p>
                Led a volunteer team for community outreach, including
                organizing a STEM workshop for middle school students.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision">
        <div className="container">
          <div className="section-title">
            <h2>My Vision & Plan</h2>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <h3>Inclusive Events</h3>
              <p>
                Create events that appeal to all interests and foster school
                spirit across grades.
              </p>
            </div>

            <div className="timeline-item">
              <h3>Transparent Leadership</h3>
              <p>
                Implement regular town halls to ensure ASB decisions reflect
                student priorities.
              </p>
            </div>

            <div className="timeline-item">
              <h3>Resource Accessibility</h3>
              <p>
                Advocate for equitable access to resources for all students.
              </p>
            </div>

            <div className="timeline-item">
              <h3>Student Advisory Board</h3>
              <p>
                Establish a cross-grade student advisory board to ensure diverse
                input.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="profile-section">
        <div className="container">
          <div className="profile-card">
            <img
              src="/api/placeholder/300/300"
              alt="Jazz Singh"
              className="profile-img"
            />
            <h3 className="profile-name">JAZZ SINGH</h3>
            <p className="profile-position">FOR ASB PRESIDENT</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container cta-content">
          <h2 className="cta-title">Your Voice Matters</h2>
          <p className="cta-text">
            Together, we can build a stronger, more inclusive Tesla STEM
            community. I'm committed to representing your voice and turning our
            shared vision into reality.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <p className="footer-text">© 2025 Jazz Singh for ASB President</p>
        </div>
      </footer>
    </div>
  );
};

export default JazzCampaignWebsite;
