document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. TYPEWRITER EFFECT ---
    const textElement = document.getElementById('typewriter-text');
    const aboutBtn = document.getElementById('about-btn');
    const textToType = "Welcome to my portfolio website.";
    let charIndex = 0;

    // Function to run the typewriter animation
    function typeWriter() {
        if (charIndex < textToType.length) {
            textElement.textContent += textToType.charAt(charIndex);
            charIndex++;
            // Speed of typing (70 milliseconds per character)
            setTimeout(typeWriter, 70); 
        } else {
            // OPTIMIZATION: Remove the blinking cursor once typing is done
            textElement.style.borderRight = 'none'; 
            
            // Show the 'About Me' button with an animation
            aboutBtn.style.opacity = '1';
            aboutBtn.style.transform = 'translateY(0)';
        }
    }

    // Start the typing effect when the page loads
    typeWriter();


    // --- 2. GALAXY BACKGROUND (Simple Starfield Effect) ---
    const galaxy = document.getElementById('galaxy');
    const numStars = 100;

    // Function to dynamically create star elements
    function createStars() {
        for (let i = 0; i < numStars; i++) {
            let star = document.createElement('div');
            star.className = 'star';
            
            // Random positioning across the viewport
            star.style.top = Math.random() * 100 + 'vh';
            star.style.left = Math.random() * 100 + 'vw';
            
            // Random size for depth/twinkle effect
            const size = Math.random() * 2;
            star.style.width = size + 'px';
            star.style.height = size + 'px';
            
            // Varied speeds for the twinkling CSS animation
            star.style.animationDuration = (Math.random() * 1.5 + 0.5) + 's'; 
            galaxy.appendChild(star);
        }
    }
    
    // Call the function to build the starfield
    createStars();


    // --- 3. SCROLL LOGIC & MAIN CONTENT TRANSITION ---
    // This function is triggered by the onclick event in the HTML's 'About Me' button
    window.loadMainContent = function(event) {
        event.preventDefault(); // Stop the link from jumping immediately
        
        const targetElement = document.getElementById('main-content-start');
        
        // Use smooth scroll to transition from splash screen to main content
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });

        // NEW LOGIC: Trigger the smooth text transition for the 'About Me' section
        // We use a small delay (500ms) to let the smooth scroll start first.
        setTimeout(() => {
            const profileText = document.querySelector('#about-me .profile-text');
            if (profileText) {
                // Apply the final visible state, which the CSS transition handles smoothly
                profileText.style.opacity = '1';
                profileText.style.transform = 'translateY(0)';
            }
        }, 500); 
    };

});