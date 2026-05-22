// Main Application Logic
class Portfolio {
    constructor() {
        this.data = portfolioData;
        this.init();
    }

    init() {
        this.renderHero();
        this.renderAbout();
        this.renderSkills();
        this.renderHobbies();
        this.renderExperience();
        this.renderProjects();
        this.renderEducation();
        this.renderAchievements();
        this.renderResume();
        this.attachEventListeners();
    }

    // ========== Rendering Methods ==========

    renderHero() {
        const name = document.getElementById('hero-name');
        if (name) {
            name.textContent = this.data.hero.name;
        }

        const subtitle = document.getElementById('hero-subtitle');
        if (subtitle) {
            subtitle.textContent = this.data.hero.subtitle;
        }

        const titleLine = document.getElementById('hero-titleline');
        if (titleLine) {
            titleLine.textContent = this.data.hero.titleLine;
        }

        const summary = document.getElementById('hero-summary');
        if (summary) {
            summary.textContent = this.data.hero.summary;
        }

        const rolesContainer = document.getElementById('hero-roles');
        if (rolesContainer) {
            rolesContainer.innerHTML = this.data.hero.titleLine.split(' | ').map(role => `
                <span class="hero-role">${this.escapeHtml(role)}</span>
            `).join('');
        }
    }

    renderAbout() {
        const summary = document.getElementById('about-summary');
        if (summary) {
            summary.textContent = this.data.about.summary;
        }

        const profileList = document.getElementById('about-profile');
        if (profileList) {
            profileList.innerHTML = this.data.about.profile.map(item => `
                <div class="profile-pill">${this.escapeHtml(item)}</div>
            `).join('');
        }

        const stats = document.getElementById('about-stats');
        if (stats) {
            stats.innerHTML = this.data.about.stats.map(stat => `
                <div class="about-stat">
                    <h3>${this.escapeHtml(stat.value)}</h3>
                    <p>${this.escapeHtml(stat.label)}</p>
                </div>
            `).join('');
        }

        const container = document.getElementById('about-highlights');
        if (!container) return;

        container.innerHTML = this.data.about.highlights.map(highlight => `
            <div class="about-card">
                <h3>${this.escapeHtml(highlight.title)}</h3>
                <p>${this.escapeHtml(highlight.description)}</p>
            </div>
        `).join('');
    }

    renderHobbies() {
        const container = document.getElementById('hobbies-container');
        if (!container) return;

        container.innerHTML = this.data.hobbies.map(hobby => `
            <div class="hobby-card">
                <div class="card-icon">${hobby.icon}</div>
                <h3>${this.escapeHtml(hobby.title)}</h3>
                <p class="card-description">${this.escapeHtml(hobby.description)}</p>
            </div>
        `).join('');
    }

