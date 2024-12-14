// Set the date we're counting down to
var countDownDate = new Date("Dec 31, 2024 23:59:59").getTime();

// Update the countdown every 1 second
var x = setInterval(function() {

    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // If the countdown is over, display a message and show the button
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "EXPIRED";
        document.getElementById("previewBtn").style.display = "block"; // Show the button after countdown ends
    }
}, 1000);

// Function to display the "Happy New Year!" message when the button is clicked
function showHappyNewYear() {
    console.log("Button clicked!"); // Log to console when the button is clicked
    document.getElementById("newYearMessage").style.display = "block"; // Show the message
    document.getElementById("previewBtn").style.display = "none"; // Hide the button after clicking
}
