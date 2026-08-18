import './App.css';

function App() {
  return (
    <div className="resume">

      {/* Header */}
      <header className="header">
        <div className="header-left">
          <h1>Sahil Patil</h1>
          <p>Computer Science & Engineering Student</p>
        </div>

        <div className="contact">
          <a href="mailto:sahilpatil222005@gmail.com">
            sahilpatil222005@gmail.com
          </a>

          <a
            href="https://github.com/Sahilpatil2320"
            target="_blank"
            rel="noreferrer"
          >
            github.com/Sahilpatil2320
          </a>
        </div>
      </header>

      {/* Summary */}
      <section className="section">
        <h2>Summary</h2>

        <p className="summary">
          Computer Science & Engineering student with a strong foundation in
          software development, problem-solving, and communication. Experienced
          in building real-world applications using Java, Python, Golang, and
          web technologies. Passionate about software engineering,
          problem-solving, and continuously learning new technologies.
        </p>
      </section>

      {/* Education */}
      <section className="section">
        <h2>Education</h2>

        <div className="education-item">
          <div>
            <h3>D Y Patil College of Engineering & Technology, Kolhapur</h3>
            <p>B.Tech – Computer Science & Engineering</p>
          </div>

          <div className="education-right">
            <span>2023 – 2027</span>
            <strong>CGPA: 8.02</strong>
          </div>
        </div>

        <div className="education-item">
          <div>
            <h3>Kisanrao More Highschool & Junior College, Sarawade</h3>
            <p>Class XII</p>
          </div>

          <div className="education-right">
            <span>2022 – 2023</span>
            <strong>72.17%</strong>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="section">
        <h2>Projects</h2>

        {/* Project 1 */}
        <article className="project">
          <div className="project-heading">
            <div>
              <h3>E-Grampanchayat Management System</h3>
              <span className="tech">Java · XML · Android</span>
            </div>

            <span className="date">Jan 2026 – May 2026</span>
          </div>

          <ul>
            <li>
              Developed a digital platform for managing citizen records and
              local administration services.
            </li>
            <li>
              Designed user-friendly interfaces for accessing
              government-related services.
            </li>
            <li>
              Improved organization and accessibility of administrative data.
            </li>
          </ul>

          <p className="tools">
            <strong>Technologies:</strong> Java, XML, Android
          </p>
        </article>

        {/* Project 2 */}
        <article className="project">
          <div className="project-heading">
            <div>
              <h3>Prompt Builder Website</h3>
              <span className="tech">Python · Flask</span>
            </div>

            <span className="date">Aug 2025 – Nov 2025</span>
          </div>

          <ul>
            <li>
              Developed a Prompt Builder web application using Python and
              Flask.
            </li>
            <li>
              Created a step-by-step interface for generating customized
              prompts.
            </li>
            <li>
              Designed a user-friendly frontend and integrated backend
              processing.
            </li>
          </ul>

          <p className="project-link">
            <strong>GitHub:</strong>{' '}
            <a
              href="https://github.com/Sahilpatil2320/Prompt_Builder_Web"
              target="_blank"
              rel="noreferrer"
            >
              Prompt_Builder_Web
            </a>
          </p>
        </article>

        {/* Project 3 */}
        <article className="project">
          <div className="project-heading">
            <div>
              <h3>Real-Time Chat Application</h3>
              <span className="tech">Golang · WebSockets</span>
            </div>

            <span className="date">Feb 2025 – May 2025</span>
          </div>

          <ul>
            <li>
              Developed a real-time chat application using Golang and
              WebSockets.
            </li>
            <li>
              Implemented instant bidirectional communication without page
              reloads.
            </li>
            <li>
              Built a responsive frontend using HTML, CSS, and JavaScript.
            </li>
          </ul>

          <p className="project-link">
            <strong>GitHub:</strong>{' '}
            <a
              href="https://github.com/Sahilpatil2320/GoLang_project"
              target="_blank"
              rel="noreferrer"
            >
              GoLang_project
            </a>
          </p>
        </article>
      </section>

      {/* Skills */}
      <section className="section">
        <h2>Skills</h2>

        <div className="skills-grid">

          <div className="skill">
            <span>Programming</span>
            <p>Java, C, C++, Python, Go</p>
          </div>

          <div className="skill">
            <span>Databases</span>
            <p>SQLite, MySQL, MongoDB</p>
          </div>

          <div className="skill">
            <span>Frameworks</span>
            <p>Flask</p>
          </div>

          <div className="skill">
            <span>Tools & Platforms</span>
            <p>Git, GitHub</p>
          </div>

          <div className="skill">
            <span>Languages</span>
            <p>English, Hindi, Marathi</p>
          </div>

          <div className="skill">
            <span>Soft Skills</span>
            <p>Communication, Teamwork, Problem Solving</p>
          </div>

        </div>

        <div className="learning">
          <strong>Currently Learning:</strong>
          Java Full Stack · Spring · REST API · MongoDB
        </div>
      </section>

    </div>
  );
}

export default App;