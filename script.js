// Smooth scrolling for navigation links
document.querySelectorAll("nav ul li a").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);
        const navbarHeight = document.querySelector("nav").offsetHeight;
        
        window.scrollTo({
            top: targetElement.offsetTop - navbarHeight, /* Adjusting offset */
            behavior: "smooth"
        });
    });
});

// Navbar scroll effect
window.addEventListener("scroll", () => {
    const navbar = document.querySelector("nav");
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
    } else {
        navbar.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    }
});

// Form validation for contact section
const form = document.querySelector("form");
form.addEventListener("submit", function(e) {
    e.preventDefault();
    
    const name = document.querySelector("input[type='text']").value.trim();
    const email = document.querySelector("input[type='email']").value.trim();
    const message = document.querySelector("textarea").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("❌ Please fill out all fields before submitting.");
    } else {
        alert("✅ Thank you for reaching out! We'll get back to you soon.");
        form.reset();
    }
});