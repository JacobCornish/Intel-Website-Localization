// Intel Sustainability Website - Interactive JavaScript
// Features: Auto RTL detection, Form validation, Accessibility enhancements, Translations

// Translation object
const translations = {
  en: {
    heroTitle: "Sustainability Through the Ages",
    heroText: "Explore Intel's journey through time, discovering how our commitment to innovation has shaped a more sustainable future for technology and our planet.",
    pillarsTitle: "Our Sustainability Pillars",
    climateTitle: "Climate Action",
    climateText: "Committed to achieving net-zero greenhouse gas emissions by 2040 through renewable energy adoption and innovative manufacturing processes.",
    waterTitle: "Water Stewardship",
    waterText: "Restoring more water than we consume and ensuring sustainable water management across all our global operations and communities.",
    circularTitle: "Circular Economy",
    circularText: "Achieving zero waste to landfill and designing products for maximum reuse, recycling, and responsible end-of-life management.",
    learnMore: "Learn More",
    timelineTitle: "Intel's Sustainability Journey",
    subscriptionTitle: "Stay Updated on Our Sustainability Journey",
    subscriptionText: "Subscribe to our sustainability newsletter and receive the latest updates on Intel's environmental initiatives, innovations, and impact.",
    nameLabel: "Full Name",
    emailLabel: "Email Address",
    interestLabel: "Area of Interest",
    selectArea: "Select an area...",
    climate: "Climate Action",
    water: "Water Stewardship",
    circular: "Circular Economy",
    allTopics: "All Sustainability Topics",
    consentText: "I agree to receive sustainability updates from Intel",
    subscribeBtn: "Subscribe Now",
    successMessage: "Thank you for subscribing! Check your email for confirmation.",
    required: "*",
    footerIntel: "Intel Corporation",
    footerIntelText: "Innovating for a sustainable future through technology and environmental responsibility.",
    footerLinks: "Quick Links",
    footerConnect: "Connect With Us",
    footerCopyright: "© 2024 Intel Corporation. All rights reserved.",
    footerHint: "Hover over cards to reveal details • Scroll to explore the timeline",
    modalTitle: "Intel's RISE Strategy",
    modalSubtitle: "Responsible, Inclusive, Sustainable, Enabling",
    modalText: "Intel's RISE strategy represents our comprehensive approach to corporate responsibility, focusing on four key pillars:",
    modalResponsible: "Responsible",
    modalResponsibleText: "Operating with integrity and transparency in all our business practices.",
    modalInclusive: "Inclusive",
    modalInclusiveText: "Building diverse teams and fostering equality in technology access.",
    modalSustainable: "Sustainable",
    modalSustainableText: "Reducing environmental impact through innovation and efficiency.",
    modalEnabling: "Enabling",
    modalEnablingText: "Using technology to create positive change and empower communities.",
    modalGoals: "2030 Goals:",
    modalGoalsText: "Net positive water use, 100% renewable energy, zero waste to landfill, and more.",
    modalClose: "Close",
    modalRead: "Read Full Report",
    riseBtn: "Learn More About RISE"
  },
  ar: {
    heroTitle: "الاستدامة عبر العصور",
    heroText: "استكشف رحلة إنتل عبر الزمن، واكتشف كيف شكل التزامنا بالابتكار مستقبلاً أكثر استدامة للتكنولوجيا وكوكبنا.",
    pillarsTitle: "ركائز الاستدامة لدينا",
    climateTitle: "العمل المناخي",
    climateText: "ملتزمون بتحقيق صافي انبعاثات صفرية من غازات الدفيئة بحلول عام 2040 من خلال اعتماد الطاقة المتجددة وعمليات التصنيع المبتكرة.",
    waterTitle: "إدارة المياه",
    waterText: "استعادة المياه أكثر مما نستهلك وضمان إدارة مستدامة للمياه في جميع عملياتنا ومجتمعاتنا العالمية.",
    circularTitle: "الاقتصاد الدائري",
    circularText: "تحقيق صفر نفايات إلى مكب النفايات وتصميم منتجات لتحقيق أقصى قدر من إعادة الاستخدام وإعادة التدوير والإدارة المسؤولة لنهاية العمر.",
    learnMore: "اعرف المزيد",
    timelineTitle: "رحلة إنتل نحو الاستدامة",
    subscriptionTitle: "ابق على اطلاع برحلتنا نحو الاستدامة",
    subscriptionText: "اشترك في نشرتنا الإخبارية حول الاستدامة واحصل على آخر التحديثات حول مبادرات إنتل البيئية والابتكارات والتأثير.",
    nameLabel: "الاسم الكامل",
    emailLabel: "عنوان البريد الإلكتروني",
    interestLabel: "مجال الاهتمام",
    selectArea: "اختر مجالاً...",
    climate: "العمل المناخي",
    water: "إدارة المياه",
    circular: "الاقتصاد الدائري",
    allTopics: "جميع موضوعات الاستدامة",
    consentText: "أوافق على تلقي تحديثات الاستدامة من إنتل",
    subscribeBtn: "اشترك الآن",
    successMessage: "شكراً لك على الاشتراك! تحقق من بريدك الإلكتروني للتأكيد.",
    required: "*",
    footerIntel: "شركة إنتل",
    footerIntelText: "الابتكار من أجل مستقبل مستدام من خلال التكنولوجيا والمسؤولية البيئية.",
    footerLinks: "روابط سريعة",
    footerConnect: "تواصل معنا",
    footerCopyright: "© 2024 شركة إنتل. جميع الحقوق محفوظة.",
    footerHint: "مرر الماوس فوق البطاقات لكشف التفاصيل • قم بالتمرير لاستكشاف الجدول الزمني",
    modalTitle: "استراتيجية RISE من إنتل",
    modalSubtitle: "مسؤولة، شاملة، مستدامة، تمكينية",
    modalText: "تمثل استراتيجية RISE من إنتل نهجنا الشامل للمسؤولية المؤسسية، مع التركيز على أربع ركائز رئيسية:",
    modalResponsible: "مسؤولة",
    modalResponsibleText: "العمل بنزاهة وشفافية في جميع ممارساتنا التجارية.",
    modalInclusive: "شاملة",
    modalInclusiveText: "بناء فرق متنوعة وتعزيز المساواة في الوصول إلى التكنولوجيا.",
    modalSustainable: "مستدامة",
    modalSustainableText: "تقليل التأثير البيئي من خلال الابتكار والكفاءة.",
    modalEnabling: "تمكينية",
    modalEnablingText: "استخدام التكنولوجيا لإحداث تغيير إيجابي وتمكين المجتمعات.",
    modalGoals: "أهداف 2030:",
    modalGoalsText: "استخدام إيجابي صافٍ للمياه، 100٪ طاقة متجددة، صفر نفايات إلى مكب النفايات، والمزيد.",
    modalClose: "إغلاق",
    modalRead: "اقرأ التقرير الكامل",
    riseBtn: "تعرف على المزيد حول RISE"
  },
  he: {
    heroTitle: "קיימות לאורך הדורות",
    heroText: "חקרו את המסע של אינטל לאורך זמן, וגלו כיצד המחויבות שלנו לחדשנות עיצבה עתיד בר-קיימא יותר לטכנולוגיה ולכוכב שלנו.",
    pillarsTitle: "עמודי הקיימות שלנו",
    climateTitle: "פעולה אקלימית",
    climateText: "מחויבים להשיג פליטות אפס נטו של גזי חממה עד 2040 באמצעות אימוץ אנרגיה מתחדשת ותהליכי ייצור חדשניים.",
    waterTitle: "ניהול מים",
    waterText: "החזרת יותר מים ממה שאנו צורכים והבטחת ניהול מים בר-קיימא בכל הפעילות העולמית והקהילות שלנו.",
    circularTitle: "כלכלה מעגלית",
    circularText: "השגת אפס פסולת למזבלה ועיצוב מוצרים לשימוש חוזר מרבי, מיחזור וניהול אחראי של סוף חיים.",
    learnMore: "למד עוד",
    timelineTitle: "מסע הקיימות של אינטל",
    subscriptionTitle: "הישארו מעודכנים במסע הקיימות שלנו",
    subscriptionText: "הירשמו לניוזלטר הקיימות שלנו וקבלו את העדכונים האחרונים על יוזמות הסביבה, החדשנות וההשפעה של אינטל.",
    nameLabel: "שם מלא",
    emailLabel: "כתובת אימייל",
    interestLabel: "תחום עניין",
    selectArea: "בחר תחום...",
    climate: "פעולה אקלימית",
    water: "ניהול מים",
    circular: "כלכלה מעגלית",
    allTopics: "כל נושאי הקיימות",
    consentText: "אני מסכים/ה לקבל עדכוני קיימות מאינטל",
    subscribeBtn: "הירשם עכשיו",
    successMessage: "תודה על ההרשמה! בדקו את האימייל שלכם לאישור.",
    required: "*",
    footerIntel: "תאגיד אינטל",
    footerIntelText: "חדשנות לעתיד בר-קיימא באמצעות טכנולוגיה ואחריות סביבתית.",
    footerLinks: "קישורים מהירים",
    footerConnect: "התחברו אלינו",
    footerCopyright: "© 2024 תאגיד אינטל. כל הזכויות שמורות.",
    footerHint: "העבר את העכבר מעל הכרטיסים כדי לחשוף פרטים • גלול כדי לחקור את ציר הזמן",
    modalTitle: "אסטרטגיית RISE של אינטל",
    modalSubtitle: "אחראית, כוללת, בת-קיימא, מאפשרת",
    modalText: "אסטרטגיית RISE של אינטל מייצגת את הגישה המקיפה שלנו לאחריות תאגידית, תוך התמקדות בארבעה עמודים מרכזיים:",
    modalResponsible: "אחראית",
    modalResponsibleText: "פעילות עם יושרה ושקיפות בכל הנהלים העסקיים שלנו.",
    modalInclusive: "כוללת",
    modalInclusiveText: "בניית צוותים מגוונים וטיפוח שוויון בגישה לטכנולוגיה.",
    modalSustainable: "בת-קיימא",
    modalSustainableText: "הפחתת ההשפעה הסביבתית באמצעות חדשנות ויעילות.",
    modalEnabling: "מאפשרת",
    modalEnablingText: "שימוש בטכנולוגיה ליצירת שינוי חיובי והעצמת קהילות.",
    modalGoals: "יעדי 2030:",
    modalGoalsText: "שימוש חיובי נטו במים, 100% אנרגיה מתחדשת, אפס פסולת למזבלה, ועוד.",
    modalClose: "סגור",
    modalRead: "קרא דוח מלא",
    riseBtn: "למד עוד על RISE"
  }
};

