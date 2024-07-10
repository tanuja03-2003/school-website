document.addEventListener("DOMContentLoaded", function() {
    const sections = {
        transportation: {
            title: "Transportation",
            content: "We pay close attention to the travel safety of our students. With a fleet of buses with 40 seats each, we ensure every student gets comfortable seating during their journey. Our buses meet all the required government regulation standards and have well-trained drivers who take care of pick-ups and drops on the assigned routes. We also have bus attenders who look after the students and take care of seating arrangements.",
            image: "school bus.jpg"
        },
        library: {
            title: "Library",
            content: "Our library is well-equipped with a wide range of books, journals, and digital resources. It provides a quiet and conducive environment for students to study and research.",
            image: "library.jpg"
        },
        sports: {
            title: "Sports",
            content: "We offer a variety of sports facilities to encourage physical fitness and teamwork among our students. Our sports program includes both indoor and outdoor activities.",
            image: "sports.jpg"
        },
        labs: {
            title: "Labs",
            content: "Our state-of-the-art labs are designed to provide practical learning experiences in science, technology, engineering, and mathematics (STEM).Dedicated instructors are always available to guide students through their digital explorations and enhance their tech skill",
            image: "comp lab.jpg"
        },
        hostel: {
            title: "Hostel",
            content: "Our hostel facilities provide a safe and comfortable living environment for our students. We offer separate accommodations for boys and girls with all necessary amenities.",
            image: "hostel.jpg"
        },
        // digital: {
        //     title: "digital learning environment",
        //     content: "Step into our digital learning environment where traditional classrooms meet cutting-edge technology. Through interactive sessions, we transform learning into a dynamic experience, leveraging digital tools to engage students and enrich educational content. Embrace a new era of education with us, where every lesson is enhanced through innovation and digital integration.",
        //     image: "digital.jpg"
        // }
    };

    const navLinks = document.querySelectorAll(".nav-link");
    const contentDiv = document.getElementById("content");

    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const section = sections[link.getAttribute("data-section")];

            navLinks.forEach(navLink => navLink.classList.remove("active"));
            link.classList.add("active");

            contentDiv.innerHTML = `
                <h2>${section.title}</h2>
                <p>${section.content}</p>
                <img src="${section.image}" alt="${section.title}">
            `;
        });
    });

    // Load the default section
    document.querySelector(".nav-link.active").click();
});
