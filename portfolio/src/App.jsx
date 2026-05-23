import "./index.css";

import resumeImg from "./assets/resume.png";
import housingImg from "./assets/housing.png";

import awsLogo from "./assets/aws.png";
import awsCert from "./assets/aws-cert.pdf";

import smartbridgeLogo from "./assets/smartbridge.png";
import smartbridgeCert from "./assets/smartbridge-cert.pdf";

import dataScienceLogo from "./assets/datascience.png";
import dataScienceCert from "./assets/data-science-cert.pdf";

import pythonFsLogo from "./assets/pythonfullstack.png";
import pythonFsCert from "./assets/python-fullstack-cert.pdf";

import webFsLogo from "./assets/webfullstack.png";
import webFsCert from "./assets/web-fullstack-cert.pdf";

import googleAiLogo from "./assets/googleaiml.png";
import googleAiCert from "./assets/google-ai-ml-cert.pdf";

import paloAltoLogo from "./assets/paloalto.png";
import paloAltoCert from "./assets/paloalto-cybersecurity-cert.pdf";
import profilePhoto from "./assets/photo.jpg";
function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* NAVBAR */}

      <nav
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          background: "rgba(2,6,23,0.75)",
          backdropFilter: "blur(12px)",
          display: "flex",
          alignItems: "center",
          padding: "18px 40px",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          zIndex: 1000,
        }}
      >
        <h2
          style={{
            fontSize: "32px",
            marginRight: "60px",
            whiteSpace: "nowrap",
          }}
        >
          Sailu Bhatraju
        </h2>

        <div
          style={{
            display: "flex",
            gap: "28px",
            fontSize: "19px",
            flexWrap: "wrap",
          }}
        >
          <a href="#home" style={linkStyle}>Home</a>
          <a href="#about" style={linkStyle}>About</a>
          <a href="#education" style={linkStyle}>Education</a>
          <a href="#skills" style={linkStyle}>Skills</a>
          <a href="#projects" style={linkStyle}>Projects</a>
          <a href="#internships" style={linkStyle}>Internships</a>
          <a href="#certifications" style={linkStyle}>Certifications</a>
          <a href="#contact" style={linkStyle}>Contact</a>
        </div>
      </nav>

      {/* HOME */}

      <section
        id="home"
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "140px 20px 80px",
        }}
      >
        <div style={mainGlassCard}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 18 }}>
            <img
              src={profilePhoto}
              alt="Profile"
              style={{
                width: 200,
                height: 200,
                borderRadius: "50%",
                objectFit: "cover",
                objectPosition: "center 15%",
                filter: "contrast(1.08) saturate(1.05)",
                border: "4px solid rgba(34,211,238,0.22)",
                boxShadow: "0 14px 40px rgba(0, 0, 0, 0.35)",
              }}
            />
          </div>
          <h1
            style={{
              fontSize: "70px",
              marginBottom: "20px",
            }}
          >
            Hi, I'm Sailu Bhatraju
          </h1>

          <h2
            style={{
              color: "#22d3ee",
              fontSize: "30px",
            }}
          >
            Full Stack Developer | Data Analyst
          </h2>

          <p
            style={{
              marginTop: "25px",
              lineHeight: "38px",
              color: "#cbd5e1",
              fontSize: "21px",
              maxWidth: "950px",
              marginInline: "auto",
            }}
          >
            Passionate Computer Science Engineering student interested in
            software development, AI-powered applications, data analytics,
            and building modern responsive web applications.
          </p>

          <div
            style={{
              marginTop: "35px",
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <a href="/portfolio/resume.pdf" download style={buttonStyle}>
              Download Resume
            </a>

            <a href="#contact" style={outlineButton}>
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}

      <Section title="About Me" id="about">
        <Card
          text="
          I am a Fresher with strong interest and hands-on experience in both Full Stack Development and Data Analytics.I specialize in building responsive web applications using technologies like React.js, Node.js, JavaScript, HTML, CSS, and SQL, while also working on data-driven solutions using Python, Power BI, and Tableau.
          
          I enjoy creating end-to-end applications by combining clean UI development with efficient backend systems and database integration. At the same time, I am skilled in data analysis,data visualization, and transforming raw data into meaningful insights that support decision-making.
          
          Through academic projects and internships, I have gained practical experience in software development,data analysis, machine learning basics, and dashboard creation. I am continuously learning and improving my skills to build scalable, user-friendly, and intelligent real-world solutions."
        />
      </Section>

      {/* EDUCATION */}

      <Section title="Education" id="education">

        <div style={educationContainer}>

          {/* BTECH */}

          <div style={educationCard}>
            <h2 style={educationTitle}>
              Bachelor of Technology (B.Tech)
            </h2>

            <p style={educationText}>
              Sri Vasavi Institute of Engineering and Technology, Nandamuru
            </p>

            <p style={educationText}>
              Computer Science and Engineering
            </p>

            <h3 style={educationHighlight}>
              CGPA: 8.49
            </h3>

            <p style={educationYear}>
              2022 – 2026
            </p>
          </div>

          {/* INTER */}

          <div style={educationCard}>
            <h2 style={educationTitle}>
              Intermediate (12th)
            </h2>

            <p style={educationText}>
              Sri Vagdevi Junior College, Bantumilli
            </p>

            <p style={educationText}>
              MPC
            </p>

            <h3 style={educationHighlight}>
              Percentage: 79.3%
            </h3>

            <p style={educationYear}>
              2020 – 2022
            </p>
          </div>

          {/* 10TH */}

          <div style={educationCard}>
            <h2 style={educationTitle}>
              Secondary School (10th)
            </h2>

            <p style={educationText}>
              Z.P.H School, Pedatummidi
            </p>

            <p style={educationText}>
              SSC
            </p>

            <h3 style={educationHighlight}>
              Marks: 9.8
            </h3>

            <p style={educationYear}>
              2019 – 2020
            </p>
          </div>

        </div>

      </Section>

      {/* SKILLS */}

        <Section title="Technical Skills" id="skills">

  <div style={skillsBox}>

    <div style={skillItem}>🐍 Python</div>
    <div style={skillItem}>🗄️ SQL</div>
    <div style={skillItem}>⚛️ React.js</div>
    <div style={skillItem}>🟨 JavaScript</div>
    <div style={skillItem}>🌐 HTML</div>
    <div style={skillItem}>🎨 CSS</div>
    <div style={skillItem}>🟢 Node.js</div>
    <div style={skillItem}>📊 Power BI</div>

  </div>

      </Section>

      {/* PROJECTS */}

<Section title="Projects" id="projects">

  {/* PROJECT 1 */}

  <div style={projectCard}>

    <img
      src={resumeImg}
      alt="Resume Project"
      style={projectImage}
    />

    <div style={projectContent}>

      <h2 style={projectTitle}>
        AI Powered Resume Screening System Using NLP
      </h2>

      <p style={projectText}>
        Developed an AI-powered Resume Screening System 
        using NLP and Machine Learning to automate resume 
        analysis and candidate shortlisting. The system extracts skills, 
        education, and experience from resumes, matches them with job 
        requirements, and ranks candidates intelligently. Built using 
        React.js, Node.js, PostgreSQL, and NLP techniques for efficient 
        recruitment and faster hiring decisions.
      </p>

      <div style={projectButtonContainer}>

        <a
          href="https://github.com/sailu167/Resume-Screening-System-Using-NLP"
          target="_blank"
          style={projectButton}
        >
          GitHub
        </a>

        <a
          href="https://google.com"
          target="_blank"
          style={projectOutlineButton}
        >
          Live Demo
        </a>

      </div>

    </div>

  </div>

  {/* PROJECT 2 */}

  <div style={projectCard}>

    <img
      src={housingImg}
      alt="Housing Project"
      style={projectImage}
    />

    <div style={projectContent}>

      <h2 style={projectTitle}>
        Visualizing Housing Market Trends
      </h2>

      <p style={projectText}>
        Developed an interactive data visualization
         project to analyze housing market trends using Tableau. 
         The dashboard provides insights into property prices,
          sales performance, location-wise trends, and market 
          growth patterns through dynamic charts and visual analytics. 
          The project helps users understand real-time housing market
           behavior and supports data-driven decision making.
      </p>

      <div style={projectButtonContainer}>

        <a
          href="https://github.com/sailu167/Visualizing-Housing-Market-Trends"
          target="_blank"
          style={projectButton}
        >
          GitHub
        </a>

        <a
          href="https://google.com"
          target="_blank"
          style={projectOutlineButton}
        >
          Live Demo
        </a>

      </div>

    </div>

  </div>

</Section>

      {/* INTERNSHIPS */}

<Section title="Internships" id="internships">

  {/* AWS INTERNSHIP */}

  <div style={internshipCard}>

    <img
      src={awsLogo}
      alt="AWS Logo"
      style={internshipLogo}
    />

    <div style={internshipContent}>

      <h2 style={internshipTitle}>
        Data Engineering Virtual Internship
      </h2>

      <h3 style={internshipCompany}>
        AWS Academy | Edu Skills
      </h3>

      <p style={internshipDate}>
        Jan 2025 – Mar 2025
      </p>

      <p style={internshipText}>
        Worked on data engineering concepts and cloud-based
         data processing using AWS services. Gained hands-on
          experience in ETL workflows, data transformation, 
          data storage, and database management using Python
           and SQL. Learned to process and manage large datasets 
           efficiently while understanding cloud infrastructure,
            data pipelines, and analytics solutions in AWS environments.
      </p>

      <a
        href={awsCert}
        target="_blank"
        style={projectButton}
      >
        View Certificate
      </a>

    </div>

  </div>

  {/* SMARTBRIDGE INTERNSHIP */}

  <div style={internshipCard}>

    <img
      src={smartbridgeLogo}
      alt="SmartBridge Logo"
      style={internshipLogo}
    />

    <div style={internshipContent}>

      <h2 style={internshipTitle}>
        Data Analytics Internship
      </h2>

      <h3 style={internshipCompany}>
        Smart Bridge
      </h3>

      <p style={internshipDate}>
        Apr 2025 – Jun 2025
      </p>

      <p style={internshipText}>
        Worked on data analytics and business intelligence projects
        using Tableau, SQL, and Excel to analyze datasets and generate
        meaningful insights. Developed interactive dashboards, KPI reports,and
         visualizations to support data-driven decision-making. Gained practical 
        experience in data cleaning, data visualization, trend analysis, and reporting 
        techniques for business analytics solutions.
      </p>

      <a
        href={smartbridgeCert}
        target="_blank"
        style={projectButton}
      >
        View Certificate
      </a>

    </div>

  </div>

</Section>

      {/* CERTIFICATIONS */}

<Section title="Certifications" id="certifications">

  {/* AWS DATA ENGINEERING */}

  <div style={internshipCard}>

    <img
      src={awsLogo}
      alt="AWS"
      style={internshipLogo}
    />

    <div style={internshipContent}>

      <h2 style={internshipTitle}>
        Data Engineering Certification
      </h2>

      <h3 style={internshipCompany}>
          AWS Academy
      </h3>

      <p style={internshipDate}>
         April 2025-June 2025
      </p>

      <p style={internshipText}>
        Completed a Data Engineering certification focused on
         cloud computing using AWS services. Gained hands-on 
         experience in ETL pipelines, data processing, storage 
         solutions, and database management. Learned to work with 
         large datasets using Python and SQL while understanding 
         real-world data workflows and cloud architecture principles.
      </p>

      <a
        href={awsCert}
        target="_blank"
        style={projectButton}
      >
        View Certificate
      </a>

    </div>

  </div>

  {/* SMARTBRIDGE */}

  <div style={internshipCard}>

    <img
      src={smartbridgeLogo}
      alt="SmartBridge"
      style={internshipLogo}
    />

    <div style={internshipContent}>

      <h2 style={internshipTitle}>
        Data Analytics Certification
      </h2>

      <h3 style={internshipCompany}>
        Smart Bridge
      </h3>

      <p style={internshipDate}>
        april 2025-july 2025
      </p>

      <p style={internshipText}>
        Completed a Data Analytics certification focused 
        on data visualization and business intelligence. 
        Developed skills in Tableau, SQL, and Excel for 
        analyzing datasets, building dashboards, and 
        generating actionable business insights. Gained 
        experience in KPI tracking and data-driven decision-making techniques.
      </p>

      <a
        href={smartbridgeCert}
        target="_blank"
        style={projectButton}
      >
        View Certificate
      </a>

    </div>

  </div>

  {/* DATA SCIENCE */}

  <div style={internshipCard}>

    <img
      src={dataScienceLogo}
      alt="Data Science"
      style={internshipLogo}
    />

    <div style={internshipContent}>

      <h2 style={internshipTitle}>
        Data Science Certification
      </h2>

      <h3 style={internshipCompany}>
        BIST Technologies
      </h3>

      <p style={internshipDate}>
        May 2025 - July 2025
      </p>

      <p style={internshipText}>
        Completed a Data Science certification covering machine 
        learning fundamentals, statistical analysis, and predictive
        modeling. Worked with Python libraries such as Pandas, NumPy,
        and Scikit-learn for data preprocessing, analysis, and model 
        building for real-world applications.
      </p>

      <a
        href={dataScienceCert}
        target="_blank"
        style={projectButton}
      >
        View Certificate
      </a>

    </div>

  </div>

  {/* PYTHON FULL STACK */}

  <div style={internshipCard}>

    <img
      src={pythonFsLogo}
      alt="Python Full Stack"
      style={internshipLogo}
    />

    <div style={internshipContent}>

      <h2 style={internshipTitle}>
        Python Full Stack Developer
      </h2>

      <h3 style={internshipCompany}>
        Full Stack Development
      </h3>

      <p style={internshipDate}>
        July - Sep 
      </p>

      <p style={internshipText}>
        Completed a Python Full Stack Development certification 
        covering frontend and backend technologies. Built web applications
        using HTML, CSS, JavaScript, React.js, Python, and Django. Gained 
        experience in API integration, database management, and responsive web design.
      </p>

      <a
        href={pythonFsCert}
        target="_blank"
        style={projectButton}
      >
        View Certificate
      </a>

    </div>

  </div>

  {/* WEB FULL STACK */}

  <div style={internshipCard}>

    <img
      src={webFsLogo}
      alt="Web Full Stack"
      style={internshipLogo}
    />

    <div style={internshipContent}>

      <h2 style={internshipTitle}>
        Web Full Stack Developer
      </h2>

      <h3 style={internshipCompany}>
        Web Development
      </h3>

      <p style={internshipDate}>
        April 2025 - June 2025
      </p>

      <p style={internshipText}>
        Completed a Web Full Stack Development certification focused
        on modern web technologies. Developed responsive and interactive
        websites using HTML, CSS, JavaScript, React.js, Node.js, and database
        integration. Strengthened skills in UI/UX and full-stack application development.
      </p>

      <a
        href={webFsCert}
        target="_blank"
        style={projectButton}
      >
        View Certificate
      </a>

    </div>

  </div>

  {/* GOOGLE AI ML */}

  <div style={internshipCard}>

    <img
      src={googleAiLogo}
      alt="Google AI ML"
      style={internshipLogo}
    />

    <div style={internshipContent}>

      <h2 style={internshipTitle}>
        Google AI-ML Certification
      </h2>

      <h3 style={internshipCompany}>
        Google
      </h3>

      <p style={internshipDate}>
        July 2024 - September 2024
      </p>

      <p style={internshipText}>
        Completed a Google AI-ML certification focused on 
        Artificial Intelligence and Machine Learning fundamentals.
        Learned supervised learning, model training, data analysis, 
        and AI-based application development using modern machine learning concepts and tools.
      </p>

      <a
        href={googleAiCert}
        target="_blank"
        style={projectButton}
      >
        View Certificate
      </a>

    </div>

  </div>

  {/* CYBERSECURITY */}

  <div style={internshipCard}>

    <img
      src={paloAltoLogo}
      alt="Cybersecurity"
      style={internshipLogo}
    />

    <div style={internshipContent}>

      <h2 style={internshipTitle}>
        Cybersecurity Certification
      </h2>

      <h3 style={internshipCompany}>
        Palo Alto Networks
      </h3>

      <p style={internshipDate}>
         October 2024 - December 2024
      </p>

      <p style={internshipText}>
        Completed a Cybersecurity certification focused on network 
        security, threat detection, and risk management. Gained 
        understanding of cyber threats, security protocols, 
        and defensive strategies to protect systems and data from vulnerabilities and attacks.
      </p>

      <a
        href={paloAltoCert}
        target="_blank"
        style={projectButton}
      >
        View Certificate
      </a>

    </div>

  </div>

</Section>
      {/* CONTACT */}

<Section title="Contact Me" id="contact">
  <div style={contactBoxSingle}>

    <h2 style={contactTitle}>Let’s Connect</h2>

    <p style={contactText}>
      I’m open to job opportunities, internships, and collaborations. Feel free to reach out anytime.
    </p>

    <p style={contactEmail}>
      📧 sailubhatraju3@gmail.com
    </p>
    <p style={contactEmail}>
  📞 8897036139
</p>

    {/* SOCIAL BUTTONS */}
    <div style={socialRow}>
      <a
        href="https://github.com/sailu167"
        target="_blank"
        style={socialBtn}
      >
        GitHub
      </a>

      <a
        href="https://linkedin.com/in/sailu-bhatraju-75206b315"
        target="_blank"
        style={socialBtn}
      >
        LinkedIn
      </a>
    </div>

  </div>
</Section>
    </div>
  );
}