// Auto-detect language and apply RTL mode (BONUS Feature)
document.addEventListener('DOMContentLoaded', function() {
  const languageSelect = document.getElementById('language-select');
  const htmlElement = document.documentElement;
  
  // RTL languages mapping
  const rtlLanguages = ['ar', 'he', 'fa', 'ur'];
  
  // Function to translate content
  function translatePage(langCode) {
    const t = translations[langCode];
    
    // Hero section
    document.querySelector('.hero-section h1').textContent = t.heroTitle;
    document.querySelector('.hero-section p').textContent = t.heroText;
    
    // Features section
    document.querySelector('.features-section h2').textContent = t.pillarsTitle;
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards[0].querySelector('h3').textContent = t.climateTitle;
    featureCards[0].querySelector('p').textContent = t.climateText;
    featureCards[0].querySelector('.learn-more-btn').textContent = t.learnMore;
    
    featureCards[1].querySelector('h3').textContent = t.waterTitle;
    featureCards[1].querySelector('p').textContent = t.waterText;
    featureCards[1].querySelector('.learn-more-btn').textContent = t.learnMore;
    
    featureCards[2].querySelector('h3').textContent = t.circularTitle;
    featureCards[2].querySelector('p').textContent = t.circularText;
    featureCards[2].querySelector('.learn-more-btn').textContent = t.learnMore;
    
    // Timeline
    document.querySelector('.timeline-title').textContent = t.timelineTitle;
    
    // Subscription section
    document.querySelector('#subscription-heading').textContent = t.subscriptionTitle;
    document.querySelector('.subscription-card > p').textContent = t.subscriptionText;
    document.querySelector('label[for="subscriber-name"]').innerHTML = t.nameLabel + ' <span class="text-danger" aria-label="required">' + t.required + '</span>';
    document.querySelector('label[for="subscriber-email"]').innerHTML = t.emailLabel + ' <span class="text-danger" aria-label="required">' + t.required + '</span>';
    document.querySelector('label[for="interest-area"]').textContent = t.interestLabel;
    
    // Interest area options
    const interestSelect = document.getElementById('interest-area');
    interestSelect.options[0].textContent = t.selectArea;
    interestSelect.options[1].textContent = t.climate;
    interestSelect.options[2].textContent = t.water;
    interestSelect.options[3].textContent = t.circular;
    interestSelect.options[4].textContent = t.allTopics;
    
    document.querySelector('label[for="consent-check"]').innerHTML = t.consentText + ' <span class="text-danger" aria-label="required">' + t.required + '</span>';
    document.querySelector('button[type="submit"]').innerHTML = '<i class="bi bi-envelope-check me-2" aria-hidden="true"></i>' + t.subscribeBtn;
    document.querySelector('#success-message').innerHTML = '<i class="bi bi-check-circle-fill me-2" aria-hidden="true"></i>' + t.successMessage;
    
    // Footer
    const footerSections = document.querySelectorAll('.timeline-footer h5');
    footerSections[0].textContent = t.footerIntel;
    footerSections[1].textContent = t.footerLinks;
    footerSections[2].textContent = t.footerConnect;
    
    document.querySelector('.timeline-footer .col-md-4 p').textContent = t.footerIntelText;
    document.querySelectorAll('.timeline-footer p')[2].textContent = t.footerCopyright;
    document.querySelectorAll('.timeline-footer p')[3].textContent = t.footerHint;
    
    document.querySelector('button[data-bs-target="#infoModal"]').textContent = t.riseBtn;
    
    // Modal
    document.querySelector('#infoModalLabel').innerHTML = '<i class="bi bi-info-circle me-2" aria-hidden="true"></i>' + t.modalTitle;
    document.querySelector('.modal-body h6').textContent = t.modalSubtitle;
    document.querySelector('.modal-body > p').textContent = t.modalText;
    
    const modalSections = document.querySelectorAll('.modal-body .d-flex h6');
    const modalTexts = document.querySelectorAll('.modal-body .d-flex p');
    modalSections[0].textContent = t.modalResponsible;
    modalTexts[0].textContent = t.modalResponsibleText;
    modalSections[1].textContent = t.modalInclusive;
    modalTexts[1].textContent = t.modalInclusiveText;
    modalSections[2].textContent = t.modalSustainable;
    modalTexts[2].textContent = t.modalSustainableText;
    modalSections[3].textContent = t.modalEnabling;
    modalTexts[3].textContent = t.modalEnablingText;
    
    document.querySelector('.modal-body .alert strong').textContent = t.modalGoals;
    document.querySelector('.modal-body .alert').innerHTML = '<i class="bi bi-calendar-check me-2" aria-hidden="true"></i><strong>' + t.modalGoals + '</strong> ' + t.modalGoalsText;
    
    document.querySelector('.modal-footer .btn-secondary').textContent = t.modalClose;
    document.querySelector('.modal-footer .btn-primary').textContent = t.modalRead;
  }
  
  // Function to apply language and direction
  function applyLanguage(langCode) {
    htmlElement.setAttribute('lang', langCode);
    
    if (rtlLanguages.includes(langCode)) {
      htmlElement.setAttribute('dir', 'rtl');
    } else {
      htmlElement.setAttribute('dir', 'ltr');
    }
    
    // Translate the page
    translatePage(langCode);
    
    // Store preference in localStorage
    localStorage.setItem('preferred-language', langCode);
    
    // Announce change to screen readers
    announceToScreenReader(`Language changed to ${languageSelect.options[languageSelect.selectedIndex].text}`);
  }
  
  // Check for stored language preference on page load
  const storedLang = localStorage.getItem('preferred-language');
  if (storedLang) {
    languageSelect.value = storedLang;
    applyLanguage(storedLang);
  }
  
  // Listen for language selection changes
  languageSelect.addEventListener('change', function() {
    applyLanguage(this.value);
  });
  
  // Auto-detect browser language (fallback)
  const browserLang = navigator.language || navigator.userLanguage;
  const primaryLang = browserLang.split('-')[0];
  
  // Only auto-detect if no stored preference
  if (!storedLang && rtlLanguages.includes(primaryLang)) {
    languageSelect.value = primaryLang;
    applyLanguage(primaryLang);
  }
});

