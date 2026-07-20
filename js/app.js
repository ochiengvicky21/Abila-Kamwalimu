/*=========================================================
ABILA KAMWALIMU RESTAURANT
Main JavaScript
=========================================================*/

"use strict";

/*=========================================================
SELECTORS
=========================================================*/

const header = document.querySelector("#header");
const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const closeMenu = document.querySelector(".close-menu");
const scrollTop = document.querySelector(".scroll-top");
const preloader = document.querySelector("#preloader");

const navLinks = document.querySelectorAll(
  ".mobile-menu a, nav a"
);

const fadeElements = document.querySelectorAll(
  ".fade-up,.fade-left,.fade-right,.zoom-in"
);

/*=========================================================
PRELOADER
=========================================================*/

window.addEventListener("load", () => {
  
  setTimeout(() => {
    
    preloader.style.opacity = "0";
    
    preloader.style.visibility = "hidden";
    
    setTimeout(() => {
      
      preloader.remove();
      
    }, 500);
    
  }, 600);
  
});

/*=========================================================
STICKY HEADER
=========================================================*/

window.addEventListener("scroll", () => {
  
  if (window.scrollY > 80) {
    
    header.classList.add("sticky");
    
  } else {
    
    header.classList.remove("sticky");
    
  }
  
});

/*=========================================================
SCROLL TO TOP BUTTON
=========================================================*/

window.addEventListener("scroll", () => {
  
  if (window.scrollY > 500) {
    
    scrollTop.classList.add("show");
    
  } else {
    
    scrollTop.classList.remove("show");
    
  }
  
});

scrollTop.addEventListener("click", (e) => {
  
  e.preventDefault();
  
  window.scrollTo({
    
    top: 0,
    
    behavior: "smooth"
    
  });
  
});

/*=========================================================
MOBILE MENU
=========================================================*/

menuToggle.addEventListener("click", () => {
  
  mobileMenu.classList.add("active");
  
});

closeMenu.addEventListener("click", () => {
  
  mobileMenu.classList.remove("active");
  
});

navLinks.forEach(link => {
  
  link.addEventListener("click", () => {
    
    mobileMenu.classList.remove("active");
    
  });
  
});

/*=========================================================
ACTIVE NAVIGATION
=========================================================*/

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  
  let current = "";
  
  sections.forEach(section => {
    
    const top = section.offsetTop - 150;
    
    const height = section.offsetHeight;
    
    if (pageYOffset >= top) {
      
      current = section.getAttribute("id");
      
    }
    
  });
  
  navLinks.forEach(link => {
    
    link.classList.remove("active");
    
    const href = link.getAttribute("href");
    
    if (href && href.includes(current)) {
      
      link.classList.add("active");
      
    }
    
  });
  
});
/*=========================================================
SCROLL REVEAL ANIMATIONS
=========================================================*/

const observer = new IntersectionObserver((entries) => {
  
  entries.forEach(entry => {
    
    if (entry.isIntersecting) {
      
      entry.target.classList.add("active");
      
    }
    
  });
  
}, {
  threshold: .15
});

fadeElements.forEach(element => {
  
  observer.observe(element);
  
});

/*=========================================================
SMOOTH SCROLL
=========================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  
  anchor.addEventListener("click", function(e) {
    
    const target = document.querySelector(
      this.getAttribute("href")
    );
    
    if (target) {
      
      e.preventDefault();
      
      target.scrollIntoView({
        
        behavior: "smooth",
        block: "start"
        
      });
      
    }
    
  });
  
});

/*=========================================================
PARALLAX HERO
=========================================================*/

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {
  
  const offset = window.pageYOffset;
  
  if (hero) {
    
    hero.style.backgroundPositionY = offset * 0.4 + "px";
    
  }
  
});

/*=========================================================
MENU CARD HOVER
=========================================================*/

const cards = document.querySelectorAll(".menu-card");

cards.forEach(card => {
  
  card.addEventListener("mouseenter", () => {
    
    card.style.transform = "translateY(-15px)";
    
  });
  
  card.addEventListener("mouseleave", () => {
    
    card.style.transform = "translateY(0)";
    
  });
  
});

/*=========================================================
GALLERY EFFECT
=========================================================*/

const galleryImages = document.querySelectorAll(".gallery-item img");

galleryImages.forEach(image => {
  
  image.addEventListener("click", () => {
    
    const overlay = document.createElement("div");
    
    overlay.className = "image-preview";
    
    overlay.innerHTML = `

<div class="preview-box">

<img src="${image.src}" alt="">

<span class="close-preview">

<i class="fas fa-times"></i>

</span>

</div>

`;
    
    document.body.appendChild(overlay);
    
    document.body.style.overflow = "hidden";
    
    overlay.querySelector(".close-preview")
      .addEventListener("click", () => {
        
        overlay.remove();
        
        document.body.style.overflow = "";
        
      });
    
    overlay.addEventListener("click", (e) => {
      
      if (e.target === overlay) {
        
        overlay.remove();
        
        document.body.style.overflow = "";
        
      }
      
    });
    
  });
  
});

/*=========================================================
HEADER SHADOW
=========================================================*/

window.addEventListener("scroll", () => {
  
  if (window.scrollY > 30) {
    
    header.style.boxShadow = "0 15px 40px rgba(0,0,0,.15)";
    
  } else {
    
    header.style.boxShadow = "none";
    
  }
  
});

/*=========================================================
LAZY IMAGE FADE
=========================================================*/

const images = document.querySelectorAll("img");

images.forEach(img => {
  
  img.addEventListener("load", () => {
    
    img.style.opacity = "1";
    
  });
  
});

/*=========================================================
KEYBOARD ESC CLOSE IMAGE
=========================================================*/

document.addEventListener("keydown", (e) => {
  
  if (e.key === "Escape") {
    
    const preview = document.querySelector(".image-preview");
    
    if (preview) {
      
      preview.remove();
      
      document.body.style.overflow = "";
      
    }
    
  }
  
});

/*=========================================================
WINDOW RESIZE
=========================================================*/

window.addEventListener("resize", () => {
  
  if (window.innerWidth > 992) {
    
    mobileMenu.classList.remove("active");
    
  }
  
});

/*=========================================================
CONSOLE
=========================================================*/

console.log("%cAbila Kamwalimu Restaurant",
  "color:#D4A017;font-size:20px;font-weight:bold;");

console.log("%cWebsite Designed by Kijani Systems",
  "color:#1B4332;font-size:14px;");