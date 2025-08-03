function showTime() {
let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();

let period = "AM"
if ( hours >= 12 ) {
    period = "PM"
}

hours = hours % 12;
if ( hours === 0 ) {
    hours = 12;
}

hours = String(hours).padStart(2, "0");
minutes = String(minutes).padStart(2, "0");
seconds = String(seconds).padStart(2, "0");

let timeString = hours + ":" + minutes + ":" + seconds + " " + period;
document.getElementById("clock").innerHTML = timeString;  
}

showTime();
setInterval(showTime, 1000);


function showDate() {
    let now = new Date();
    let date = now.getDate();
    const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const monthIndex = now.getMonth();
let monthName = months[monthIndex];
    let year = now.getFullYear();

date = String(date).padStart(2, "0");
monthName = String(monthName);
year = String(year);

let dateString = date + " " + monthName + " " + year;
document.getElementById("date").innerHTML = dateString;

}
showDate();
setInterval(showDate, 60000);

const quotes = [
'"Be the change you wish." — Mahatma Gandhi',

'"To live without hope is." — Fyodor Dostoevsky',

'"Happiness depends upon ourselves, not others." — Aristotle',

'"Do small things with love." — Mother Teresa',

'"Dream big and dare bigger." — Norman Vaughan',

'"Where there’s love, there’s life." — Mahatma Gandhi',

'"Peace begins with a smile." — Mother Teresa',

'"Hard work never goes unrewarded." — Matshona Dhliwayo',

'"Stars can’t shine without darkness." — D.H. Sidebottom',

'"Life’s a journey, enjoy it." — Anonymous'
]

let currentQuote = 0
function getQuotes() {
    document.getElementById("quotes").innerHTML = quotes[currentQuote];
    currentQuote = (currentQuote + 1) % quotes.length;
}

getQuotes();
setInterval(getQuotes, 30000);