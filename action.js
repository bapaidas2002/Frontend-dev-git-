// Typewriter animation for intro text
document.addEventListener('DOMContentLoaded', function() {
    const introText = document.querySelector('.intro h1');
    const text = introText.textContent;
    introText.textContent = '';

    let i = 0;
    const speed = 100; // milliseconds per character

    function typeWriter() {
        if (i < text.length) {
            introText.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        } else {
            // Add blinking cursor effect after typing is complete
            introText.style.borderRight = '2px solid black';
            introText.style.animation = 'blink 1s infinite';
        }
    }

    // Start the animation
    typeWriter();
});

// Add CSS for blinking cursor (if not already in CSS)
const style = document.createElement('style');
style.textContent = `
    @keyframes blink {
        0%, 50% { border-right-color: black; }
        51%, 100% { border-right-color: transparent; }
    }
`;
document.head.appendChild(style);