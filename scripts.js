document.addEventListener('DOMContentLoaded', function() {
    function updateTimeAndDay() {
        const now = new Date();
        const utcTime = now.toUTCString();
        const day = now.toLocaleString('en-us', { weekday: 'long' });

        document.getElementById('current-time').textContent = utcTime;
        document.getElementById('current-day').textContent = day;
    }

    updateTimeAndDay();
    setInterval(updateTimeAndDay, 1000);

    // Check natural dimensions of logoIcon 
    const logo = document.querySelector('[data-testid="logoIcon"]');
    logo.onload = function() {
        console.log('Natural Width:', logo.naturalWidth);
        console.log('Natural Height:', logo.naturalHeight);
    };

    // Check natural dimensions of slackProfilePicture 
    const img = document.querySelector('[data-testid="slackProfilePicture"]');
    img.onload = function() {
        console.log('Natural Width:', img.naturalWidth);
        console.log('Natural Height:', img.naturalHeight);
    };
});
