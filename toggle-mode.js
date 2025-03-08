const toggleButton = document.getElementById("toggle");

const index_profile_container = document.getElementById("profile-container");
const experience_entries = document.querySelectorAll(".experience-entry");
const honors_content = document.getElementById("honors-content");
const honor_entries = document.querySelectorAll(".honor-entry");
const hobby_content = document.getElementById("hobbies-content");
const hobby_entries = document.querySelectorAll(".hobby-entry");

document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;

    // Check and apply saved theme
    const saved_theme = localStorage.getItem("theme");
    console.log(saved_theme);
    if (saved_theme === 'd') {
        body.classList.add("darkMode");
        if (index_profile_container) {
            console.log("index_profile_container");
            index_profile_container.classList.add("darkModeInner");
        }
        if (experience_entries && experience_entries.length > 0) {
            experience_entries.forEach(entry => {
                entry.classList.add("darkModeInner");
            });
        }
        if (honors_content) {
            honors_content.classList.add("darkModeInner");
        }
        if (honor_entries && honor_entries.length > 0) {
            honor_entries.forEach(entry => {
                entry.classList.add("darkModeInner");
            });
        }
        if (hobby_content) {
            hobby_content.classList.add("darkModeInner");
        }
        if (hobby_entries && hobby_entries.length > 0) {
            hobby_entries.forEach(entry => {
                entry.classList.add("darkModeInner");
            });
        }

        if(toggleButton) toggleButton.textContent = "☀️";
    }

    if (saved_theme === 'l') {
        console.log("No saved theme");
        body.classList.remove("darkMode");
        if (index_profile_container) {

            console.log("index_profile_contair");
            index_profile_container.classList.remove("darkModeInner");
        }
        if (experience_entries && experience_entries.length > 0) {
            experience_entries.forEach(entry => {
                entry.classList.remove("darkModeInner");
            });
        }
        if (honors_content) {
            honors_content.classList.remove("darkModeInner");
        }
        if (honor_entries && honor_entries.length > 0) {
            honor_entries.forEach(entry => {
                entry.classList.remove("darkModeInner");
            });
        }
        if (hobby_content) {
            hobby_content.classList.remove("darkModeInner");
        }
        if (hobby_entries && hobby_entries.length > 0) {
            hobby_entries.forEach(entry => {
                entry.classList.remove("darkModeInner");
            });
        }

        if(toggleButton) toggleButton.textContent = "🌙";
    }

    // Toggle theme and save to localStorage
    if (toggleButton) {
        toggleButton.addEventListener("click", () => {
            const isDarkMode = body.classList.toggle("darkMode");
        
                if (index_profile_container) {
                    index_profile_container.classList.toggle("darkModeInner");
                }
                if (experience_entries && experience_entries.length > 0) {
                    experience_entries.forEach(entry => {
                        entry.classList.toggle("darkModeInner");
                    });
                }
                if (honors_content) {
                    honors_content.classList.toggle("darkModeInner");
                }
                if (honor_entries && honor_entries.length > 0) {
                    honor_entries.forEach(entry => {
                        entry.classList.toggle("darkModeInner");
                    });
                }
                if (hobby_content) {
                    hobby_content.classList.toggle("darkModeInner");
                }
                if (hobby_entries && hobby_entries.length > 0) {
                    hobby_entries.forEach(entry => {
                        entry.classList.toggle("darkModeInner");
                    });
                }
            
            localStorage.setItem("theme", isDarkMode ? 'd' : 'l');
            toggleButton.textContent = isDarkMode ? "☀️" : "🌙";
        });
    }
});