/* SECTION */

function Section({ title, id, children }) {
  return (
    <section
      id={id}
      style={{
        padding: "80px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          fontSize: "55px",
          color: "#22d3ee",
          marginBottom: "45px",
          textAlign: "center",
        }}
      >
        {title}
      </h1>

      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
        }}
      >
        {children}
      </div>
    </section>
  );
}

/* CARD */

function Card({ title, text }) {
  return (
    <div style={glassCard}>
      <h2
        style={{
          fontSize: "34px",
          marginBottom: "20px",
        }}
      >
        {title}
      </h2>

      <p
        style={{
          lineHeight: "36px",
          color: "#cbd5e1",
          fontSize: "20px",
          whiteSpace: "pre-line",
        }}
      >
        {text}
      </p>
    </div>
  );
}

/* STYLES */

const linkStyle = {
  color: "#22d3ee",
  textDecoration: "none",
  transition: "color 0.18s ease",
};

const buttonStyle = {
  background: "#22d3ee",
  padding: "14px 30px",
  borderRadius: "10px",
  color: "black",
  textDecoration: "none",
  fontWeight: "bold",
};

const outlineButton = {
  border: "1px solid #22d3ee",
  padding: "14px 30px",
  borderRadius: "10px",
  color: "#22d3ee",
  textDecoration: "none",
};

