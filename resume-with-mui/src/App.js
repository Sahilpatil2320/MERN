import './App.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';

function App() {
    return (
        <div className="resume">

            {/* ================= HEADER ================= */}
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Sahil Patil
                    </Typography>

                    <Button
                        color="inherit"
                        href="https://github.com/Sahilpatil2320"
                        target="_blank"
                    >
                        GitHub
                    </Button>

                    <Button
                        color="inherit"
                        href="mailto:sahilpatil222005@gmail.com"
                    >
                        Email
                    </Button>
                </Toolbar>
            </AppBar>

            {/* ================= SUMMARY ================= */}
            <section className="section">
                <Typography variant="h5" className="section-title">
                    Summary
                </Typography>

                <Typography variant="body1" className="summary">
                    Computer Science & Engineering student with a strong foundation
                    in software development, problem-solving, and communication.
                    Experienced in building real-world applications using Java,
                    Python, Golang, and web technologies. Passionate about software
                    engineering, problem-solving, and continuously learning new
                    technologies.
                </Typography>
            </section>

            {/* ================= EDUCATION ================= */}
            <section className="section">
                <Typography variant="h5" className="section-title">
                    Education
                </Typography>

                <div className="education-item">
                    <div>
                        <Typography variant="h6">
                            D Y Patil College of Engineering & Technology, Kolhapur
                        </Typography>

                        <Typography variant="body2">
                            B.Tech – Computer Science & Engineering
                        </Typography>
                    </div>

                    <div className="education-right">
                        <Typography variant="body2">
                            2023 – 2027
                        </Typography>

                        <Typography variant="body2" className="education-score">
                            CGPA: 8.02
                        </Typography>
                    </div>
                </div>

                <div className="education-item">
                    <div>
                        <Typography variant="h6">
                            Kisanrao More Highschool & Junior College, Sarawade
                        </Typography>

                        <Typography variant="body2">
                            Class XII
                        </Typography>
                    </div>

                    <div className="education-right">
                        <Typography variant="body2">
                            2022 – 2023
                        </Typography>

                        <Typography variant="body2" className="education-score">
                            72.17%
                        </Typography>
                    </div>
                </div>
            </section>

            {/* ================= PROJECTS ================= */}
            <section className="section">
                <Typography variant="h5" className="section-title">
                    Projects
                </Typography>

                <div className="projects-container">

                    {/* Project 1 */}
                    <Card className="project-card" elevation={3}>
                        <CardContent>
                            <div className="project-heading">
                                <div>
                                    <Typography variant="h6">
                                        E-Grampanchayat Management System
                                    </Typography>

                                    <Typography variant="body2" className="tech">
                                        Java · XML · Android
                                    </Typography>
                                </div>

                                <Typography variant="body2" className="date">
                                    Jan 2026 – May 2026
                                </Typography>
                            </div>

                            <ul>
                                <li>
                                    Developed a digital platform for managing citizen records
                                    and local administration services.
                                </li>

                                <li>
                                    Designed user-friendly interfaces for accessing
                                    government-related services.
                                </li>

                                <li>
                                    Improved organization and accessibility of administrative
                                    data.
                                </li>
                            </ul>

                            <Typography variant="body2" className="tools">
                                <strong>Technologies:</strong> Java, XML, Android
                            </Typography>
                        </CardContent>
                    </Card>

                    {/* Project 2 */}
                    <Card className="project-card" elevation={3}>
                        <CardContent>
                            <div className="project-heading">
                                <div>
                                    <Typography variant="h6">
                                        Prompt Builder Website
                                    </Typography>

                                    <Typography variant="body2" className="tech">
                                        Python · Flask
                                    </Typography>
                                </div>

                                <Typography variant="body2" className="date">
                                    Aug 2025 – Nov 2025
                                </Typography>
                            </div>

                            <ul>
                                <li>
                                    Developed a Prompt Builder web application using Python
                                    and Flask.
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

                            <Typography variant="body2" className="project-link">
                                <strong>GitHub:</strong>{' '}
                                <a
                                    href="https://github.com/Sahilpatil2320/Prompt_Builder_Web"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Prompt_Builder_Web
                                </a>
                            </Typography>
                        </CardContent>
                    </Card>

                    {/* Project 3 */}
                    <Card className="project-card" elevation={3}>
                        <CardContent>
                            <div className="project-heading">
                                <div>
                                    <Typography variant="h6">
                                        Real-Time Chat Application
                                    </Typography>

                                    <Typography variant="body2" className="tech">
                                        Golang · WebSockets
                                    </Typography>
                                </div>

                                <Typography variant="body2" className="date">
                                    Feb 2025 – May 2025
                                </Typography>
                            </div>

                            <ul>
                                <li>
                                    Developed a real-time chat application using Golang and
                                    WebSockets.
                                </li>

                                <li>
                                    Implemented instant bidirectional communication without
                                    page reloads.
                                </li>

                                <li>
                                    Built a responsive frontend using HTML, CSS, and JavaScript.
                                </li>
                            </ul>

                            <Typography variant="body2" className="project-link">
                                <strong>GitHub:</strong>{' '}
                                <a
                                    href="https://github.com/Sahilpatil2320/GoLang_project"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    GoLang_project
                                </a>
                            </Typography>
                        </CardContent>
                    </Card>

                </div>
            </section>

            {/* ================= SKILLS ================= */}
            <section className="section">
                <Typography variant="h5" className="section-title">
                    Skills
                </Typography>

                <div className="skills-grid">

                    <div className="skill">
                        <Typography variant="body2" className="skill-title">
                            Programming
                        </Typography>

                        <div className="skill-chips">
                            <Chip label="Java" size="small" variant="outlined" color="primary" />
                            <Chip label="C" size="small" variant="outlined" color="primary" />
                            <Chip label="C++" size="small" variant="outlined" color="primary" />
                            <Chip label="Python" size="small" variant="outlined" color="primary" />
                            <Chip label="Go" size="small" variant="outlined" color="primary" />
                        </div>
                    </div>

                    <div className="skill">
                        <Typography variant="body2" className="skill-title">
                            Databases
                        </Typography>

                        <div className="skill-chips">
                            <Chip label="SQLite" size="small" variant="outlined" color="primary" />
                            <Chip label="MySQL" size="small" variant="outlined" color="primary" />
                            <Chip label="MongoDB" size="small" variant="outlined" color="primary" />
                        </div>
                    </div>

                    <div className="skill">
                        <Typography variant="body2" className="skill-title">
                            Frameworks
                        </Typography>

                        <div className="skill-chips">
                            <Chip label="Flask" size="small" variant="outlined" color="primary" />
                        </div>
                    </div>

                    <div className="skill">
                        <Typography variant="body2" className="skill-title">
                            Tools & Platforms
                        </Typography>

                        <div className="skill-chips">
                            <Chip label="Git" size="small" variant="outlined" color="primary" />
                            <Chip label="GitHub" size="small" variant="outlined" color="primary" />
                        </div>
                    </div>

                    <div className="skill">
                        <Typography variant="body2" className="skill-title">
                            Languages
                        </Typography>

                        <div className="skill-chips">
                            <Chip label="English" size="small" variant="outlined" color="primary" />
                            <Chip label="Hindi" size="small" variant="outlined" color="primary" />
                            <Chip label="Marathi" size="small" variant="outlined" color="primary" />
                        </div>
                    </div>

                    <div className="skill">
                        <Typography variant="body2" className="skill-title">
                            Soft Skills
                        </Typography>

                        <div className="skill-chips">
                            <Chip
                                label="Communication"
                                size="small"
                                variant="outlined"
                                color="primary"
                            />
                            <Chip
                                label="Teamwork"
                                size="small"
                                variant="outlined"
                                color="primary"
                            />
                            <Chip
                                label="Problem Solving"
                                size="small"
                                variant="outlined"
                                color="primary"
                            />
                        </div>
                    </div>

                </div>

                {/* Currently Learning */}
                <div className="learning">
                    <Typography variant="body2">
                        <strong>Currently Learning:</strong>{' '}
                        Java Full Stack · Spring · REST API · MongoDB
                    </Typography>
                </div>
            </section>

        </div>
    );
}

export default App;