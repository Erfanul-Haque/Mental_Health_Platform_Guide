const tips = [
    "Take a deep breath and count to ten when stressed.",
    "Start your day with gratitude—list three things you're thankful for.",
    "Take a 10-minute walk to refresh your mind.",
    "Drink a glass of water to stay hydrated and boost your energy.",
    "Write down one positive thing that happened today.",
    "Spend a few minutes meditating or practicing mindfulness.",
    "Talk to a friend or loved one about how you're feeling.",
    "Take breaks during work to stretch and relax.",
    "Listen to your favorite music and enjoy the moment.",
    "Set a small goal and celebrate achieving it."
];

let lastTipIndex = -1;

function displayRandomTip() {
    let tipIndex;

    // Ensure the new tip is different from the last one
    do {
        tipIndex = Math.floor(Math.random() * tips.length);
    } while (tipIndex === lastTipIndex);

    lastTipIndex = tipIndex;

    // Update the tip in the DOM
    document.getElementById("dailyTip").textContent = tips[tipIndex];
}

// Automatically display a new tip every 5 seconds
setInterval(displayRandomTip, 5000);

// Display the first tip when the page loads
window.onload = displayRandomTip;
