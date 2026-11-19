
// Wait until the HTML document has loaded
document.addEventListener("DOMContentLoaded", function () {

    // Get the newsletter form
    const form = document.querySelector(".newsletter form");

    // Get the email input field
    const emailInput = document.getElementById("email");

    // Get the message area
    const message = document.querySelector(".message");

    // Listen for form submission
    form.addEventListener("submit", function (event) {

        // Prevent the page from refreshing
        event.preventDefault();

        // Get the email address entered by the user
        const email = emailInput.value.trim();

        // Check if the email field is empty
        if (email === "") {
            message.textContent =
                "Please enter a valid email address.";
        } else {
            // Display successful subscription message
            message.textContent =
                "Thank you! Your email address " +
                email +
                " has been added to our mailing list!";

            // Clear the email field
            emailInput.value = "";
        }
    });

});
