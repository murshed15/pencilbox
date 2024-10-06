// Custom JavaScript for interactivity, such as handling form submission feedback
document.querySelector('form').addEventListener('submit', function(e) {
    alert('Thank you for your message!');
    e.preventDefault();
});
