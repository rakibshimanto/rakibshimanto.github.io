// ১. ব্রাউজার কনসোলে স্বাগতম বার্তা
console.log("%c MD. ASIKUR RAHMAN ", "background: #2c3e50; color: #fff; font-size: 20px; padding: 10px;");

// ২. মোবাইল মেনু টগল লজিক (Header Section)
const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
});
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.getElementById('nav-list');

if (mobileMenu && navList) {
    mobileMenu.addEventListener('click', () => {
        navList.classList.toggle('active');
        // আইকন পরিবর্তন (বার থেকে ক্রস)
        const icon = mobileMenu.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });
}

// ৩. স্মুথ স্ক্রলিং এবং অটো মেনু ক্লোজ
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        // মোবাইল মেনু খোলা থাকলে সেটি বন্ধ করে দেওয়া
        if (navList && navList.classList.contains('active')) {
            navList.classList.remove('active');
            const icon = mobileMenu.querySelector('i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        }

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, // হেডার হাইট বাদ দিয়ে
                behavior: 'smooth'
            });
        }
    });
});

// ৪. স্ক্রল করলে হেডারের শ্যাডো পরিবর্তন
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 15px rgba(0,0,0,0.3)';
        header.style.transition = '0.3s ease';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});

// ৫. পোর্টফোলিও ফিল্টার লজিক
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioCards = document.querySelectorAll('.portfolio-card');

if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // অ্যাক্টিভ ক্লাস চেঞ্জ
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            portfolioCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeIn 0.5s ease-in-out';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// ৬. সোশ্যাল কার্ডে হোভার এনিমেশন
const socialCards = document.querySelectorAll('.social-card');
socialCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px) scale(1.02)';
        card.style.transition = '0.3s ease';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// ৭. কন্টাক্ট লিঙ্ক ট্র্যাকিং (Console log)
const contactLinks = document.querySelectorAll('.info-item p a');
contactLinks.forEach(link => {
    link.addEventListener('click', () => {
        console.log("Contact initiated via: " + link.innerText);
    });
});

