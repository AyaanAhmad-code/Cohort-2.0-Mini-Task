let main = document.querySelector("main");
let btn = document.querySelector("button");

let quotes = [
    "Go the extra mile.",
    "Action speaks volumes.",
    "Dream big, start small.",
    "Today is the day.",
    "Never stop creating.",
    "Keep pushing forward.",
    "Do what you love.",
    "Own your future.",
    "Make it happen.",
    "Believe in magic.",
    "Stay fiercely curious.",
    "Effort creates results.",
    "Start where you are.",
    "Focus on the solution.",
    "Work hard, dream big.",
    "Lead by example.",
    "Innovate or perish.",
    "The time is now.",
    "Failure fuels success.",
    "Make your mark.",
    "Be the change.",
    "Know thyself.",
    "Simplify your life.",
    "Embrace the journey.",
    "Choose joy daily.",
    "Live in the moment.",
    "Happiness is here.",
    "Listen more closely.",
    "Find your light.",
    "Growth needs time.",
    "Kindness costs nothing.",
    "Practice gratitude daily.",
    "Be truly present.",
    "Worry solves nothing.",
    "Respect all things.",
    "Health is wealth.",
    "Seek inner peace.",
    "Find the lesson.",
    "Breathe, just breathe.",
    "Change is inevitable.",
    "Ideas are free.",
    "Imagine the impossible.",
    "Create your reality.",
    "Design your destiny.",
    "Art requires courage.",
    "Vision without action.",
    "Inspire the world.",
    "Write your story.",
    "Color outside lines.",
    "Innovate constantly.",
    "Details matter most.",
    "New perspectives help.",
    "Keep learning forever.",
    "Question everything always.",
    "See the unseen.",
    "Build beautiful things.",
    "Craft your passion.",
    "The future awaits.",
    "Solve real problems.",
    "Define your style.",
    "Never give up.",
    "Stronger than fear.",
    "Rise above limits.",
    "Face the music.",
    "Conquer your doubt.",
    "You are capable.",
    "Keep your promises.",
    "Handle with care.",
    "Forgive and move.",
    "Stand up tall.",
    "Silence is power.",
    "The mind is strong.",
    "Fear is a liar.",
    "Endure the pain.",
    "Be your own hero.",
    "Fight for better.",
    "Own your narrative.",
    "Reclaim your time.",
    "Integrity is everything.",
    "Commit and follow.",
    "We are stronger together.",
    "Support local artists.",
    "Connect and share.",
    "Relationships are currency.",
    "Love conquers all.",
    "Be a good friend.",
    "Give back often.",
    "Share your blessings.",
    "Teamwork gets the job done.",
    "Community builds strength.",
    "Value human connections.",
    "Listen and understand.",
    "Spread positive vibes.",
    "We rise by lifting others.",
    "Together we thrive.",
    "Build genuine trust.",
    "Help your neighbor.",
    "Empathy changes everything.",
    "Always say thank you.",
    "Love hard, work smart."
];

btn.addEventListener('click',function(){
    let h1 = document.createElement('h1');
    let val = quotes[Math.floor(Math.random()*quotes.length)];
    let x = Math.random()*80;
    let y = Math.random()*80;
    let rot = Math.random()*360;
    let scl = Math.random()*3;
    let c1 = Math.floor(Math.random()*256);
    let c2 = Math.floor(Math.random()*256);
    let c3 = Math.floor(Math.random()*256);

    h1.innerHTML = val;
    h1.style.position = 'absolute';
    h1.style.left = x+'%';
    h1.style.top = y+'%';
    h1.style.rotate = rot+'deg';
    h1.style.scale = scl
    h1.style.color = `rgb(${c1},${c2},${c3})`;
    main.appendChild(h1)
})