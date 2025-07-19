// Event data
const eventForms = [
    {
        title: "Quiz Competition",
        description: "Test your technical knowledge in our comprehensive tech quiz challenge",
        icon: "brain-circuit",
        formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSeRk8rqmXJnPM2qDaMcJxnralgZ2EdYrwK_Jfr4lgnABvwJpw/viewform?usp=sharing",
        timing: "1:45 PM - 2:45 PM",
        venue: "Seminar Hall",
        date: "April 7th, 2025",
        fee: "Free"
    },
    {
        title: "Blind Typing",
        description: "Show off your typing speed and accuracy without looking at the keyboard",
        icon: "keyboard",
        formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSeCpP5FjhcbOUqiJSRzLFxby7XlPImYqQNi5_u_r8Esx5Sw8Q/viewform?usp=sharing",
        timing: "2:50 PM - 3:50 PM",
        venue: "IT Block",
        date: "April 7th, 2025",
        fee: "₹50 Per Team"
    },
    {
        title: "Coding Competition",
        description: "Solve exciting programming challenges and compete with the best.",
        icon: "code-2",
        formUrl: "https://docs.google.com/forms/d/e/1FAIpQLScqb7AZuRyiuqT3_pDNY4hqSYB5JwPK1qypS75qEmrtnPIFXw/viewform?usp=sharing",
        timing: "2:50 PM - 3:50 PM",
        venue: "IT Block",
        date: "April 7th, 2025",
        fee: "₹50 Per Team"
    },
    {
        title: "Web Design",
        description: "Create stunning websites and showcase your design skills",
        icon: "globe-2",
        formUrl: "https://docs.google.com/forms/d/e/1FAIpQLScXiq-X04AQ9w8xowqqZfmmL7Ayu1SyjzwCoFUtqG1J8U64xA/viewform?usp=sharing",
        timing: "2:15 PM - 3:30 PM",
        venue: "IT Block",
        date: "April 8th, 2025",
        fee: "₹50 Per Team"
    },
    {
        title: "Capture The Flag",
        description: "Put your cybersecurity skills to the test in our CTF challenge",
        icon: "flag",
        formUrl: "https://docs.google.com/forms/d/e/1FAIpQLScUk5kHvU5Zoq2Gpl13mIJ8ru4rk7Ir8u_0KqTa_H-KOk2Skg/viewform?usp=sharing",
        timing: "2:15 PM - 3:30 PM",
        venue: "IT Block",
        date: "April 8th, 2025",
        fee: "₹50 Per Team"
    }
];

// Function to create stars
function createStars() {
    const starsContainer = document.getElementById('stars');
    const numberOfStars = 500; // Increased number of stars

    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Random position
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        
        // Random size class with weighted distribution
        const size = Math.random();
        if (size < 0.5) {
            star.classList.add('small');
        } else if (size < 0.8) {
            star.classList.add('medium');
        } else if (size < 0.95) {
            star.classList.add('large');
        } else {
            star.classList.add('super');
        }
        
        // Random twinkle duration
        const duration = 2 + Math.random() * 4;
        star.style.setProperty('--duration', `${duration}s`);
        
        // Random delay
        star.style.animationDelay = `${Math.random() * 2}s`;
        
        // Random rotation for more natural look
        star.style.transform = `rotate(${Math.random() * 360}deg)`;
        
        // Add some stars with different colors
        if (Math.random() < 0.1) {
            const hue = Math.random() * 60 - 30; // Random hue between -30 and 30
            star.style.filter = `drop-shadow(0 0 2px rgba(255, 255, 255, 0.8)) hue-rotate(${hue}deg)`;
        }
        
        starsContainer.appendChild(star);
    }
}

// Function to create event cards
function createEventCard(event) {
    return `
        <div class="event-card">
            <div class="event-icon-container">
                <i data-lucide="${event.icon}" class="event-icon"></i>
            </div>
            <h3 class="event-title">${event.title}</h3>
            <p class="event-description">${event.description}</p>
            <div class="event-details">
                <div class="event-detail">
                    <i data-lucide="calendar" class="detail-icon"></i>
                    <span>${event.date}</span>
                </div>
                <div class="event-detail">
                    <i data-lucide="clock" class="detail-icon"></i>
                    <span>${event.timing}</span>
                </div>
                <div class="event-detail">
                    <i data-lucide="map-pin" class="detail-icon"></i>
                    <span>${event.venue}</span>
                </div>
                <div class="event-detail">
                    <i data-lucide="ticket" class="detail-icon"></i>
                    <span>Entry Fee: ${event.fee}</span>
                </div>
            </div>
            <a href="${event.formUrl}" target="_blank" rel="noopener noreferrer" class="register-button">
                Register Now
            </a>
        </div>
    `;
}

// Function to handle hamburger menu
function initializeHamburgerMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinksContainer = document.querySelector('.nav-links-container');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinksContainer.classList.toggle('active');
    });

    // Handle navigation clicks
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // If it's a section link (starts with #)
            if (href.startsWith('#') && href !== '#') {
                e.preventDefault();
                const targetSection = document.querySelector(href);
                if (targetSection) {
                    // Close the menu
                    hamburger.classList.remove('active');
                    navLinksContainer.classList.remove('active');
                    
                    // Scroll to section with offset for fixed header
                    const offset = 80; // Adjust this value based on your header height
                    const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - offset;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            } else {
                // Close menu for non-section links
                hamburger.classList.remove('active');
                navLinksContainer.classList.remove('active');
            }
        });
    });
}

// Populate events grid
document.addEventListener('DOMContentLoaded', () => {
    const eventsGrid = document.getElementById('eventsGrid');
    eventsGrid.innerHTML = eventForms.map(event => createEventCard(event)).join('');
    
    // Create stars
    createStars();
    
    // Initialize hamburger menu
    initializeHamburgerMenu();
    
    // Reinitialize icons for dynamically added content
    lucide.createIcons();
});