// Screen reader announcements helper
function announceToScreenReader(message) {
  const announcement = document.createElement('div');
  announcement.setAttribute('role', 'status');
  announcement.setAttribute('aria-live', 'polite');
  announcement.classList.add('visually-hidden');
  announcement.textContent = message;
  document.body.appendChild(announcement);
  
  // Remove after announcement
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
}

// Newsletter Form Validation with Bootstrap
(function() {
  'use strict';
  
  const form = document.getElementById('newsletter-form');
  const successMessage = document.getElementById('success-message');
  
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    event.stopPropagation();
    
    if (form.checkValidity()) {
      // Form is valid - show success message
      form.classList.add('was-validated');
      
      // Get form data
      const formData = {
        name: document.getElementById('subscriber-name').value,
        email: document.getElementById('subscriber-email').value,
        interest: document.getElementById('interest-area').value,
        consent: document.getElementById('consent-check').checked
      };
      
      // Simulate form submission
      console.log('Form submitted with data:', formData);
      
      // Show success message
      successMessage.classList.remove('d-none');
      
      // Announce to screen readers
      announceToScreenReader('Thank you for subscribing! Check your email for confirmation.');
      
      // Reset form after 2 seconds
      setTimeout(() => {
        form.reset();
        form.classList.remove('was-validated');
        successMessage.classList.add('d-none');
      }, 5000);
      
      // Scroll to success message
      successMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      
    } else {
      // Form is invalid - show validation messages
      form.classList.add('was-validated');
      
      // Find first invalid field and focus it
      const firstInvalid = form.querySelector(':invalid');
      if (firstInvalid) {
        firstInvalid.focus();
        announceToScreenReader('Please correct the form errors');
      }
    }
  });
  
  // Real-time email validation
  const emailInput = document.getElementById('subscriber-email');
  emailInput.addEventListener('blur', function() {
    if (this.value && !this.validity.valid) {
      announceToScreenReader('Please enter a valid email address');
    }
  });
  
  // Real-time name validation
  const nameInput = document.getElementById('subscriber-name');
  nameInput.addEventListener('blur', function() {
    if (!this.value) {
      announceToScreenReader('Name is required');
    }
  });
})();