    renderSkills() {
        const container = document.getElementById('skills-container');
        if (!container) return;

        container.innerHTML = this.data.skills.map(skillGroup => `
            <div class="skill-category">
                <h3>${skillGroup.icon} ${this.escapeHtml(skillGroup.title)}</h3>
                <div>
                    ${skillGroup.skills.map(skill => `
                        <div class="skill-item">
                            <div class="skill-name">
                                <span>${this.escapeHtml(skill.name)}</span>
                                <span class="skill-proficiency">${skill.proficiency}%</span>
                            </div>
                            <div class="skill-bar">
                                <div class="skill-fill" style="width: ${skill.proficiency}%"></div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('');
    }

    renderExperience() {
        const container = document.getElementById('experience-container');
        if (!container) return;

        container.innerHTML = this.data.experience.map(experience => `
            <div class="timeline-item">
                <h3>${this.escapeHtml(experience.role)}</h3>
                <div class="timeline-meta">${this.escapeHtml(experience.organization)} • ${this.escapeHtml(experience.period)}</div>
                <p class="timeline-description">${this.escapeHtml(experience.description)}</p>
                <ul class="timeline-list">
                    ${experience.contributions.map(contribution => `
                        <li>${this.escapeHtml(contribution)}</li>
                    `).join('')}
                </ul>
            </div>
        `).join('');
    }

    renderProjects() {
        const container = document.getElementById('projects-container');
        if (!container) return;

        container.innerHTML = this.data.projects.map(project => `
            <div class="project-card">
                <div class="project-header">
                    <h3>${this.escapeHtml(project.title)}</h3>
                    <div class="project-role">${this.escapeHtml(project.role)}</div>
                </div>
                <div class="project-body">
                    <p class="project-description">${this.escapeHtml(project.description)}</p>

                    <div class="project-tech">
                        ${project.technologies.map(tech => `
                            <span class="tech-tag">${this.escapeHtml(tech)}</span>
                        `).join('')}
                    </div>

                    <div class="project-links">
                        <a href="${project.githubLink}" target="_blank">GitHub</a>
                        ${project.liveLink ? `<a href="${project.liveLink}" target="_blank">Live Demo</a>` : ''}
                    </div>

                    <div class="project-contributions">
                        <h4>Key Contributions:</h4>
                        <ul>
                            ${project.contributions.map(contribution => `
                                <li>${this.escapeHtml(contribution)}</li>
                            `).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        `).join('');
    }

    renderEducation() {
        const container = document.getElementById('education-container');
        if (!container) return;

        container.innerHTML = this.data.education.map(education => `
            <div class="timeline-item">
                <h3>${this.escapeHtml(education.degree)}</h3>
                <div class="timeline-meta">${this.escapeHtml(education.institution)} • ${this.escapeHtml(education.period)}</div>
                <p class="timeline-description">${this.escapeHtml(education.description)}</p>
                <ul class="timeline-list">
                    ${education.achievements.map(achievement => `
                        <li>${this.escapeHtml(achievement)}</li>
                    `).join('')}
                </ul>
            </div>
        `).join('');
    }

    renderAchievements() {
        const container = document.getElementById('achievements-container');
        if (!container) return;

        container.innerHTML = this.data.achievements.map(achievement => `
            <div class="achievement-card">
                <div class="card-icon">${achievement.icon}</div>
                <h3>${this.escapeHtml(achievement.title)}</h3>
                <div class="card-meta">${this.escapeHtml(achievement.organization)}</div>
                <p class="card-description">${this.escapeHtml(achievement.description)}</p>
            </div>
        `).join('');
    }

    renderResume() {
        const container = document.getElementById('resume-container');
        if (!container) return;

        container.innerHTML = `
            <div class="resume-panel">
                <h3>${this.escapeHtml(this.data.resume.title)}</h3>
                <p>${this.escapeHtml(this.data.resume.description)}</p>
                <div class="resume-actions">
                    ${this.data.resume.actions.map(action => `
                        <a class="btn ${action.label === 'Download Resume' ? 'btn-primary' : 'btn-secondary'}" href="${action.href}" ${action.href.startsWith('http') ? 'target="_blank"' : 'download'}>${this.escapeHtml(action.label)}</a>
                    `).join('')}
                </div>
                <ul class="resume-highlights">
                    ${this.data.resume.items.map(item => `<li>${this.escapeHtml(item)}</li>`).join('')}
                </ul>
            </div>
        `;
    }

    // ========== Event Handlers ==========

    attachEventListeners() {
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => this.handleContactSubmit(e));
        }
    }

    handleContactSubmit(e) {
        e.preventDefault();

        const email = document.getElementById('contact-email').value.trim();
        const message = document.getElementById('contact-message').value.trim();
        const statusDiv = document.getElementById('contact-status');

        if (!email || !message) {
            statusDiv.textContent = 'Please fill in all fields';
            statusDiv.classList.add('error');
            return;
        }

        if (message.length > 1000) {
            statusDiv.textContent = 'Message is too long (max 1000 characters)';
            statusDiv.classList.add('error');
            return;
        }

        this.sendEmail(email, message, statusDiv);
    }

    sendEmail(email, message, statusDiv) {
        const SERVICE_ID = 'service_portfolio';
        const TEMPLATE_ID = 'template_portfolio';
        const PUBLIC_KEY = 'your_emailjs_public_key';

        if (typeof emailjs === 'undefined') {
            this.saveFallbackMessage(email, message, statusDiv);
            return;
        }

        emailjs.init(PUBLIC_KEY);

        const templateParams = {
            to_email: 'bchaitanyareddy895@gmail.com',
            from_email: email,
            message: message,
            reply_to: email
        };

        statusDiv.classList.remove('error');
        statusDiv.textContent = 'Sending...';

        emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams).then(
            () => {
                statusDiv.textContent = 'Message sent successfully!';
                statusDiv.classList.remove('error');
                document.getElementById('contact-form').reset();
                setTimeout(() => {
                    statusDiv.textContent = '';
                }, 3000);
            },
            (error) => {
                console.error('EmailJS Error:', error);
                statusDiv.textContent = 'Error sending message. Please try again.';
                statusDiv.classList.add('error');
            }
        );
    }

    saveFallbackMessage(email, message, statusDiv) {
        try {
            const messages = JSON.parse(localStorage.getItem('portfolio_messages') || '[]');
            messages.push({
                email: email,
                message: message,
                timestamp: new Date().toISOString()
            });
            localStorage.setItem('portfolio_messages', JSON.stringify(messages));

            statusDiv.textContent = 'Message saved (Email service not configured). Please check console.';
            statusDiv.classList.remove('error');
            document.getElementById('contact-form').reset();
            console.log('Message saved to localStorage:', { email, message });

            setTimeout(() => {
                statusDiv.textContent = '';
            }, 3000);
        } catch (error) {
            statusDiv.textContent = 'Error saving message';
            statusDiv.classList.add('error');
        }
    }

    // ========== Utility Methods ==========

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

let portfolio;
document.addEventListener('DOMContentLoaded', () => {
    portfolio = new Portfolio();
});