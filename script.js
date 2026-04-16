// ১. ব্রাউজার কনসোলে একটি স্বাগতম বার্তা (ডেভেলপারদের জন্য)
console.log("%c Welcome to Rakib Shimanto's Portfolio ", "background: #2c3e50; color: #fff; font-size: 20px; padding: 10px;");

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
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});

// ৪. সিম্পল এনিমেশন (Optional)
// সেকশনগুলো স্ক্রল করে সামনে আসলে হালকা এনিমেশন চাইলে এখানে কোড বাড়ানো যায়।