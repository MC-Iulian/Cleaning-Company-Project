// nav bar
function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}


// slider timer
const slides = document.querySelector('.slides');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    let currentIndex = 0;

    function showSlide(index) {
        const translateValue = -index * 100 + '%';
        slides.style.transform = 'translateX(' + translateValue + ')';
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + 3) % 3;
        showSlide(currentIndex);
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % 3;
        showSlide(currentIndex);
    }

    function autoSlide() {
        nextSlide();
    }

    setInterval(autoSlide, 3000); // Change slide every 3 seconds

    // scroll
    function jumpToSection(sectionId) {
        var element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }




    var scrollToTopButton = document.getElementById("scrollToTopBtn");

    window.onscroll = function() {
        toggleScrollToTopButton();
    };

    function toggleScrollToTopButton() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopButton.style.display = "block";
        } else {
            scrollToTopButton.style.display = "none";
        }
    }

    function scrollToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    


    