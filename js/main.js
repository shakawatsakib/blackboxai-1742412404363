// Language Toggle Functionality
const languageToggle = document.getElementById('languageToggle');
const elementsToTranslate = document.querySelectorAll('[data-translate]');
let currentLanguage = 'en';

const translations = {
    en: {
        'nav-home': 'Home',
        'nav-complaint': 'File a Complaint',
        'nav-blood': 'Blood Donation',
        'nav-health': 'Free Health Treatment',
        'nav-donate': 'Donate Us',
        'nav-about': 'About Us',
        'nav-login': 'Login',
        'hero-title': 'Unity Force Bangladesh',
        'hero-subtitle': 'Dedicated to harmony, unity, and humanitarian service in Chattogram, Bangladesh',
        'emergency-title': 'Emergency Helpline',
        'members-title': 'Our Founding Members',
        'stations-title': 'Police Stations in Chattogram',
        'footer-text': '© 2024 Unity Force Bangladesh. All rights reserved.',
        'language-toggle': 'বাংলা',
    },
    bn: {
        'nav-home': 'হোম',
        'nav-complaint': 'অভিযোগ দাখিল',
        'nav-blood': 'রক্তদান',
        'nav-health': 'ফ্রি স্বাস্থ্য সেবা',
        'nav-donate': 'অনুদান',
        'nav-about': 'আমাদের সম্পর্কে',
        'nav-login': 'লগইন',
        'hero-title': 'ইউনিটি ফোর্স বাংলাদেশ',
        'hero-subtitle': 'চট্টগ্রামে সম্প্রীতি, ঐক্য এবং মানবিক সেবায় নিবেদিত',
        'emergency-title': 'জরুরি হটলাইন',
        'members-title': 'আমাদের প্রতিষ্ঠাতা সদস্যগণ',
        'stations-title': 'চট্টগ্রামের পুলিশ স্টেশনসমূহ',
        'footer-text': '© ২০২৪ ইউনিটি ফোর্স বাংলাদেশ। সর্বস্বত্ব সংরক্ষিত।',
        'language-toggle': 'English',
    }
};

// Police Station Data
const policeStations = [
    {
        name: 'Akbar Shah Police Station',
        address: 'D Block, Housing Estate office, Bishaw Bank, Residential Colony',
        direction: '½ km from City gate by CDA Road No-1'
    },
    {
        name: 'Bayazid Bostami Police Station',
        address: 'Thana Road, Mohammad Nagar',
        direction: '1/2 km East from Textile circle'
    },
    // Add all other police stations here
];

// Initialize language
function initializeLanguage() {
    updateLanguage();
    if (document.querySelector('.stations-grid')) {
        renderPoliceStations();
    }
}

// Language toggle handler
languageToggle.addEventListener('click', () => {
    currentLanguage = currentLanguage === 'en' ? 'bn' : 'en';
    updateLanguage();
});

function updateLanguage() {
    elementsToTranslate.forEach(element => {
        const translationKey = element.getAttribute('data-translate');
        if (translations[currentLanguage][translationKey]) {
            element.textContent = translations[currentLanguage][translationKey];
        }
    });
    languageToggle.textContent = translations[currentLanguage]['language-toggle'];
}

// Render police stations
function renderPoliceStations() {
    const stationsGrid = document.querySelector('.stations-grid');
    if (!stationsGrid) return;

    policeStations.forEach(station => {
        const stationCard = document.createElement('div');
        stationCard.className = 'station-card';
        stationCard.innerHTML = `
            <h3 class="station-name">${station.name}</h3>
            <p class="station-details"><strong>Address:</strong> ${station.address}</p>
            <p class="station-details"><strong>Direction:</strong> ${station.direction}</p>
        `;
        stationsGrid.appendChild(stationCard);
    });
}

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (navMenu && navMenu.classList.contains('active') && !e.target.closest('.nav-container')) {
        navMenu.classList.remove('active');
    }
});

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeLanguage);
