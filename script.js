// ১. ব্রাউজার কনসোলে একটি স্বাগতম বার্তা (ডেভেলপারদের জন্য)
console.log("%c MD. ASIKUR RAHMAN ", "background: #2c3e50; color: #fff; font-size: 20px; padding: 10px;");

// ২. স্মুথ স্ক্রলিং (Smooth Scrolling)
// মেনু লিঙ্কে ক্লিক করলে পেজটি লাফিয়ে না গিয়ে ধীরে ধীরে স্ক্রল হবে
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, // হেডার এর উচ্চতা বাদ দেওয়া হয়েছে
                behavior: 'smooth'
            });
        }
    });
});

// ৩. স্ক্রল করলে হেডারের শ্যাডো পরিবর্তন (Dynamic Header)
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 15px rgba(0,0,0,0.3)';
        header.style.transition = '0.3s ease';
    } else {

// Portfolio Filter Logic
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioCards = document.querySelectorAll('.portfolio-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons and add to clicked one
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        portfolioCards.forEach(card => {
            if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                card.style.display = 'block';
                // Add a small fade-in effect
                card.style.animation = 'fadeIn 0.5s ease-in-out';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Add this animation to your CSS as well
/*
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}
*/
        

        // ১. কন্টাক্ট কার্ডে মাউস নিলে হালকা এনিমেশন (Hover Effect)
const socialCards = document.querySelectorAll('.social-card');

socialCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// ২. কন্টাক্ট লিঙ্কে ক্লিক করলে ছোট একটি কনসোল মেসেজ (অপশনাল - ট্র্যাক করার জন্য)
const contactLinks = document.querySelectorAll('.info-item p a');
contactLinks.forEach(link => {
    link.addEventListener('click', () => {
        console.log("Contact initiated via: " + link.innerText);
    });
});
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});

// ৪. সিম্পল এনিমেশন (Optional)
// সেকশনগুলো স্ক্রল করে সামনে আসলে হালকা এনিমেশন চাইলে এখানে কোড বাড়ানো যায়।
