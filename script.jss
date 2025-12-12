document.addEventListener('DOMContentLoaded', function() {
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const mobileMenu = document.getElementById('mobile-menu');

    // Funktion för att växla visning av mobilmenyn
    hamburgerIcon.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
    });

    // Stänger menyn när man klickar på en länk inuti den (för en bättre användarupplevelse)
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (mobileMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
            }
        });
    });
});