const mainGlassCard = {
  background:
    "linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04))",

  backdropFilter: "blur(18px)",

  padding: "60px",

  borderRadius: "30px",

  border: "1px solid rgba(255,255,255,0.1)",

  boxShadow: "0 8px 32px rgba(0,0,0,0.35)",

  maxWidth: "1200px",

  width: "100%",

  textAlign: "center",
};

const glassCard = {
  background:
    "linear-gradient(135deg, rgba(255,255,255,0.10), rgba(255,255,255,0.04))",

  backdropFilter: "blur(18px)",

  padding: "45px",

  borderRadius: "28px",

  border: "1px solid rgba(255,255,255,0.1)",

  boxShadow: "0 8px 32px rgba(0,0,0,0.35)",

  marginBottom: "35px",

  width: "100%",

  textAlign: "center",
};

const skillContainer = {
  display: "flex",
  flexWrap: "wrap",
  gap: "18px",
  justifyContent: "center",
};

const skillBox = {
  background: "rgba(255,255,255,0.08)",
  padding: "14px 24px",
  borderRadius: "12px",
  border: "1px solid rgba(255,255,255,0.1)",
  fontSize: "18px",
};

const educationContainer = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "30px",
  width: "100%",
};
const educationCard = {
  background:
    "linear-gradient(135deg, rgba(255,255,255,0.10), rgba(255,255,255,0.04))",

  backdropFilter: "blur(18px)",

  border: "1px solid rgba(255,255,255,0.1)",

  borderRadius: "28px",

  padding: "35px",

  width: "900px",

  textAlign: "center",

  boxShadow: "0 8px 32px rgba(0,0,0,0.35)",
};

