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

let num1 = Math.floor(Math.random() * 10) + 1;
let num2 = Math.floor(Math.random() * 10) + 1;

document.getElementById("captchaQuestion").innerHTML =
    `Solve: ${num1} + ${num2} = ?`;

document.getElementById("miniForm").addEventListener("submit", function(e) {

    let answer = document.getElementById("captchaInput").value;

    if (parseInt(answer) !== (num1 + num2)) {
        e.preventDefault();
        alert("❌ CAPTCHA is incorrect!");

        // New CAPTCHA
        num1 = Math.floor(Math.random() * 10) + 1;
        num2 = Math.floor(Math.random() * 10) + 1;
        document.getElementById("captchaQuestion").innerHTML =
            `Solve: ${num1} + ${num2} = ?`;

        document.getElementById("captchaInput").value = "";
    } else {
        alert("✅ Message Sent Successfully!");
    }
    
});
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,mr,hi',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }, 'google_translate_element');
}

function changeLanguage(langCode) {
    // 1. First method: Normal Google dropdown select check
    var selectEl = document.querySelector('.goog-te-combo');
    if (selectEl) {
        selectEl.value = langCode;
        selectEl.dispatchEvent(new Event('change'));
    } else {
        // 2. Second method: Jar main element load nashi jhala tar iframe check karel
        var iframe = document.querySelector('iframe.goog-te-menu-frame');
        if (iframe && iframe.contentWindow) {
            var doc = iframe.contentDocument || iframe.contentWindow.document;
            var links = doc.querySelectorAll('.goog-te-menu2-item span.text');
            for (var i = 0; i < links.length; i++) {
                if (langCode === 'mr' && links[i].innerText.includes('Marathi')) { links[i].click(); return; }
                if (langCode === 'hi' && links[i].innerText.includes('Hindi')) { links[i].click(); return; }
                if (langCode === 'en' && links[i].innerText.includes('English')) { links[i].click(); return; }
            }
        }
        // 3. Third method: Direct cookie trick (Google Translate cookies utilize karel)
        document.cookie = "googtrans=/en/" + langCode + "; path=/";
        document.cookie = "googtrans=/en/" + langCode + "; domain=" + window.location.hostname + "; path=/";
        location.reload(); // Cookie apply honyasathi page instantly refresh hoil
    }
}


