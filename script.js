// 1. Back To Top Button Logic
const btn = document.getElementById("backToTop");

window.onscroll = function () {
    if (document.documentElement.scrollTop > 300) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

// 2. Form Submission and Popup Logic
const form = document.getElementById("miniForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("popup").classList.add("show");
});

function closePopup() {
    document.getElementById("popup").classList.remove("show");
}

// 3. Live Date & Time Tracker
function updateDateTime() {
    const now = new Date();

    const date = now.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    });

    const time = now.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
    });

    document.getElementById("datetime").innerHTML =
        "📅 " + date + "  |  " + "🕒 " + time;
}

updateDateTime();
setInterval(updateDateTime, 1000);

// 4. Navbar Active Link Highlight on Scroll
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".menu a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

// 5. Hamburger Menu Toggle (मोबाईलसाठी नवीन जोडलेले लॉजिक)
const hamburgerBtn = document.getElementById("hamburgerBtn");
const navMenu = document.getElementById("navMenu");

hamburgerBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});

// मेनू मधील कोणत्याही लिंकवर क्लिक केल्यावर मेनू बंद व्हावा म्हणून
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("show");
    });
});