const educationTitle = {
  fontSize: "28px",
  marginBottom: "20px",
  color: "white",
};

const educationText = {
  fontSize: "18px",
  color: "#cbd5e1",
  lineHeight: "30px",
};

const educationHighlight = {
  color: "#22d3ee",
  marginTop: "20px",
  fontSize: "24px",
};

const educationYear = {
  marginTop: "15px",
  fontSize: "18px",
  color: "#94a3b8",
};

const projectCard = {
  display: "flex",
  alignItems: "center",
  gap: "30px",

  background:
    "linear-gradient(135deg, rgba(255,255,255,0.10), rgba(255,255,255,0.04))",

  backdropFilter: "blur(18px)",

  border: "1px solid rgba(255,255,255,0.1)",

  borderRadius: "28px",

  padding: "35px",

  marginBottom: "35px",

  boxShadow: "0 8px 32px rgba(0,0,0,0.35)",
};

const projectImage = {
  width: "170px",
  height: "170px",
  objectFit: "cover",
  borderRadius: "18px",
};

const projectContent = {
  flex: 1,
};

const projectTitle = {
  fontSize: "34px",
  marginBottom: "18px",
};

const projectText = {
  fontSize: "20px",
  lineHeight: "34px",
  color: "#cbd5e1",
};

const projectButtonContainer = {
  display: "flex",
  gap: "18px",
  marginTop: "25px",
};

