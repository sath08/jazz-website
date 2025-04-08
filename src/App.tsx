import React, { useState, useEffect, MouseEvent, KeyboardEvent } from "react";

const JazzCampaignWebsite: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [expandedSections, setExpandedSections] = useState<{
    [key: string]: boolean;
  }>({
    strengths: false,
    experience: false,
    vision: false,
  });

  // Content for expanded sections
  const expandedContent = {
    strengths: `My first strength is that I am very resilient. I am aware that there are a lot of challenges that come with being President, from overlooking all of ASB, to attending any matter that arises, or even overlooking the class representative. The simple truth is that these tasks take effort, making a resilient character of the utmost importance. However, I feel that I have the ability to embrace challenges and let my resilient character flow through during important times, which has always helped me bounce back and deliver. And, though my responsibilities as the President won't become really easy to execute, resilience will constantly help me as well as give me the motivation to carry out my responsibilities in both an effective and efficient manner.

Another one of the strengths that I bring to this position is my drive and hunger to strive for perfection. I am aware that attaining perfection is unachievable but just like my answer to the AP Lang argumentative essay prompt from a few years ago, I do believe that striving for it is more than possible. The reason why this quality of mine is so significant is because it ensures that both implicit and explicit problems are worked toward being fixed—therefore making the school a better place. Moreover, it ensures that they will be fixed in a timely manner and hence both long-standing as well as current issues won't persist. The second quality I bring to this position is my energy. Yes, this might seem like a weird quality to mention, but it truly makes an impact. As a President, bringing energy to the table is vital because it motivates others on the team and helps them do a better job at their task, all because they are more motivated and energized. Consequently, if the people don't have any energy to do what the many tasks their responsibility entails, it would be totally determinate. Furthermore, what energy does it make the ASB members more motivated to spread the sprit throughout the school, something which regularly takes immense effort and an individual to step out of their comfort zone. Lastly, I have great teamwork skills as I have played cricket—a team sport—for four years on our state team. So, knowing how to manage people as well mingle with people as well as my own team is up my alley.

Lastly, another strength of mine is my ability to learn and absorb knowledge. Our current President has done an amazing job this year. They have put their best forth in making sure that ASB runs in unison, have constantly led by example for the whole team to follow, and ensured the high quality of work that ASB produces. So, I plan on, and I am looking forward to learning from our current President and understand the exact responsibilities the role entails, ultimately to continue the consistency and quality of work that was set this year. As you may already know, the task of learnings can be daunting, especially when so much is coming your way. However, I also possess a really good perspective toward challenges and always reassure myself that there is that light at the end of the tunnel and if I put in the respective work and give it my best, I will and can overcome the challenges. The same goes for this challenge of learning and I plan on making sure that whatever I do learn from our President, I am able to streamline for myself to truly understand and also try to make a consistent effort to implement what I absorb.`,

    experience: `This year, the role of club's coordinator has given me invaluable ASB experience. It has not only taught be various skills such as communicating with different types of people or furthering initiatives, but it has also given me a good idea of how ASB functions as a whole. Moreover, with the nature of my role being more observational, I have able to gain a good grasp of different challenges and things that are required from each member. This will be essential for my role as the President next year where my role will be to be the key behind making all of ASB function.
 
I was part of the FBLA membership committee last year which gave me immense experience in organizing and planning. My role was to work with the committee members in helping provide club members with a great opportunity to get their presentations reviewed by the more experienced people in the club. To execute this, I had to help plan the whole review process (how it would operate), timings, scheduling, and promotion, to help as many club members as possible. Planning and organization are highly essential skills that are required even as a President, which makes my experience very valuable in providing me with the necessary skills to help meet the needs of the many clubs in our school.
 
Over the last five years, playing cricket has helped me gain the valuable skill of teamwork, yet again being valuable to the role of President. It is a sport that heavily depends on each player's ability to work in a team filled with different unique individuals. This means always being selfless, making any sacrifices, and adapting accordingly, to always keeps the team first. I will keep this mindset of being a team player if I am elected as President so that I can ensure the success of our community as a whole.`,

    vision: `Vision: Increase participation at school dances 
Execution: One of the main things I would like to see happen is more student engagement at the dances. The reason for this is because I truly believe that the dances at STEM are insanely good with amazing venues, themes, preparation put in, and in general all the effort that goes toward the event. However, I feel that with a lack of people attending, all that effort and potential fun that students could be having gets lost—which I want to fix as fast as possible. Tesla Stem in general is known as a more academically school and though that is true, I don't want students to completely in that perception as I know for a fact that the students which make up our school are more than just academically oriented and rather a better and more balanced combination of academics and fun. So, through the dances and with the great future participation, I want students to know and assure themselves that we aren't boring and are truly well-rounded. Since the execution of dances is in the hands of the Activities Coordinator, I will work closely with them to fix the current situation. Lastly, I do recognize that representing ASB, especially as President, makes me one of the leaders of the team that is representing the student body. So, it is really that I take student voice/body into account and that what happens in the term regarding dances is very closely as well as appropriately aligned to what the people want.

Vision: Further increase the success of Fundraisers led by Senior Representatives
Execution: Despite the President having a lot of responsibilities, I do realize that other members of the team like the Senior Representatives have huge tasks ahead of them too––prom. A part of my responsibilities, as mentioned in the constitution, is to help the oversee the Senior Representatives. So, I plan on helping out the Senior Representatives to the best of my abilities for raising money towards the prom. One way I can help, is through the fundraisers that they do. I have seen many fundraisers this year during my time as the clubs coordinator which means I am aware as what works as well as what doesn't. Along with this, I have good connections with our current Senior Representatives, so I can, along with incoming Senior Representatives, consult them to carry out amazing fundraisers. I really hope that I am able to play a role in helping our grade get a good amount of money for our prom fund because this is the last dance that our Seniors will attend, and I want them to graduate from high school on a really high note and fun experience. Moreover, it should be a dance that they hopefully remember and cherish for life. Also, I have a good connection with the treasures of this year because as clubs coordinator I had to help manage with the club budgets.

Vision: Motivate the members within our team
Execution: Implement hangouts for the ASB team at least once a month so that the energy in the team remains high. Yes, everyone who is part of ASB is intrinsically motivated to serve the school, but sometimes when challenges arise, team's morale goes down. I want and need to fix this. Through monthly hangouts, I can make sure that the members of the team don't get the stress get through them and can more effectively serve you all. It's a good break for the ASB team while also meaning better quality of delivered for you all. This might seem like a very surface-level vision, but trust me, the impact it can have is truly immense.`,
  };

  // Handle scroll events
  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle smooth scrolling
  const scrollToSection = (
    e: MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ): void => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (sectionId === "#") return;

    const element = document.querySelector(sectionId);
    if (!element) return;

    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  // Handle keyboard interaction for hamburger menu
  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>): void => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIsMenuOpen(!isMenuOpen);
    }
  };

  // Toggle expanded sections
  const toggleSection = (section: string): void => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // Add effect to prevent scrolling when menu is open on mobile
  useEffect(() => {
    // Create a meta viewport tag to enforce proper scaling
    const setViewportMeta = () => {
      let meta = document.querySelector('meta[name="viewport"]');
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", "viewport");
        document.head.appendChild(meta);
      }
      meta.setAttribute(
        "content",
        "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      );
    };

    setViewportMeta();

    // Fix for the body overflow
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Add overflow hidden to prevent any horizontal scrolling
    document.documentElement.style.overflowX = "hidden";
    document.body.style.width = "100%";
    document.body.style.maxWidth = "100vw";
    document.body.style.overflowX = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <div
      className="jazz-campaign"
      style={{
        overflowX: "hidden",
        width: "100%",
        maxWidth: "100vw",
        position: "relative",
      }}
    >
      {/* Header */}
      <header
        className={isScrolled ? "scrolled" : ""}
        style={{ width: "100%", maxWidth: "100vw" }}
      >
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
            <li className="nav-item">
              <a
                href="#impact"
                className="nav-link"
                onClick={(e) => scrollToSection(e, "#impact")}
              >
                Impact
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#testimonials"
                className="nav-link"
                onClick={(e) => scrollToSection(e, "#testimonials")}
              >
                Testimonials
              </a>
            </li>
          </ul>
          <div
            className={`hamburger ${isMenuOpen ? "active" : ""}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            onKeyDown={handleKeyDown}
            aria-label="Toggle menu"
            role="button"
            tabIndex={0}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="hero"
        id="home"
        style={{ overflowX: "hidden", width: "100%", maxWidth: "100vw" }}
      >
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Jazz Singh</h1>
            <p className="hero-tagline">
              Leading with Resilience, Energy, and Teamwork
            </p>
          </div>
        </div>
      </section>

      {/* Strengths Section */}
      <section
        id="strengths"
        style={{ overflowX: "hidden", width: "100%", maxWidth: "100vw" }}
      >
        <div className="container">
          <div className="section-title">
            <h2>My Strengths</h2>
            <button
              className="read-more-btn"
              onClick={() => toggleSection("strengths")}
              aria-expanded={expandedSections.strengths}
            >
              {expandedSections.strengths ? "Read Less" : "Read More"}
            </button>
          </div>

          {expandedSections.strengths && (
            <div className="expanded-content">
              {expandedContent.strengths
                .split("\n\n")
                .map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
            </div>
          )}

          <div className="cards-container">
            <div className="card">
              <span className="card-icon" role="img" aria-label="Strength">
                💪
              </span>
              <h3 className="card-title">Resilience</h3>
              <p>
                I embrace challenges and can bounce back to deliver effectively,
                even when responsibilities become difficult.
              </p>
            </div>
            <div className="card">
              <span className="card-icon" role="img" aria-label="Rocket">
                🚀
              </span>
              <h3 className="card-title">Drive for Excellence</h3>
              <p>
                I strive for perfection, ensuring both implicit and explicit
                problems are worked toward being fixed in a timely manner.
              </p>
            </div>
            <div className="card">
              <span className="card-icon" role="img" aria-label="Team">
                🤝
              </span>
              <h3 className="card-title">Teamwork</h3>
              <p>
                With experience in team sports like cricket, I excel at managing
                people and working collaboratively towards a common goal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="timeline-section"
        style={{ overflowX: "hidden", width: "100%", maxWidth: "100vw" }}
      >
        <div className="container">
          <div className="section-title">
            <h2>My Experience</h2>
            <button
              className="read-more-btn"
              onClick={() => toggleSection("experience")}
              aria-expanded={expandedSections.experience}
            >
              {expandedSections.experience ? "Read Less" : "Read More"}
            </button>
          </div>

          {expandedSections.experience && (
            <div className="expanded-content">
              {expandedContent.experience
                .split("\n\n")
                .map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
            </div>
          )}

          <div className="cards-container">
            <div className="card">
              <span className="card-icon" role="img" aria-label="Chart">
                📊
              </span>
              <h3 className="card-title">Clubs Coordinator</h3>
              <p>
                Gained invaluable ASB experience, learning communication skills
                and understanding how ASB functions.
              </p>
            </div>
            <div className="card">
              <span className="card-icon" role="img" aria-label="Trophy">
                🏆
              </span>
              <h3 className="card-title">FBLA Leadership</h3>
              <p>
                Served on the membership committee, developing planning and
                organizational skills.
              </p>
            </div>
            <div className="card">
              <span className="card-icon" role="img" aria-label="Globe">
                🌍
              </span>
              <h3 className="card-title">Cricket Team</h3>
              <p>
                Developed teamwork skills through five years of playing on the
                state cricket team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section
        id="vision"
        style={{ overflowX: "hidden", width: "100%", maxWidth: "100vw" }}
      >
        <div className="container">
          <div className="section-title">
            <h2>My Vision & Plan</h2>
            <button
              className="read-more-btn"
              onClick={() => toggleSection("vision")}
              aria-expanded={expandedSections.vision}
            >
              {expandedSections.vision ? "Read Less" : "Read More"}
            </button>
          </div>

          {expandedSections.vision && (
            <div className="expanded-content">
              {expandedContent.vision.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          )}

          <div className="timeline">
            <div className="timeline-item">
              <h3>Increase Dance Participation</h3>
              <p>
                Boost student engagement at school dances to showcase our
                school's well-rounded nature.
              </p>
            </div>

            <div className="timeline-item">
              <h3>Support Fundraising</h3>
              <p>
                Help each grade representative raise funds for prom and
                ensure a memorable final high school dance.
              </p>
            </div>

            <div className="timeline-item">
              <h3>Team Motivation</h3>
              <p>
                Implement monthly team hangouts to maintain high morale and
                prevent stress among ASB members.
              </p>
            </div>

            <div className="timeline-item">
              <h3>Continuous Learning</h3>
              <p>
                Learn from the current President to maintain consistency and
                quality of ASB work.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Impact Section */}
      <section
        id="impact"
        style={{ overflowX: "hidden", width: "100%", maxWidth: "100vw" }}
      >
        <div className="container">
          <div className="section-title">
            <h2>My Impact</h2>
          </div>

          <div className="impact-section">
            <h3 className="impact-header">Club Fair</h3>

            <div className="impact-subsection">
              <h4 className="impact-subheader">What You See</h4>
              <div className="image-collage">
                <div className="collage-item">
                  <img src="/image/see1.png" alt="Club Fair Visible Aspect 1" />
                </div>
                <div className="collage-item">
                  <img src="/image/see2.png" alt="Club Fair Visible Aspect 2" />
                </div>
                <div className="collage-item">
                  <img src="/image/see3.png" alt="Club Fair Visible Aspect 3" />
                </div>
              </div>
            </div>

            <div className="impact-subsection">
              <h4 className="impact-subheader">
                What Goes On Behind the Scenes
              </h4>
              <div className="image-collage">
                <div className="collage-item">
                  <img
                    src="/image/behind1.png"
                    alt="Club Fair Behind the Scenes 1"
                  />
                </div>
                <div className="collage-item">
                  <img
                    src="/image/behind2.png"
                    alt="Club Fair Behind the Scenes 2"
                  />
                </div>
                <div className="collage-item">
                  <img
                    src="/image/behind3.png"
                    alt="Club Fair Behind the Scenes 3"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="impact-section">
            <h3 className="impact-header">Furthering Trophy Case Initiative</h3>
            <div className="single-image-collage">
              <div className="collage-item">
                <img src="image/case.png" alt="Trophy Case Impact 1" />
              </div>
            </div>
          </div>

          <div className="impact-section">
            <h3 className="impact-header">Club Registration</h3>
            <div className="single-image-collage">
              <div className="collage-item">
                <img src="/image/clubs.png" alt="Single Image Description" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="testimonials-section"
        style={{ overflowX: "hidden", width: "100%", maxWidth: "100vw" }}
      >
        <div className="container">
          <div className="section-title">
            <h2>What Others Say</h2>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-box">
              <div className="testimonial-header">
                <div className="testimonial-image">
                  <img src="/image/alisha-testimonial.jpeg" alt="Alisha" />
                </div>
                <div className="testimonial-quote-icon">❝</div>
              </div>
              <div className="testimonial-content">
                <p>
                  "You should vote for Jazz because of his demonstrated
                  commitment and genuine care for the well being of others. His
                  energetic personality and desire to build connections enhances
                  his strong leadership skills. Jazz's dedication is also clear
                  through his consistent efforts in various circumstances."
                </p>
              </div>
              <div className="testimonial-footer">
                <h4 className="testimonial-name">Alisha</h4>
                <p className="testimonial-position">Junior</p>
              </div>
            </div>

            <div className="testimonial-box">
              <div className="testimonial-header">
                <div className="testimonial-image">
                  <img src="image/hamid-testimonial.jpg" alt="Hamid" />
                </div>
                <div className="testimonial-quote-icon">❝</div>
              </div>
              <div className="testimonial-content">
                <p>
                  "Jazz is the best fit for president because he is hard
                  working, organized, easy to work with, a good planner and on
                  top of all of that, he is easy to talk to about anything."
                </p>
              </div>
              <div className="testimonial-footer">
                <h4 className="testimonial-name">Hamid</h4>
                <p className="testimonial-position">Freshman</p>
              </div>
            </div>

            <div className="testimonial-box">
              <div className="testimonial-header">
                <div className="testimonial-image">
                  <img src="/image/varshini-testimonial.JPG" alt="Varshini" />
                </div>
                <div className="testimonial-quote-icon">❝</div>
              </div>
              <div className="testimonial-content">
                <p>
                  "I think Jazz would be the best fit for our ASB president
                  because he always brings the energy and has a smile on his
                  face every time i see him. He is extremely hardworking,
                  caring, and an empathetic person to everyone around him. He
                  would keep our school spirit alive and make sure everyone is
                  heard!"
                </p>
              </div>
              <div className="testimonial-footer">
                <h4 className="testimonial-name">Varshini</h4>
                <p className="testimonial-position">Junior</p>
              </div>
            </div>

            <div className="testimonial-box">
              <div className="testimonial-header">
                <div className="testimonial-image">
                  <img src="/image/rehet-testimonial.png" alt="Rehet" />
                </div>
                <div className="testimonial-quote-icon">❝</div>
              </div>
              <div className="testimonial-content">
                <p>
                  "Jaskirat has always been a close friend of mine, and it
                  doesn't go without reason. His responsiveness is a quality
                  that stems from his passionate care for all. Despite his fun,
                  silly, and committed personality, Jazz has always been someone
                  I can look up to--not just as a friend--as someone worthy of
                  endless praise. The dedication he outputs to tasks that are
                  leagues above what my mind can comprehend is admirable beyond
                  the scope of what most can accomplish, and say he becomes
                  President, I can guarantee our school will be left in safe
                  hands with reform driven by the people, not the person.
                  Something clicked as soon as I saw him loudly strolling the
                  hallways, chest up, eyes brimming with excitement, and a wide
                  frame that screamed friendly. As he has done for me, I'm sure
                  he will do for you, go Jazz!"
                </p>
              </div>
              <div className="testimonial-footer">
                <h4 className="testimonial-name">Rehet</h4>
                <p className="testimonial-position">Junior</p>
              </div>
            </div>

            <div className="testimonial-box">
              <div className="testimonial-header">
                <div className="testimonial-image">
                  <img src="/image/rohan-testimonial.png" alt="Rohan" />
                </div>
                <div className="testimonial-quote-icon">❝</div>
              </div>
              <div className="testimonial-content">
                <p>
                  "Jazz would be the best fit for president because he is
                  communicative, accountable, and reliable. He always strives to
                  do what's right for both his peers and his school, and never
                  falters to communicate any ideas or thoughts that that can
                  help him accomplish this goal."
                </p>
              </div>
              <div className="testimonial-footer">
                <h4 className="testimonial-name">Rohan</h4>
                <p className="testimonial-position">Sophomore</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="cta-section"
        style={{ overflowX: "hidden", width: "100%", maxWidth: "100vw" }}
      >
        <div className="container cta-content">
          <h2 className="cta-title">Your Voice Matters</h2>
          <p className="cta-text">
            I am committed to representing the student body and ensuring that
            our ASB truly reflects what students want.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ overflowX: "hidden", width: "100%", maxWidth: "100vw" }}>
        <div className="container">
          <p className="footer-text">© 2025 Jazz Singh for ASB President</p>
        </div>
      </footer>

      <style>{`
        /* Base styles */
        :root {
          --primary: #0353A4;
          --secondary: #00B760;
          --dark: #0D1B2A;
          --light: #F5F5F5;
          --accent: #FF5A5F;
          --gray: #EEF2F5;
        }
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        }
        
        html, body {
          scroll-behavior: smooth;
          font-size: 16px;
          width: 100%;
          max-width: 100vw;
          overflow-x: hidden !important;
        }
        
        body {
          background-color: var(--light);
          color: var(--dark);
          line-height: 1.6;
          position: relative;
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
          overflow: hidden;
        }
        
        /* Typography */
        h1, h2, h3, h4 {
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
        
        .single-image-collage {
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
  margin-bottom: 30px;
  justify-content: center;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.two-image-collage {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  margin-bottom: 30px;
  justify-content: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
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
          content: '';
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
          background: linear-gradient(to bottom, rgba(3, 83, 164, 1), rgba(0, 183, 96, 1));
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
        }
        
        .hero:before {
          content: '';
          position: absolute;
          right: -150px;
          bottom: -150px;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.1);
          z-index: 0;
        }
        
        .hero:after {
          content: '';
          position: absolute;
          left: -100px;
          top: -100px;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.1);
          z-index: 0;
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
          position: relative;
        }
        
        .section-title h2 {
          color: var(--primary);
        }
        
        .section-title h2:after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 50px;
          height: 4px;
          background: var(--secondary);
          border-radius: 2px;
        }

        /* Read More Button */
        .read-more-btn {
          background-color: var(--primary);
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 5px;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 15px;
          display: block;
          margin-left: auto;
          margin-right: auto;
        }
        
        .read-more-btn:hover {
          background-color: var(--primary-dark);
          transform: translateY(-2px);
          box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
        }

        .expanded-content {
          background-color: white;
          border-radius: 10px;
          padding: 20px;
          margin-bottom: 30px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          position: relative;
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
        }

        .expanded-content p {
          margin-bottom: 15px;
          text-align: left;
          line-height: 1.7;
        }

        .expanded-content p:last-child {
          margin-bottom: 0;
        }
        
        /* Impact Section Styling */
.impact-section {
  margin-bottom: 50px;
  position: relative;
}

.impact-header {
  font-size: 2.2rem;
  color: var(--primary);
  text-align: center;
  margin-bottom: 30px;
  position: relative;
  display: inline-block;
  width: 100%;
}

.impact-header:after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 4px;
  background: var(--secondary);
  border-radius: 2px;
}

