import aboutpic from './assets/2nd-pic.jpg.png';

function About() {
    return (
        <section id="about" className="about-section">
            <div className="container">
                {/* About Me Section */}
                <div className="about-content">
                    <div className="about-text">
                        <h2>About Me</h2>
                        <p>
                            A highly motivated Front-End Web Developer, self-taught Graphic Designer, and Video Editor, with a strong 
                            foundation in HTML, CSS, JavaScript, and proficiency in tools such as Git and GitHub, 
                            Photoshop, Illustrator, and After Effects. Additionally, I possess a solid understanding of ethical hacking, backed by a certification. 
                            Seeking opportunities to contribute my diverse skill set to a dynamic team.
                        </p>
                        <p>
                            I thrive in collaborative environments and enjoy working on projects that challenge my creativity.
                        </p>
                        <div className="education-box">
                            <h3>Education</h3>
                            <ul>
                                <li>
                                    <strong>Bachelor of Technology in CSE (AI)</strong><br />
                                    Techno India University, West Bengal<br />
                                    <em>Expected Graduation: 2026</em>
                                </li>
                                <li>
                                    <strong>Class XII</strong><br />
                                    Future Campus School, Sonarpur<br />
                                    <em>Qualified: 2022</em>
                                </li>
                                <li>
                                    <strong>Class X</strong><br />
                                    Techno India Group Public School, Garia<br />
                                    <em>Qualified: 2019</em>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="about-image">
                        <img src={aboutpic} alt='aboutimage' />
                    </div>
                </div>

                {/* Skills Section */}
                <div className="skill-container">
                    <h2>Skills</h2>
                    <div className="skills-content">
                        <div className="skills-item">
                            <h3>Front-End Web Development</h3>
                            <p>HTML, CSS, JavaScript, ReactJS</p>
                        </div>
                        <div className="skills-item">
                            <h3>Databases</h3>
                            <p>MySQL, MongoDB (basic)</p>
                        </div>
                        <div className="skills-item">
                            <h3>Other Technical Skills</h3>
                            <p>Ethical Hacking (basic)</p>
                        </div>
                        <div className="skills-item">
                            <h3>Collaborative Platforms</h3>
                            <p>Git and GitHub, Notion</p>
                        </div>
                        <div className="skills-item">
                            <h3>Other Skills</h3>
                            <p>
                                <strong>Video Editing:</strong> Adobe After Effects, Premiere Pro <br />
                                <strong>Graphic Designing:</strong> Adobe Photoshop, Canva, Adobe Illustrator (basic)
                            </p>
                        </div>
                        <div className="skills-item">
                            <h3>Soft Skills</h3>
                            <p>Creativity, Attention to Detail, Collaborative Team Player, Communication, Management</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