const projectButton = {
  background: "#22d3ee",
  padding: "14px 28px",
  borderRadius: "10px",
  color: "black",
  textDecoration: "none",
  fontWeight: "bold",
};

const projectOutlineButton = {
  border: "1px solid #22d3ee",
  padding: "14px 28px",
  borderRadius: "10px",
  color: "#22d3ee",
  textDecoration: "none",
};
const contactBoxSingle = {
  background:
    "linear-gradient(135deg, rgba(255,255,255,0.10), rgba(255,255,255,0.04))",
  backdropFilter: "blur(18px)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "28px",
  padding: "50px",
  maxWidth: "700px",
  margin: "0 auto",
  textAlign: "center",
  boxShadow: "0 8px 32px rgba(0,0,0,0.35)",
};

const contactTitle = {
  fontSize: "34px",
  marginBottom: "20px",
  color: "#22d3ee",
};

const contactText = {
  fontSize: "18px",
  color: "#cbd5e1",
  lineHeight: "28px",
  marginBottom: "20px",
};

const contactEmail = {
  fontSize: "18px",
  color: "white",
  fontWeight: "bold",
  marginBottom: "30px",
};

const socialRow = {
  display: "flex",
  justifyContent: "center",
  gap: "20px",
  flexWrap: "wrap",
};

