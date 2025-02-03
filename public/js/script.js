document.addEventListener("mousemove", (e) => {
    const glow = document.querySelector(".glow-effect");
    const x = e.clientX;
    const y = e.clientY;
    glow.style.background = `radial-gradient(600px at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
});

document.addEventListener("DOMContentLoaded", function () {
    const rightContainer = document.querySelector("#Right"); // The scrollable container
    const sections = document.querySelectorAll("#Right > div"); // Get sections inside #Right
    const navLinks = document.querySelectorAll("#Nav a"); // Get navigation links

    // Function to update active nav link based on scroll position
    function updateActiveNav() {
        let scrollPosition = rightContainer.scrollTop + 50; // Offset for better accuracy

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach((link) => link.classList.remove("active")); // Remove active from all
                navLinks[index].classList.add("active"); // Add active to the current section's nav link
            }
        });
    }

    // Smooth scroll when clicking nav links
    navLinks.forEach((link, index) => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default anchor behavior

            const targetSection = sections[index]; // Get the target section
            rightContainer.scrollTo({
                top: targetSection.offsetTop - 20,
                behavior: "smooth", // Smooth scrolling effect
            });

            // Update active class immediately
            navLinks.forEach((l) => l.classList.remove("active"));
            link.classList.add("active");
        });
    });

    // Listen to scroll inside #Right to update nav links dynamically
    rightContainer.addEventListener("scroll", updateActiveNav);
    updateActiveNav(); // Run once on load
});
