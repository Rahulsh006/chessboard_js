
document.addEventListener('DOMContentLoaded', function () {
    const board = document.getElementById('board');
    let isDark = false;

    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            if (isDark) {
                square.classList.add('dark');
            } else {
                square.classList.add('light');
            }
            board.appendChild(square);
            isDark = !isDark;
        }
        isDark = !isDark;
    }
});