// Keyboard navigation enhancement for timeline cards
document.addEventListener('DOMContentLoaded', function() {
  const timelineCards = document.querySelectorAll('.timeline-card');
  
  timelineCards.forEach((card, index) => {
    // Add keyboard event listeners
    card.addEventListener('keydown', function(event) {
      // Enter or Space to flip card
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        this.classList.toggle('keyboard-flipped');
        
        const cardBack = this.querySelector('.card-back');
        const heading = cardBack.querySelector('h3').textContent;
        const title = cardBack.querySelector('h4').textContent;
        announceToScreenReader(`${heading}: ${title}`);
      }
      
      // Arrow key navigation
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        const nextCard = timelineCards[index + 1];
        if (nextCard) nextCard.focus();
      }
      
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        const prevCard = timelineCards[index - 1];
        if (prevCard) prevCard.focus();
      }
    });
    
    // Reset flip state when focus leaves
    card.addEventListener('blur', function() {
      this.classList.remove('keyboard-flipped');
    });
  });
});

// Add CSS class for keyboard-flipped state
const style = document.createElement('style');
style.textContent = `
  .timeline-card.keyboard-flipped .card-front {
    transform: rotateY(-180deg);
    opacity: 0;
  }
  
  .timeline-card.keyboard-flipped .card-back {
    transform: rotateY(0deg);
    box-shadow: var(--shadow-lg);
  }
`;
document.head.appendChild(style);

