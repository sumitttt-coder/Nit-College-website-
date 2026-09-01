// =========================
// NIT WEBSITE JAVASCRIPT
// =========================


// Welcome message in console
console.log("Welcome to NIT 😎");


// =========================
// EXPLORE NIT BUTTON
// =========================

const exploreButton = document.querySelector("#home button");

if (exploreButton) {

    exploreButton.addEventListener("click", function () {

        document.querySelector("#about").scrollIntoView({
            behavior: "smooth"
        });

    });

}


// =========================
// CONTACT FORM
// =========================

const contactForm = document.querySelector("#contact form");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        // Stop page from refreshing
        event.preventDefault();

        // Get name entered by user
        const name = document.querySelector(
            "#contact input"
        ).value;

        // Show message
        alert(
            "Thank you " +
            name +
            " 😎\n\n" +
            "Your message has been received by NIT!"
        );

        // Clear form
        contactForm.reset();

    });

}


// =========================
// FUN MESSAGE
// =========================

console.log(
    "NIT Student Life: Canteen 100% 😂"
);console.log("from script file");