const socialBtn = {
  background: "#22d3ee",
  padding: "12px 25px",
  borderRadius: "10px",
  color: "black",
  textDecoration: "none",
  fontWeight: "bold",
};
const internshipCard = {
  display: "flex",
  alignItems: "center",
  gap: "30px",

  background:
    "linear-gradient(135deg, rgba(255,255,255,0.10), rgba(255,255,255,0.04))",

  backdropFilter: "blur(18px)",

  border: "1px solid rgba(255,255,255,0.1)",

  borderRadius: "28px",

  padding: "35px",

  marginBottom: "35px",

  boxShadow: "0 8px 32px rgba(0,0,0,0.35)",
};

const internshipLogo = {
  width: "150px",
  height: "150px",
  objectFit: "contain",
  borderRadius: "20px",
  background: "white",
  padding: "10px",
};

const internshipContent = {
  flex: 1,
};

const internshipTitle = {
  fontSize: "34px",
  marginBottom: "10px",
};

const internshipCompany = {
  fontSize: "24px",
  color: "#22d3ee",
  marginBottom: "10px",
};

const internshipDate = {
  color: "#94a3b8",
  marginBottom: "18px",
  fontSize: "18px",
};

const internshipText = {
  fontSize: "20px",
  lineHeight: "34px",
  color: "#cbd5e1",
  marginBottom: "25px",
};
const skillsBox = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "20px",
  background: "rgba(255,255,255,0.05)",
  padding: "40px",
  borderRadius: "25px",
  border: "1px solid rgba(255,255,255,0.1)",
};

const skillItem = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  fontSize: "20px",
  padding: "15px",
  borderRadius: "12px",
  background: "rgba(255,255,255,0.08)",
  color: "white",
  fontWeight: "500",
};
export default App;