// Smooth scroll for timeline on initial load
document.addEventListener('DOMContentLoaded', function() {
  const timelineScroll = document.querySelector('.timeline-scroll');
  
  // Check if user prefers reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  if (!prefersReducedMotion) {
    // Subtle auto-scroll hint
    setTimeout(() => {
      if (timelineScroll) {
        timelineScroll.scrollLeft = 50;
        setTimeout(() => {
          timelineScroll.scrollLeft = 0;
        }, 800);
      }
    }, 1000);
  }
});

// Learn More button interactions with analytics tracking
document.addEventListener('DOMContentLoaded', function() {
  const learnMoreButtons = document.querySelectorAll('.learn-more-btn');
  
  learnMoreButtons.forEach(button => {
    button.addEventListener('click', function(event) {
      event.preventDefault();
      
      // Get the feature title
      const featureCard = this.closest('.feature-card');
      const featureTitle = featureCard.querySelector('h3').textContent;
      
      // Log interaction (in production, this would send to analytics)
      console.log('Learn More clicked:', featureTitle);
      
      // Provide user feedback
      announceToScreenReader(`Loading more information about ${featureTitle}`);
      
      // Visual feedback
      this.innerHTML = '<i class="bi bi-hourglass-split me-2"></i>Loading...';
      
      setTimeout(() => {
        this.innerHTML = 'Learn More';
        alert(`More information about ${featureTitle} would be displayed here in a production environment.`);
      }, 500);
    });
  });
});

