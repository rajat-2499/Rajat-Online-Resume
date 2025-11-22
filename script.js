document.addEventListener('DOMContentLoaded', () => {
    console.log("Modern BA Portfolio Ready! Looking forward to new opportunities.");

    // --- Modern Scroll Reveal Effect (Micro-interaction) ---
    const sections = document.querySelectorAll('.section');
    
    const observerOptions = {
        root: null, // relative to the viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% of the item must be visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                // Stop observing once it has appeared
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.classList.add('pre-fade'); // Add initial invisible state
        observer.observe(section);
    });
    
    // Add the necessary CSS for the fade effect to style.css:
    /*
    .pre-fade {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }

    .fade-in {
        opacity: 1;
        transform: translateY(0);
    }
    */
});
