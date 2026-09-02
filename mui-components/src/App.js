import './App.css';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';

function App() {
    const projects = [
        {
            title: 'E-Grampanchayat Management System',
            technologies: ['Java', 'XML', 'Android'],
            date: 'Jan 2026 – May 2026',
            description:
                'Developed a digital platform for managing citizen records and local administration services.',
        },
        {
            title: 'Prompt Builder Website',
            technologies: ['Python', 'Flask'],
            date: 'Aug 2025 – Nov 2025',
            description:
                'Developed a web application for generating customized prompts using a step-by-step interface.',
        },
        {
            title: 'Real-Time Chat Application',
            technologies: ['Golang', 'WebSockets'],
            date: 'Feb 2025 – May 2025',
            description:
                'Developed a real-time chat application with instant bidirectional communication using WebSockets.',
        },
    ];

    const skills = [
        'Java',
        'C',
        'C++',
        'Python',
        'Go',
        'HTML',
        'CSS',
        'JavaScript',
        'MongoDB',
        'MySQL',
        'Git',
        'GitHub',
    ];

    return (
        <>
            {/* MUI AppBar */}
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

            <Container maxWidth="md">
                <div className="resume-content">

                    {/* INTRO */}
                    <section className="intro">
                        <Typography variant="h3">
                            Sahil Patil
                        </Typography>

                        <Typography variant="h6" color="text.secondary">
                            Computer Science & Engineering Student
                        </Typography>

                        <Typography variant="body2" color="text.secondary">
                            sahilpatil222005@gmail.com
                        </Typography>
                    </section>

                    {/* SUMMARY */}
                    <section className="section">
                        <Typography variant="h5" className="section-title">
                            Summary
                        </Typography>

                        <Typography variant="body1">
                            Computer Science & Engineering student with a strong
                            foundation in software development, problem-solving, and
                            communication. Experienced in building real-world
                            applications using Java, Python, Golang, and web
                            technologies. Passionate about software engineering,
                            problem-solving, and continuously learning new technologies.
                        </Typography>
                    </section>

                    {/* EDUCATION */}
                    <section className="section">
                        <Typography variant="h5" className="section-title">
                            Education
                        </Typography>

                        <div className="education-item">
                            <div>
                                <Typography variant="h6">
                                    D Y Patil College of Engineering & Technology, Kolhapur
                                </Typography>

                                <Typography variant="body2" color="text.secondary">
                                    B.Tech – Computer Science & Engineering
                                </Typography>
                            </div>

                            <div className="education-right">
                                <Typography variant="body2">
                                    2023 – 2027
                                </Typography>

                                <Chip label="CGPA: 8.02" color="primary" size="small" />
                            </div>
                        </div>

                        <div className="education-item">
                            <div>
                                <Typography variant="h6">
                                    Kisanrao More Highschool & Junior College, Sarawade
                                </Typography>

                                <Typography variant="body2" color="text.secondary">
                                    Class XII
                                </Typography>
                            </div>

                            <div className="education-right">
                                <Typography variant="body2">
                                    2022 – 2023
                                </Typography>

                                <Chip label="72.17%" color="primary" size="small" />
                            </div>
                        </div>
                    </section>

                    {/* PROJECTS */}
                    <section className="section">
                        <Typography variant="h5" className="section-title">
                            Projects
                        </Typography>

                        <div className="projects-container">
                            {projects.map((project, index) => (
                                <Card
                                    className="project-card"
                                    elevation={3}
                                    key={index}
                                >
                                    <CardContent>

                                        <div className="project-heading">
                                            <Typography variant="h6">
                                                {project.title}
                                            </Typography>

                                            <Typography
                                                variant="body2"
                                                color="text.secondary"
                                            >
                                                {project.date}
                                            </Typography>
                                        </div>

                                        <div className="chips">
                                            {project.technologies.map((tech) => (
                                                <Chip
                                                    key={tech}
                                                    label={tech}
                                                    color="primary"
                                                    size="small"
                                                />
                                            ))}
                                        </div>

                                        <Typography variant="body2">
                                            {project.description}
                                        </Typography>

                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>

                    {/* SKILLS */}
                    <section className="section">
                        <Typography variant="h5" className="section-title">
                            Skills
                        </Typography>

                        <div className="skills">
                            {skills.map((skill) => (
                                <Chip
                                    key={skill}
                                    label={skill}
                                    variant="outlined"
                                    color="primary"
                                />
                            ))}
                        </div>
                    </section>

                    {/* CURRENTLY LEARNING */}
                    <section className="section">
                        <Alert severity="info" icon={false}>
                            <strong>Currently Learning:</strong> Java Full Stack,
                            Spring, REST API and MongoDB
                        </Alert>
                    </section>

                    {/* CONTACT FORM - LAST */}
                    <section className="section">
                        <Typography variant="h5" className="section-title">
                            Contact Form
                        </Typography>

                        <div className="contact-form">
                            <TextField
                                label="Enter your name"
                                variant="outlined"
                                fullWidth
                            />

                            <TextField
                                label="Enter your email"
                                variant="outlined"
                                fullWidth
                            />

                            <Button variant="contained">
                                Submit
                            </Button>
                        </div>
                    </section>

                </div>
            </Container>
        </>
    );
}

export default App;