// Enhanced focus visibility for better accessibility
document.addEventListener('DOMContentLoaded', function() {
  // Add focus-visible polyfill behavior
  document.body.addEventListener('mousedown', function() {
    document.body.classList.add('using-mouse');
  });
  
  document.body.addEventListener('keydown', function(event) {
    if (event.key === 'Tab') {
      document.body.classList.remove('using-mouse');
    }
  });
});

// Add custom focus styles
const focusStyle = document.createElement('style');
focusStyle.textContent = `
  body.using-mouse *:focus {
    outline: none;
  }
  
  body:not(.using-mouse) *:focus {
    outline: 3px solid var(--intel-light);
    outline-offset: 2px;
  }
`;
document.head.appendChild(focusStyle);

// Modal accessibility enhancements
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('infoModal');
  
  if (modal) {
    modal.addEventListener('shown.bs.modal', function() {
      // Focus the close button when modal opens
      const closeButton = modal.querySelector('.btn-close');
      if (closeButton) {
        closeButton.focus();
      }
      
      // Announce to screen readers
      announceToScreenReader('RISE Strategy information dialog opened');
    });
    
    modal.addEventListener('hidden.bs.modal', function() {
      // Return focus to trigger button when modal closes
      const trigger = document.querySelector('[data-bs-target="#infoModal"]');
      if (trigger) {
        trigger.focus();
      }
      
      announceToScreenReader('Dialog closed');
    });
    
    // Trap focus within modal
    modal.addEventListener('keydown', function(event) {
      if (event.key === 'Tab') {
        const focusableElements = modal.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstFocusable = focusableElements[0];
        const lastFocusable = focusableElements[focusableElements.length - 1];
        
        if (event.shiftKey) {
          // Shift + Tab
          if (document.activeElement === firstFocusable) {
            event.preventDefault();
            lastFocusable.focus();
          }
        } else {
          // Tab
          if (document.activeElement === lastFocusable) {
            event.preventDefault();
            firstFocusable.focus();
          }
        }
      }
    });
  }
});

// Accessibility: Add skip links navigation
document.addEventListener('DOMContentLoaded', function() {
  const skipLink = document.querySelector('.skip-link');
  
  if (skipLink) {
    skipLink.addEventListener('click', function(event) {
      event.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.setAttribute('tabindex', '-1');
        target.focus();
        target.scrollIntoView({ behavior: 'smooth' });
        
        // Remove tabindex after focus to restore natural tab order
        target.addEventListener('blur', function() {
          this.removeAttribute('tabindex');
        }, { once: true });
      }
    });
  }
});

// Print functionality
window.addEventListener('beforeprint', function() {
  console.log('Preparing page for printing...');
  // Could add special print preparation here
});

// Performance: Lazy loading for images (if more images are added in future)
document.addEventListener('DOMContentLoaded', function() {
  if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
      img.src = img.dataset.src;
    });
  } else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
  }
});

// Console welcome message
console.log('%c Intel Sustainability Timeline ', 'background: #0071C5; color: white; font-size: 20px; padding: 10px;');
console.log('%c Built with accessibility and RTL support in mind ', 'color: #003D7A; font-size: 14px;');
console.log('%c Features: Bootstrap 5, RTL detection, Form validation, ARIA labels ', 'color: #666; font-size: 12px;');
