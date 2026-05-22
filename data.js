// Portfolio Data - All static content
const portfolioData = {
    skills: [
        {
            title: "Machine Learning",
            icon: "🧠",
            skills: [
                { name: "Numpy", proficiency: 85 },
                { name: "Pandas", proficiency: 90 },
                { name: "NLP", proficiency: 80 }
            ]
        },
        {
            title: "Backend Development",
            icon: "🖥️",
            skills: [
                { name: "PHP", proficiency: 70 },
                { name: "Python", proficiency: 95 },
                { name: "Java", proficiency: 75 },
                { name: "Flask", proficiency: 85 }
            ]
        },
        {
            title: "Frontend Development",
            icon: "🎨",
            skills: [
                { name: "HTML5", proficiency: 95 },
                { name: "CSS3", proficiency: 90 },
                { name: "JavaScript", proficiency: 85 }
            ]
        },
        {
            title: "Database",
            icon: "🗄️",
            skills: [
                { name: "MySQL", proficiency: 80 },
                { name: "SQLite", proficiency: 85 },
                { name: "PostgreSQL", proficiency: 75 }
            ]
        },
        {
            title: "Deep Learning",
            icon: "🧠",
            skills: [
                { name: "TensorFlow", proficiency: 75 },
                { name: "PyTorch", proficiency: 80 }
            ]
        }
    ],

    achievements: [
        {
            icon: "🏆",
            title: "Screen Smart Ideathon Winner",
            organization: "IEEE Student Branch, REVA University",
            description: "Proposed an innovative solution for reducing screen time among students, utilizing that time for upskilling."
        },
        {
            icon: "🥈",
            title: "Finalist in AI Hackathon",
            organization: "Entellika Sparc AI Hackathon",
            description: "Developed a Python Tkinter app for matching top 5 internships based on resume skills using binary classification and Naive Bayes."
        },
        {
            icon: "⭐",
            title: "Winner at UI/UX Design Challenge",
            organization: "IIT Jammu",
            description: "Designed an e-commerce platform showcasing Indian state-specific handicrafts, promoting cultural heritage."
        },
        {
            icon: "🎤",
            title: "Vexa Chatbot Launch Presentation",
            organization: "REVA University",
            description: "Delivered an 8-minute talk on the Vexa Chatbot launch, showcasing technical details and project impact to peers and faculty."
        }
    ],

    hobbies: [
        {
            icon: "💻",
            title: "Coding",
            description: "Building side projects and exploring new technologies to fuel my passion for software development."
        },
        {
            icon: "👨‍🏫",
            title: "Educating Others",
            description: "Sharing knowledge in Python and tech concepts, driven by a passion for teaching."
        },
        {
            icon: "📖",
            title: "Reading",
            description: "Keeping up with tech trends through blogs and articles."
        },
        {
            icon: "🎨",
            title: "Digital Art",
            description: "Creating digital artwork and experimenting with UI/UX design."
        }
    ],

    projects: [
        {
            title: "Vexa Chatbot",
            description: "An AI-powered chatbot for Sahayak Organization, assisting users with queries about underprivileged children's development.",
            technologies: ["Python", "Deep Learning", "PyTorch", "Flask", "HTML", "CSS"],
            githubLink: "https://github.com/BChaitanyaReddy895/vexa_chatbot",
            liveLink: "https://chaitanya895-sahayak.hf.space",
            image: "Vexa Chatbot.png",
            video: "https://drive.google.com/file/d/1zNCedqcqOxuD4WvIqn47wZLqG-jG5Qkf/view?usp=sharing",
            role: "Lead Developer and Presenter",
            contributions: [
                "Designed and implemented the chatbot's NLP pipeline using PyTorch",
                "Developed the Flask backend for seamless user interaction",
                "Presented the project in an 8-minute talk at 1 year anniversary of sahayak organization, explaining its functioning, impact and its future goals"
            ]
        },
        {
            title: "Bangla to English Translator",
            description: "A machine learning model translating Bangla text, images, PDFs, and websites to English using NLP and web crawling techniques with advanced search mechanisms.",
            technologies: ["Python", "NLP", "HTML", "CSS", "JavaScript"],
            githubLink: "https://github.com/BChaitanyaReddy895/Bengali_English_translator",
            liveLink: "https://chaitanya895-bangla-translator.hf.space",
            image: "translator.jpg",
            role: "Lead Developer and Machine Learning Engineer",
            contributions: [
                "Built the NLP model for accurate Bangla-to-English translation",
                "Integrated web crawling for real-time website translation and advance search mechanisms",
                "Designed the user interface for accessibility and ease of use"
            ]
        },
        {
            title: "Multi Agentic AI For Sustainable Farming",
            description: "It is an AI-powered platform designed to assist farmers with smart crop recommendations, weather insights, market trends, and sustainability tracking. Built by a team of four, it supports multiple languages and promotes eco-friendly practices—empowering farmers through technology, data, and informed decision-making for a better tomorrow.",
            technologies: ["AI", "Machine Learning", "Python", "Streamlit", "Plotly", "Agentic AI"],
            githubLink: "https://github.com/BChaitanyaReddy895/Agentic-AI-for-Sustainable-Farming",
            liveLink: "https://chaitanya895-multiagenticai.hf.space",
            image: "agenticAI.png",
            role: "Lead Developer and Team Contributor",
            contributions: [
                "Designed the Architecture of each agent, describing what each agent does",
                "Designed modern and user friendly interface that supports the farmers in using it in a better way for getting the smart recommendations and enhancing their productivity",
                "Worked on the features includes the soil analysis where i had provided the option to the users to upload the soil images for analysis, Crop Rotation Planner for suggesting the crops to maintain the fertility of the soil",
                "implemented the features include Fertilizer Optimization Calculator that suggests the farmers for optimum use of fertilizers per hectare and Sustainability Score Tracker for tracking the sustainability score"
            ]
        }
    ],

    education: [
        {
            degree: "B.Tech in Computer Science and Engineering",
            institution: "REVA University",
            period: "2023-2027",
            description: "Specializing in Python, C, Java, Machine Learning, and NLP.",
            achievements: [
                "Won IEEE Ideathon at REVA University",
                "Developed Bangla to English translation model for industrial use",
                "Participated in Entellika Sparc AI Hackathon and IIT Jammu UI/UX Challenge",
                "Delivered an 8-minute talk on Vexa Chatbot launch to peers and faculty"
            ]
        }
    ],

    certifications: [
        {
            title: "MeViTechnologies LLP certificate of appreciation for outstanding performance and exceptional dedication through out the SDP on NLP",
            platform: "MeViTechnologies",
            year: "November 2024",
            description: "Completed a comprehensive course on NLP from the skill development program conducted at REVA University",
            certificateLink: "https://drive.google.com/file/d/18feyqzNhxoHeFcpjUGtwYECxhJTGlneI/view?usp=sharing",
            badge: "certifications/sdpnlp.jpg"
        },
        {
            title: "Art of C Programming",
            platform: "Swayam",
            year: "June 2024",
            description: "Art of C Programming Course Completion with a consolidate score of 89%.",
            certificateLink: "https://drive.google.com/file/d/1p4lkzUMqFGtBKJk8ppuSgiyCrR9MrYvS/view?usp=drive_link",
            badge: "certifications/Screenshot 2025-07-14 203706.png"
        }
    ],

    volunteerExperience: [
        {
            role: "Core Team Member",
            organization: "Sahayak Organization (NGO)",
            period: "2025",
            description: "Developed the Vexa Chatbot to support queries about underprivileged children's development.",
            contributions: [
                "Led the development of the chatbot's AI backend",
                "Presented the project to stakeholders in an 8-minute talk"
            ]
        }
    ],

    talks: [
        {
            title: "Vexa Chatbot Launch – Speaker Session",
            event: "REVA University Tech Talk",
            date: "July 2025",
            description: "Delivered an 8-minute presentation on the Vexa Chatbot, covering its technical architecture, impact, and deployment for the Sahayak Organization.",
            videoLink: "https://drive.google.com/file/d/1zNCedqcqOxuD4WvIqn47wZLqG-jG5Qkf/view?usp=sharing"
        }
    ]
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioData;
}
