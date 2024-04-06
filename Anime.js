// JavaScript for smooth scrolling
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
});

// JavaScript to toggle responsive navigation menu
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
});

// JavaScript for dynamic content loading
document.addEventListener('DOMContentLoaded', function() {
    const contentContainer = document.querySelector('.content');

    // Function to fetch and update content
    function fetchContent() {
        fetch('https://api.example.com/content')
            .then(response => response.json())
            .then(data => {
                // Clear existing content
                contentContainer.innerHTML = '';

                // Loop through data and create content elements
                data.forEach(item => {
                    const div = document.createElement('div');
                    div.classList.add('content-item');
                    div.innerHTML = `
                        <h3>${item.title}</h3>
                        <p>${item.description}</p>
                    `;
                    contentContainer.appendChild(div);
                });
            })
            .catch(error => {
                console.error('Error fetching content:', error);
            });
    }

    // Call fetchContent function initially
    fetchContent();

    // You can also call fetchContent function again based on user interaction or events
    // For example, when clicking a button
    const loadButton = document.querySelector('.load-button');
    loadButton.addEventListener('click', fetchContent);
});

