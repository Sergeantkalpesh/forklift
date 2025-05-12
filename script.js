//Swiper Slide Effect
const swiper = new Swiper('.swiperProducts', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }
});

//Mobile Search panel
function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
  document.getElementById("searchInput").focus();
}

function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}



//Mobile Menu
const toggleBtn = document.getElementById('menu-toggle');
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.querySelector('nav ul');

toggleBtn.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  // Toggle between bars and times (close) icon
  if (menuIcon.classList.contains('fa-bars')) {
    menuIcon.classList.remove('fa-bars');
    menuIcon.classList.add('fa-times');
  } else {
    menuIcon.classList.remove('fa-times');
    menuIcon.classList.add('fa-bars');
  }
});




// Dropdown menu
document.addEventListener('DOMContentLoaded', function () {
  const servicesLink = document.querySelector('nav ul li:nth-child(2) > a');
  const dropdownMenu = document.querySelector('.dropdown_menu');

  // Close dropdown when clicking outside
  document.addEventListener('click', function (e) {
    if (!servicesLink.contains(e.target)) {
      servicesLink.parentElement.classList.remove('open');
    }
  });

  // Toggle dropdown when clicking the services link
  servicesLink.addEventListener('click', function (e) {
    e.preventDefault();
    this.parentElement.classList.toggle('open');

    // Stop the click event from bubbling up to document
    e.stopPropagation();
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const productsLink = document.querySelector('nav ul li:nth-child(2) > a');
  const dropdownMenu = document.querySelector('.dropdown_menu');

  // Close dropdown when clicking outside
  document.addEventListener('click', function (e) {
    if (!servicesLink.contains(e.target)) {
      productsLink.parentElement.classList.remove('open');
    }
  });

  // Toggle dropdown when clicking the services link
  productsLink.addEventListener('click', function (e) {
    e.preventDefault();
    this.parentElement.classList.toggle('open');

    // Stop the click event from bubbling up to document
    e.stopPropagation();
  });
});