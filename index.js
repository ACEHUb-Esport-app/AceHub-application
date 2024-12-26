// Toggle pentru dropdown
document.getElementById('dropdownButton').addEventListener('click', function () {
    const dropdownContent = document.getElementById('dropdownContent');
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
});

// Schimbare text buton
function changeCategory(event, category) {
    event.preventDefault(); // Previne redirectarea link-ului
    document.getElementById('dropdownButton').innerHTML = `${category} <i class="fas fa-caret-down"></i>`;
    document.getElementById('dropdownContent').style.display = 'none'; // Închide meniul după selecție
}

// Închide dropdown-ul dacă utilizatorul dă click în afara acestuia
window.onclick = function (event) {
    if (!event.target.matches('.dropdown-button')) {
        const dropdowns = document.getElementsByClassName('dropdown-content');
        for (let i = 0; i < dropdowns.length; i++) {
            dropdowns[i].style.display = 'none';
        }
    }
};

let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.carousel-dot');

function goToSlide(index) {
    currentIndex = index;
    const offset = -currentIndex * 100;
    document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
    updateDots();
}

function updateDots() {
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    goToSlide(currentIndex);
}, 3000);

let lastScrollTop = 0;
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
    let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Verificăm dacă scroll-ul este mai mare de 100px pentru a evita triggerul imediat
    if (currentScrollTop > 100) {
        if (currentScrollTop > lastScrollTop) {
            // Scroll în jos - ascunde header-ul
            header.classList.add("hide-header");
            header.classList.remove("show-header");
        } else {
            // Scroll în sus - arată header-ul
            header.classList.add("show-header");
            header.classList.remove("hide-header");
        }
    }
    
    lastScrollTop = currentScrollTop;
});

