// Portfolio Data - Resume-driven content
const portfolioData = {
    hero: {
        name: "B Chaitanya Reddy",
        titleLine: "Python Developer | Data Analyst | Backend Developer | AI/ML Engineer",
        summary: "Aspiring Software Engineer with strong proficiency in Python and Java, building scalable backend applications, RESTful APIs, full-stack web solutions, and AI/ML-powered systems.",
        subtitle: "Python Developer | Machine Learning Enthusiast | AI Innovator"
    },

    about: {
        summary: "Aspiring Software Engineer with strong proficiency in Python and Java. Experienced in building scalable backend applications, RESTful APIs using FastAPI and Flask, full-stack web solutions, and AI/ML-powered systems. Proven track record in production-grade features, real-time inference pipelines, observability, Docker-based deployment, debugging, testing, and SDLC through internships, hackathons, and projects.",
        profile: [
            "Computer Science Student",
            "Bangalore, India",
            "Open to Opportunities"
        ],
        highlights: [
            {
                title: "Core Stack",
                description: "Python, FastAPI, Flask, Java, SQL"
            },
            {
                title: "Focus Areas",
                description: "Backend Systems, Data Analysis, AI/ML Engineering"
            },
            {
                title: "Current Experience",
                description: "AI/ML Intern at CropNow"
            }
        ],
        stats: [
            { value: "3+", label: "Academic Projects" },
            { value: "1", label: "Internship" },
            { value: "6+", label: "Skill Areas" },
            { value: "3", label: "Major Achievements" }
        ]
    },

    hobbies: [
        {
            icon: "💻",
            title: "Coding",
            description: "Building side projects and refining backend and AI workflows."
        },
        {
            icon: "📊",
            title: "Data Analysis",
            description: "Exploring patterns, metrics, and useful insights from structured data."
        },
        {
            icon: "🧠",
            title: "AI Experiments",
            description: "Testing practical machine learning ideas and model-driven features."
        },
        {
            icon: "📚",
            title: "Learning",
            description: "Reading technical content and staying current with new tools and patterns."
        }
    ],

    resume: {
        title: "Resume Highlights",
        description: "A summary of the latest version of my work and experience, aligned with the full resume.",
        actions: [
            { label: "Download Resume", href: "B%20Chaitanya%20Reddy.pdf" },
            { label: "View GitHub", href: "https://github.com/BChaitanyaReddy895" },
            { label: "View LinkedIn", href: "https://www.linkedin.com/in/bchaitanyareddy/" }
        ],
        items: [
            "AI/ML Intern at CropNow",
            "AquaJyoti, Agentic AI for Sustainable Farming, and SkillSync",
            "CGPA 9.67 at REVA University",
            "Top 8.3% in GSSoC 2025"
        ]
    },

    skills: [
        {
            title: "Programming Languages",
            icon: "💻",
            skills: [
                { name: "Python", proficiency: 95 },
                { name: "Java", proficiency: 75 },
                { name: "SQL", proficiency: 85 }
            ]
        },
        {
            title: "Backend Development",
            icon: "🖥️",
            skills: [
                { name: "FastAPI", proficiency: 75 },
                { name: "Flask", proficiency: 85 },
                { name: "REST APIs", proficiency: 90 },
                { name: "API Design", proficiency: 85 },
                { name: "Endpoint Development", proficiency: 85 }
            ]
        },
        {
            title: "Data & Analytics",
            icon: "📊",
            skills: [
                { name: "Data Analysis", proficiency: 85 },
                { name: "Power BI", proficiency: 75 },
                { name: "MySQL", proficiency: 80 },
                { name: "SQLite", proficiency: 85 }
            ]
        },
        {
            title: "Frontend Development",
            icon: "🎨",
            skills: [
                { name: "HTML", proficiency: 95 },
                { name: "CSS", proficiency: 90 },
                { name: "JavaScript", proficiency: 85 }
            ]
        },
        {
            title: "AI / ML Tools",
            icon: "🧠",
            skills: [
                { name: "Machine Learning", proficiency: 85 },
                { name: "NLP (Basics)", proficiency: 80 },
                { name: "Scikit-learn", proficiency: 85 },
                { name: "TensorFlow", proficiency: 70 },
                { name: "Hugging Face", proficiency: 75 }
            ]
        },
        {
            title: "Tools",
            icon: "🛠️",
            skills: [
                { name: "Git", proficiency: 95 },
                { name: "GitHub", proficiency: 95 },
                { name: "Docker", proficiency: 80 },
                { name: "Jupyter", proficiency: 90 },
                { name: "VS Code", proficiency: 90 },
                { name: "IntelliJ IDEA", proficiency: 80 }
            ]
        }
    ],

    experience: [
        {
            role: "AI/ML Intern",
            organization: "CropNow",
            period: "Nov 2025 - Feb 2026",
            description: "Developed and integrated ML models into backend systems using Python.",
            contributions: [
                "Collaborated with cross-functional teams to deliver scalable solutions",
                "Performed debugging, testing, and validation of APIs to ensure reliability",
                "Created technical documentation, including workflows, API details, and system design notes"
            ]
        }
    ],

    projects: [
        {
            title: "Retail Sales ETL Pipeline & Analytics System",
            role: "Data Engineering Project",
            description: "Built an end-to-end retail analytics pipeline using Python, SQL, and Power BI for data processing, reporting, and business insights.",
            technologies: ["Python", "SQL", "Power BI", "ETL", "Data Analytics"],
            githubLink: "https://github.com/BChaitanyaReddy895/Retail_sales_Analytics",
            liveLink: "",
            contributions: [
                "Automated data extraction, cleaning, transformation, and loading workflows for structured retail datasets",
                "Designed relational database schemas and optimized SQL queries for analytics and reporting",
                "Created interactive Power BI dashboards for sales trends, customer insights, and inventory analytics"
            ]
        },
        {
            title: "HDFS Log Analytics & Big Data Processing Pipeline",
            role: "Big Data Project",
            description: "Developed a scalable log analytics pipeline for HDFS server logs using PySpark and Hadoop-inspired batch and streaming workflows.",
            technologies: ["PySpark", "Hadoop", "Big Data", "Log Analytics", "Anomaly Detection"],
            githubLink: "https://github.com/BChaitanyaReddy895/HDFS_Real_Time_logs_Analysis",
            liveLink: "",
            contributions: [
                "Built log ingestion, parsing, anomaly detection, and root cause analysis workflows for structured and semi-structured data",
                "Simulated streaming and batch-processing architectures inspired by Kafka and Spark for distributed log handling",
                "Implemented transformation, aggregation, and analytics pipelines to identify usage patterns and anomalies"
            ]
        },
        {
            title: "Agentic AI for Sustainable Farming",
            role: "End-to-End Developer",
            description: "Engineered 30+ production-grade REST APIs using FastAPI and Python for crop planning, pest prediction, and multilingual chatbot workflows.",
            technologies: ["FastAPI", "Python", "REST APIs", "Agentic AI", "Agricultural Analytics"],
            githubLink: "https://github.com/BChaitanyaReddy895/Agentic-AI-for-Sustainable-Farming",
            liveLink: "https://agrismart-api-m8nz.onrender.com",
            contributions: [
                "Built a 5-agent AI system for intelligent farm decision support and automated recommendation workflows",
                "Developed ML-powered crop recommendation pipelines using 296K+ agricultural records"
            ]
        },
        {
            title: "SkillSync: AI-Powered Internship Matching Platform",
            role: "Flask Web App",
            description: "Developed a full-stack web application for intelligent resume-job matching with responsive UI and prediction workflows.",
            technologies: ["Flask", "Python", "HTML", "CSS", "JavaScript", "NLP", "Machine Learning"],
            githubLink: "https://github.com/BChaitanyaReddy895/SkillSync",
            liveLink: "https://chaitanya895-skillsync.hf.space",
            contributions: [
                "Designed backend APIs for resume scoring, skill extraction, and prediction",
                "Improved system accuracy using NLP and machine learning models",
                "Built the frontend using HTML, CSS, and JavaScript with a responsive layout"
            ]
        },
        {
            title: "Vexa Chatbot",
            role: "Lead Developer and Presenter",
            description: "An AI-powered chatbot for Sahayak Organization, assisting users with queries about underprivileged children's development.",
            technologies: ["Python", "Deep Learning", "PyTorch", "Flask", "HTML", "CSS"],
            githubLink: "https://github.com/BChaitanyaReddy895/vexa_chatbot",
            liveLink: "https://chaitanya895-sahayak.hf.space",
            image: "/static/images/Vexa Chatbot.png",
            video: "https://drive.google.com/file/d/1vDoZFIdO8QzEUVexnqQx_O74HPp7usaq/view?usp=drivesdk",
            contributions: [
                "Designed and implemented the chatbot's NLP pipeline using PyTorch",
                "Developed the Flask backend for seamless user interaction",
                "Presented the chatbot in an 8-minute talk at the Sahayak Organization anniversary, explaining its functioning, impact, and future goals"
            ]
        },
        {
            title: "AquaJyoti: Real-Time AI Microplastics Detection Platform",
            role: "SIH 2025 Hardware Edition",
            description: "Built a production-grade two-stage AI inference platform in Python for real-time microplastics detection using an ensemble of 6 ML/DL models.",
            technologies: ["Python", "AI/ML", "Ensemble Models", "Raspberry Pi", "Edge Deployment"],
            githubLink: "https://github.com/BChaitanyaReddy895/AquaJyoti_SIH_ML",
            liveLink: "",
            video: "https://drive.google.com/file/d/1A6lBvtbXTBPkPizmKQeNh4iGRF51tMRw/view?usp=drivesdk",
            contributions: [
                "Documented the system architecture, API endpoints, and workflows for maintainability",
                "Deployed the platform for edge execution on Raspberry Pi, enabling reliable real-time inference"
            ]
        }
    ],

    education: [
        {
            degree: "B.Tech in Computer Science and Engineering",
            institution: "REVA University, Bangalore",
            period: "Sep 2023 - Present",
            description: "CGPA: 9.67",
            achievements: [
                "Specializing in Python, Java, SQL, Machine Learning, and backend development",
                "Built and shipped projects across AI/ML, API development, and full-stack web applications"
            ]
        }
    ],

    certifications: [
        {
            title: "Swayam NPTEL Certification - Art of C Programming",
            issuer: "Swayam NPTEL / University of Calicut",
            description: "Completed the 4-credit course 'Art of C Programming' with 89% overall score. Earned 29/30 in continuous online assessments and 60/70 in the proctored exam held in May 2024. Issued 21/06/2024 by Dr. Lajish V. L. (Roll No. KK04048439).",
            certificateLink: "swayam%20NPTEL%20C%20program%20certificate.pdf"
        },
        {
            title: "Getting Started with Enterprise Data Science",
            issuer: "IBM",
            description: "Completed IBM's introductory certificate covering core enterprise data science concepts and practical foundations.",
            certificateLink: "Getting_Started_with_Enterprise_Data_Science_Badge20231212-29-fuv5k9.pdf"
        },
        {
            title: "Introduction to Data Science",
            issuer: "Infosys Springboard",
            description: "Completed the introductory course on data science concepts, workflows, and applications.",
            certificateLink: "introduction%20to%20data%20science.pdf"
        },
        {
            title: "Introduction to Python",
            issuer: "Infosys Springboard",
            description: "Completed the introductory Python certificate covering programming fundamentals and problem-solving basics.",
            certificateLink: "introduction%20to%20python.pdf"
        }
    ],

    achievements: [
        {
            icon: "🏆",
            title: "Ranked Top 8.3% in GirlScript Summer of Code 2025",
            organization: "GSSoC 2025",
            description: "Achieved Top 8.3% rank with 8 merged pull requests."
        },
        {
            icon: "🥈",
            title: "Finalist - Smart India Hackathon 2025",
            organization: "SIH 2025 Hardware Edition",
            description: "Qualified as a finalist in the Smart India Hackathon hardware track."
        },
        {
            icon: "⭐",
            title: "3rd Prize Winner - VIT Vellore CodeCortex 2.0",
            organization: "Hackathon 2025",
            description: "Won third prize for building a practical and impactful solution under hackathon constraints."
        }
    ]
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioData;
}