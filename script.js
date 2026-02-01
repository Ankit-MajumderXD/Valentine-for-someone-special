const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const question = document.getElementById('question');
const message = document.getElementById('message');
const celebration = document.getElementById('celebration');
const btnGroup = document.querySelector('.button-group');

// Make the "No" button run away
noBtn.addEventListener('mouseover', () => {
    // Show the "shy" message from the video
    message.classList.remove('hidden');

    // Calculate random position within the window
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// When "Yes" is clicked
yesBtn.addEventListener('click', () => {
    // Hide everything else
    question.classList.add('hidden');
    btnGroup.classList.add('hidden');
    message.classList.add('hidden');
    noBtn.classList.add('hidden');

    // Show the celebration
    celebration.classList.remove('hidden');
});