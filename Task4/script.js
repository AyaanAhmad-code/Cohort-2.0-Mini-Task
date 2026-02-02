const users = [
    {
        fullName: "Elias Vance",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        profession: "Senior AI Engineer",
        description: "Specializes in developing robust machine learning models for natural language processing and scalable data infrastructure.",
        tags: ["Python", "TensorFlow", "NLP", "Cloud Computing"]
    },
    {
        fullName: "Sophia Rodriguez",
        image: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        profession: "UX/UI Designer",
        description: "Leads design strategy, focusing on user-centered research, prototyping, and accessibility standards for global applications.",
        tags: ["Figma", "Accessibility", "Prototyping", "User Research"]
    },
    {
        fullName: "Kenji Tanaka",
        image: "https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        profession: "Full Stack Developer",
        description: "Experienced in MERN stack development, responsible for implementing both client-side interactivity and server-side logic.",
        tags: ["React", "Node.js", "MongoDB", "TypeScript"]
    },
    {
        fullName: "Aisha Khan",
        image: "https://images.unsplash.com/photo-1445053023192-8d45cb66099d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        profession: "Digital Marketing Strategist",
        description: "Expert in performance marketing, content strategy, and SEO optimization to drive targeted traffic and increase brand conversion rates.",
        tags: ["SEO", "Content Marketing", "Google Analytics", "Performance"]
    },
    {
        fullName: "Marcus Dubois",
        image: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        profession: "Cybersecurity Analyst",
        description: "Focuses on identifying system vulnerabilities, developing defensive security measures, and ensuring compliance with data protection regulations.",
        tags: ["Penetration Testing", "Security Audit", "Firewalls", "Compliance"]
    }
];
let sum = ''
users.forEach(function(elem){
    sum = sum + `<div class="card">
            <img src="${elem.image}" alt="">
            <h3>${elem.fullName}</h3>
            <h4>${elem.profession}</h4>
            <p>${elem.description}</p>
        </div>`
})

let main = document.querySelector('main');
main.innerHTML = sum