//your JS code here. If required
document.querySelectorAll('.square').forEach(square => {
    square.addEventListener('mouseenter', () => {
        // When hovering over a square, change the other squares' color to Coffee
        document.querySelectorAll('.square').forEach(otherSquare => {
            if (otherSquare !== square) {
                otherSquare.style.backgroundColor = '#6F4E37'; // Coffee color
            }
        });
    });

    square.addEventListener('mouseleave', () => {
        // When not hovering over any square, reset all squares' color to Lavender
        document.querySelectorAll('.square').forEach(otherSquare => {
            otherSquare.style.backgroundColor = '#E6E6FA'; // Lavender color
        });
    });
});

