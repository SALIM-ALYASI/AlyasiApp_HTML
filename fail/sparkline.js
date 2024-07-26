// sparkline

document.addEventListener("DOMContentLoaded", function () {
    var links = document.querySelectorAll('.text a');
    var textContainer = document.querySelector('.text');

    // Check if the number of links is greater than 4
    if (links.length > 4) {
        // Set overflow to auto
        textContainer.style.overflowY = 'auto';
        textContainer.style.overflowX = 'auto';

        // Set the height and width for each link
        links.forEach(function(link) {
            link.style.height = '50px';
            link.style.width = '95%';
        });
    }
});


   

        document.addEventListener("DOMContentLoaded", function () {
        var links = document.querySelectorAll('.text a');
        links.forEach(function (link, index) {
            setTimeout(function () {
                link.style.opacity = '1'; // Set opacity to 1 after delay
                link.style.transform = 'translateX(0)'; // Slide link into view from right side
            }, (index + 1) * 90); // Delay appearance by (index + 1) * 3 seconds
        });
    });