.impact-section .impact-header {
  font-size: 1.8rem;
  color: var(--primary);
}

.impact-section .impact-header:after {
  width: 40px;
  height: 3px;
}

.impact-subsection .impact-subheader {
  font-size: 1.4rem;
  color: var(--primary);
}

.impact-subsection .impact-subheader:after {
  width: 30px;
  height: 2px;
}

.impact-section .subsection-detail {
  font-size: 1.2rem;
  color: var(--primary);
}

.impact-section .subsection-detail:after {
  width: 20px;
  height: 2px;
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
          content: '';
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
          content: '';
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
          content: '';
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
          overflow: hidden;
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
          content: '';
          position: absolute;
          top: -50px;
          left: -50px;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.1);
          z-index: 0;
        }
        
        .profile-card:after {
          content: '';
          position: absolute;
          bottom: -50px;
          right: -50px;
          width: 150px;
          height: 150px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.1);
          z-index: 0;
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
          background: linear-gradient(to right, var(--primary), var(--secondary));
          color: white;
          text-align: center;
          padding: 60px 0;
          position: relative;
          overflow: hidden;
        }
        
        .cta-section:before {
          content: '';
          position: absolute;
          width: 200px;
          height: 200px;
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          top: -100px;
          left: -100px;
          z-index: 0;
        }
        
        .cta-section:after {
          content: '';
          position: absolute;
          width: 150px;
          height: 150px;
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          bottom: -75px;
          right: -75px;
          z-index: 0;
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
        
        /* Image Collage */
        .image-collage {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 15px;
          margin-bottom: 30px;
        }
        
        .collage-item {
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }
        
        .collage-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        
        .collage-item:hover {
          transform: translateY(-5px);
        }
        
        .collage-item:hover img {
          transform: scale(1.05);
        }
        
        /* Testimonials */
        .testimonials-section {
          background: linear-gradient(165deg, var(--gray) 0%, #ffffff 100%);
          padding: 80px 0;
          position: relative;
          overflow: hidden;
        }
        
        .testimonials-section:before {
          content: '';
          position: absolute;
          width: 300px;
          height: 300px;
          background-color: rgba(3, 83, 164, 0.05);
          border-radius: 50%;
          top: -150px;
          left: -150px;
        }
        
        .testimonials-section:after {
          content: '';
          position: absolute;
          width: 200px;
          height: 200px;
          background-color: rgba(0, 183, 96, 0.05);
          border-radius: 50%;
          bottom: -100px;
          right: -100px;
        }
        
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
          position: relative;
          z-index: 1;
        }
        
        .testimonial-box {
          background: white;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          height: auto;
          transition: all 0.4s ease;
          position: relative;
          border-bottom: 5px solid var(--primary);
        }
        
        .testimonial-box:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 35px rgba(3, 83, 164, 0.2);
        }
        
        .testimonial-header {
          padding: 25px 25px 5px;
          position: relative;
          display: flex;
          justify-content: space-between;
        }
        
        .testimonial-image {
          width: 80px;
          height: 80px;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
          border: 4px solid white;
          position: relative;
          z-index: 2;
        }
        
        .testimonial-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        
        .testimonial-box:hover .testimonial-image img {
          transform: scale(1.08);
        }
        
        .testimonial-quote-icon {
          font-size: 4rem;
          color: var(--primary);
          opacity: 0.3;
          line-height: 0.7;
          margin-top: -5px;
        }
        
        .testimonial-content {
          padding: 5px 25px 15px;
          flex-grow: 0;
          display: flex;
          flex-direction: column;
          position: relative;
          z-index: 1;
        }
        
        .testimonial-content p {
          font-style: italic;
          color: #555;
          line-height: 1.7;
          position: relative;
          margin-bottom: 10px;
        }
        
        .testimonial-footer {
          padding: 10px 25px 25px;
          border-top: 1px solid rgba(0, 0, 0, 0.05);
          position: relative;
          z-index: 1;
        }
        
        .testimonial-name {
          font-weight: 700;
          color: var(--primary);
          margin-bottom: 5px;
          font-size: 1.1rem;
        }
        
        .testimonial-position {
          font-size: 0.85rem;
          color: #777;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 0;
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
          
          .image-collage {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .testimonials-grid {
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 25px;
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
          
          .testimonials-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          
          .testimonial-box {
            max-width: 500px;
            margin: 0 auto;
          }
          
          .testimonial-header {
            justify-content: space-between;
          }
          
          .testimonial-image {
            width: 70px;
            height: 70px;
          }
          
          .testimonial-content {
            text-align: left;
          }
          
          .testimonial-footer {
            text-align: left;
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
          
          .image-collage {
            grid-template-columns: 1fr;
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
          
          .testimonials-grid {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
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

        /* Fix for the white strip issue */
        #root {
          overflow-x: hidden;
          width: 100%;
          max-width: 100vw;
        }

        .jazz-campaign {
          overflow-x: hidden !important;
          max-width: 100vw !important;
          width: 100% !important;
        }
      `}</style>
    </div>
  );
};

export default JazzCampaignWebsite;
