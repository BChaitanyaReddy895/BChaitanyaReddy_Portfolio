// Main Application Logic
class Portfolio {
    constructor() {
        this.data = portfolioData;
        this.init();
    }

    init() {
        document.addEventListener('DOMContentLoaded', () => {
            this.renderSkills();
            this.renderProjects();
            this.renderEducation();
            this.renderCertifications();
            this.renderAchievements();
            this.renderVolunteer();
            this.renderTalks();
            this.renderHobbies();
            this.renderReviews();
            this.attachEventListeners();
        });
    }

    // ========== Rendering Methods ==========

    renderSkills() {
        const container = document.getElementById('skills-container');
        if (!container) return;

        container.innerHTML = this.data.skills.map(skillGroup => `
            <div class="skill-category">
                <h3>${skillGroup.icon} ${skillGroup.title}</h3>
                <div>
                    ${skillGroup.skills.map(skill => `
                        <div class="skill-item">
                            <div class="skill-name">
                                <span>${skill.name}</span>
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

    renderProjects() {
        const container = document.getElementById('projects-container');
        if (!container) return;

        container.innerHTML = this.data.projects.map(project => `
            <div class="project-card">
                <div class="project-header">
                    <h3>${project.title}</h3>
                    <div class="project-role">${project.role}</div>
                </div>
                <div class="project-body">
                    <p class="project-description">${project.description}</p>
                    
                    <div class="project-tech">
                        ${project.technologies.map(tech => `
                            <span class="tech-tag">${tech}</span>
                        `).join('')}
                    </div>

                    <div class="project-links">
                        <a href="${project.githubLink}" target="_blank">GitHub</a>
                        <a href="${project.liveLink}" target="_blank">Live Demo</a>
                        ${project.video ? `<a href="${project.video}" target="_blank">Video</a>` : ''}
                    </div>

                    <div class="project-contributions">
                        <h4>Key Contributions:</h4>
                        <ul>
                            ${project.contributions.map(contrib => `
                                <li>${contrib}</li>
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

        container.innerHTML = this.data.education.map(edu => `
            <div class="timeline-item">
                <h3>${edu.degree}</h3>
                <div class="timeline-meta">${edu.institution} • ${edu.period}</div>
                <p class="timeline-description">${edu.description}</p>
                <ul class="timeline-list">
                    ${edu.achievements.map(achievement => `
                        <li>${achievement}</li>
                    `).join('')}
                </ul>
            </div>
        `).join('');
    }

    renderCertifications() {
        const container = document.getElementById('certifications-container');
        if (!container) return;

        container.innerHTML = this.data.certifications.map(cert => `
            <div class="cert-card">
                <h3>${cert.title}</h3>
                <div class="cert-platform">${cert.platform}</div>
                <div class="cert-year">${cert.year}</div>
                <p class="cert-description">${cert.description}</p>
                <a href="${cert.certificateLink}" target="_blank" class="cert-link">View Certificate →</a>
            </div>
        `).join('');
    }

    renderAchievements() {
        const container = document.getElementById('achievements-container');
        if (!container) return;

        container.innerHTML = this.data.achievements.map(achievement => `
            <div class="achievement-card">
                <div class="card-icon">${achievement.icon}</div>
                <h3>${achievement.title}</h3>
                <div class="card-meta">${achievement.organization}</div>
                <p class="card-description">${achievement.description}</p>
            </div>
        `).join('');
    }

    renderVolunteer() {
        const container = document.getElementById('volunteer-container');
        if (!container) return;

        container.innerHTML = this.data.volunteerExperience.map(volunteer => `
            <div class="timeline-item">
                <h3>${volunteer.role}</h3>
                <div class="timeline-meta">${volunteer.organization} • ${volunteer.period}</div>
                <p class="timeline-description">${volunteer.description}</p>
                <ul class="timeline-list">
                    ${volunteer.contributions.map(contrib => `
                        <li>${contrib}</li>
                    `).join('')}
                </ul>
            </div>
        `).join('');
    }

    renderTalks() {
        const container = document.getElementById('talks-container');
        if (!container) return;

        container.innerHTML = this.data.talks.map(talk => `
            <div class="talk-card">
                <div class="card-icon">🎤</div>
                <h3>${talk.title}</h3>
                <div class="card-meta">${talk.event}</div>
                <p class="card-description">${talk.description}</p>
                <div class="talk-date">${talk.date}</div>
                ${talk.videoLink ? `<a href="${talk.videoLink}" target="_blank" style="color: var(--primary-color); margin-top: 10px; display: inline-block; text-decoration: none;">Watch Video →</a>` : ''}
            </div>
        `).join('');
    }

    renderHobbies() {
        const container = document.getElementById('hobbies-container');
        if (!container) return;

        container.innerHTML = this.data.hobbies.map(hobby => `
            <div class="hobby-card">
                <div class="card-icon">${hobby.icon}</div>
                <h3>${hobby.title}</h3>
                <p class="card-description">${hobby.description}</p>
            </div>
        `).join('');
    }

    renderReviews() {
        const container = document.getElementById('reviews-list');
        if (!container) return;

        const reviews = StorageManager.getReviews();

        if (reviews.length === 0) {
            container.innerHTML = '<p style="color: var(--text-secondary); grid-column: 1/-1; text-align: center; padding: 40px;">No reviews yet. Be the first to leave one!</p>';
            return;
        }

        container.innerHTML = reviews.map(review => `
            <div class="review-card">
                <div class="review-header">
                    <div class="review-name">${this.escapeHtml(review.name)}</div>
                    <div class="review-rating">${'⭐'.repeat(review.rating)}</div>
                </div>
                <p class="review-text">${this.escapeHtml(review.description)}</p>
                <div class="review-actions">
                    <span class="review-delete" onclick="portfolio.deleteReview(${review.id})">Delete</span>
                </div>
            </div>
        `).join('');
    }

    // ========== Event Handlers ==========

    attachEventListeners() {
        // Review form submission
        const reviewForm = document.getElementById('review-form');
        if (reviewForm) {
            reviewForm.addEventListener('submit', (e) => this.handleReviewSubmit(e));
        }

        // Contact form submission
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => this.handleContactSubmit(e));
        }
    }

    handleReviewSubmit(e) {
        e.preventDefault();

        const name = document.getElementById('review-name').value.trim();
        const description = document.getElementById('review-description').value.trim();
        const rating = document.getElementById('review-rating').value;

        // Validation
        if (!name || !description || !rating) {
            alert('Please fill in all fields');
            return;
        }

        if (name.length > 100) {
            alert('Name is too long (max 100 characters)');
            return;
        }

        if (description.length > 500) {
            alert('Review is too long (max 500 characters)');
            return;
        }

        try {
            StorageManager.addReview(name, rating, description);
            
            // Clear form
            document.getElementById('review-form').reset();
            
            // Re-render reviews
            this.renderReviews();
            
            // Show success message
            alert('Review submitted successfully!');
        } catch (error) {
            console.error('Error submitting review:', error);
            alert('Error submitting review. Please try again.');
        }
    }

    deleteReview(id) {
        const password = prompt('Enter admin password to delete this review:');
        if (password === null) return;

        if (!StorageManager.validatePassword(password)) {
            alert('Invalid password');
            return;
        }

        try {
            StorageManager.deleteReview(id);
            this.renderReviews();
            alert('Review deleted successfully!');
        } catch (error) {
            console.error('Error deleting review:', error);
            alert('Error deleting review');
        }
    }

    handleContactSubmit(e) {
        e.preventDefault();

        const email = document.getElementById('contact-email').value.trim();
        const message = document.getElementById('contact-message').value.trim();
        const statusDiv = document.getElementById('contact-status');

        // Validation
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

        // Send via EmailJS
        this.sendEmail(email, message, statusDiv);
    }

    sendEmail(email, message, statusDiv) {
        // EmailJS Integration
        // Replace with your EmailJS Service ID, Template ID, and Public Key
        const SERVICE_ID = 'service_portfolio';
        const TEMPLATE_ID = 'template_portfolio';
        const PUBLIC_KEY = 'your_emailjs_public_key';

        // Check if EmailJS is loaded
        if (typeof emailjs === 'undefined') {
            // Fallback: Save message to localStorage and show success
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
            (response) => {
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
        // Fallback message storage in localStorage
        try {
            let messages = JSON.parse(localStorage.getItem('portfolio_messages') || '[]');
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

// Initialize portfolio when DOM is ready
let portfolio;
document.addEventListener('DOMContentLoaded', () => {
    portfolio = new Portfolio();
});
