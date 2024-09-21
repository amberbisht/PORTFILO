document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Send email using EmailJS
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        name: name,
        email: email,
        message: message
    }).then(function(response) {
        console.log('Email sent successfully!', response.status, response.text);
        document.getElementById('response').innerHTML = `Thank you, ${name}! Your message has been sent.`;
    }, function(error) {
        console.error('Failed to send email:', error);
        document.getElementById('response').innerHTML = `Sorry, ${name}. Something went wrong.`;
    });

    // Clear form fields
    document.getElementById('contactForm').reset();
});
