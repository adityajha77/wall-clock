function updateClock() {
    const now = new Date();

    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondsDegrees = (seconds / 60) * 360 + 90;
    const minutesDegrees = (minutes / 60) * 360 + 90;
    const hoursDegrees = (hours / 12) * 360 + 90;

    document.getElementById('second-hand').style.transform = `rotate(${secondsDegrees}deg)`;
    document.getElementById('minute-hand').style.transform = `rotate(${minutesDegrees}deg)`;
    document.getElementById('hour-hand').style.transform = `rotate(${hoursDegrees}deg)`;

    // Play sound on the second change
    const tickSound = document.getElementById('tick-sound');
    tickSound.currentTime = 0; // Reset playback to start
    tickSound.play();
}

// Update the clock every second
setInterval(updateClock, 1000);
updateClock(); // Initial call to set clock immediately
