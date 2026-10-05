/*==========================================
 GLAMBYBKY Makeup Studio
 app.js - Part 1
==========================================*/

// Wait until page loads
document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       LOADER
    ========================== */

    const loader = document.getElementById("loader");

    window.addEventListener("load", () => {

        setTimeout(() => {

            loader.style.opacity = "0";

            loader.style.visibility = "hidden";

        }, 1200);

    });

    /* ==========================
       STICKY NAVBAR
    ========================== */

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    });

    /* ==========================
       SMOOTH SCROLL
    ========================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });

    /* ==========================
       SCROLL TO TOP BUTTON
    ========================== */

    const scrollBtn = document.getElementById("scrollTop");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            scrollBtn.classList.add("show");

        } else {

            scrollBtn.classList.remove("show");

        }

    });

    if (scrollBtn) {

        scrollBtn.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }

    /* ==========================
       FADE ANIMATION
    ========================== */

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("fade-in");

            }

        });

    }, {

        threshold: 0.15

    });

    document.querySelectorAll("section").forEach(section => {

        observer.observe(section);

    });

    /* ==========================
       GALLERY IMAGE EFFECT
    ========================== */

    const galleryImages = document.querySelectorAll(".gallery-grid img");

    galleryImages.forEach(image => {

        image.addEventListener("mouseenter", () => {

            image.style.transform = "scale(1.05)";

        });

        image.addEventListener("mouseleave", () => {

            image.style.transform = "scale(1)";

        });

    });

});
/* ==========================================
   app.js - Part 2
   GLAMBYBKY Makeup Studio
========================================== */

/* ==========================
   MOBILE MENU
========================== */

const menuBtn = document.createElement("div");
menuBtn.className = "menu-btn";
menuBtn.innerHTML = '<i class="fas fa-bars"></i>';

const navbar = document.querySelector(".navbar");
const navLinks = document.querySelector(".nav-links");

if (navbar && navLinks) {
    navbar.appendChild(menuBtn);

    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");

        if (navLinks.classList.contains("active")) {
            menuBtn.innerHTML = '<i class="fas fa-times"></i>';
        } else {
            menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
}

/* ==========================
   BOOKING FORM
========================== */

const bookingForm = document.querySelector(".booking form");

if (bookingForm) {

    bookingForm.addEventListener("submit", function(e){

        e.preventDefault();

        const inputs = bookingForm.querySelectorAll("input, textarea, select");

        let valid = true;

        inputs.forEach(input => {

            if(input.value.trim() === ""){

                valid = false;
                input.style.border = "1px solid red";

            }else{

                input.style.border = "1px solid #D4AF37";

            }

        });

        if(valid){

            alert("Thank you! Your booking request has been received. We will contact you shortly.");

            bookingForm.reset();

        }else{

            alert("Please complete all required fields.");

        }

    });

}

/* ==========================
   TESTIMONIAL ROTATOR
========================== */

const testimonials = [

    "Absolutely amazing makeup. I felt beautiful all day!",

    "The best bridal makeup artist I've ever worked with.",

    "Professional, friendly and incredibly talented.",

    "My makeup lasted over 14 hours without touch ups.",

    "I'll definitely book again."

];

const testimonialText = document.querySelector(".testimonial p");

let testimonialIndex = 0;

if(testimonialText){

    setInterval(()=>{

        testimonialIndex++;

        if(testimonialIndex >= testimonials.length){

            testimonialIndex = 0;

        }

        testimonialText.style.opacity = 0;

        setTimeout(()=>{

            testimonialText.innerText = testimonials[testimonialIndex];

            testimonialText.style.opacity = 1;

        },300);

    },5000);

}

/* ==========================
   SCROLL PROGRESS BAR
========================== */

const progressBar = document.createElement("div");

progressBar.id = "progressBar";

document.body.appendChild(progressBar);

window.addEventListener("scroll",()=>{

    const totalHeight=document.documentElement.scrollHeight-window.innerHeight;

    const progress=(window.pageYOffset/totalHeight)*100;

    progressBar.style.width=progress+"%";

});

/* ==========================
   IMAGE CLICK EFFECT
========================== */

document.querySelectorAll(".gallery-grid img").forEach(img=>{

    img.addEventListener("click",()=>{

        img.style.transform="scale(1.15)";

        setTimeout(()=>{

            img.style.transform="scale(1)";

        },250);

    });

});

/* ==========================
   HERO BUTTON ANIMATION
========================== */

document.querySelectorAll(".btn").forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="translateY(-6px) scale(1.04)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="translateY(0) scale(1)";

    });

});

/* ==========================
   CARD HOVER EFFECT
========================== */

document.querySelectorAll(".card").forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect=card.getBoundingClientRect();

        const x=e.clientX-rect.left;

        const y=e.clientY-rect.top;

        card.style.background=
            `radial-gradient(circle at ${x}px ${y}px,
rgba(212,175,55,.15),
rgba(255,255,255,.04))`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.background="rgba(255,255,255,.04)";

    });

});

/* ==========================
   CONSOLE MESSAGE
========================== */

console.log("%cGLAMBYBKY Makeup Studio",
    "color:#D4AF37;font-size:22px;font-weight:bold;");

console.log("%cDesigned with ❤",
    "color:white;font-size:14px;");
/* ==========================================
   app.js - Part 3
   GLAMBYBKY Premium Effects
========================================== */


/* ==========================
   IMAGE LIGHTBOX
========================== */

const images = document.querySelectorAll(".gallery-grid img");

if(images.length){

    const lightbox = document.createElement("div");

    lightbox.className="lightbox";

    lightbox.innerHTML=`

<span class="close-lightbox">&times;</span>

<img src="" alt="Gallery Image">

`;

    document.body.appendChild(lightbox);


    const lightboxImg =
        lightbox.querySelector("img");


    images.forEach(image=>{

        image.addEventListener("click",()=>{

            lightbox.style.display="flex";

            lightboxImg.src=image.src;

        });

    });


    lightbox
        .querySelector(".close-lightbox")
        .addEventListener("click",()=>{

            lightbox.style.display="none";

        });


    lightbox.addEventListener("click",(e)=>{

        if(e.target===lightbox){

            lightbox.style.display="none";

        }

    });

}


/* ==========================
   NUMBER COUNTERS
========================== */


const counters=document.querySelectorAll(".counter");


counters.forEach(counter=>{

    counter.innerText="0";


    const updateCounter=()=>{

        const target=
            Number(counter.dataset.target);


        const current=
            Number(counter.innerText);


        const increment=
            target/100;


        if(current < target){

            counter.innerText=
                Math.ceil(current+increment);

            setTimeout(updateCounter,20);

        }

        else{

            counter.innerText=target;

        }

    };


    const counterObserver=
        new IntersectionObserver(entries=>{

            entries.forEach(entry=>{

                if(entry.isIntersecting){

                    updateCounter();

                    counterObserver.unobserve(counter);

                }

            });

        });


    counterObserver.observe(counter);


});


/* ==========================
   GOLD PARTICLES BACKGROUND
========================== */


const particleContainer=
    document.createElement("div");


particleContainer.className=
    "particles";


document.body.appendChild(
    particleContainer
);



for(let i=0;i<35;i++){

    const particle=
        document.createElement("span");


    particle.className="particle";


    particle.style.left=
        Math.random()*100+"%";


    particle.style.animationDuration=
        (5+Math.random()*8)+"s";


    particle.style.animationDelay=
        Math.random()*5+"s";


    particleContainer.appendChild(particle);

}



/* ==========================
   PARALLAX HERO
========================== */


const hero =
    document.querySelector(".hero");


if(hero){

    window.addEventListener("scroll",()=>{


        let offset =
            window.pageYOffset;


        hero.style.backgroundPositionY =
            offset * 0.4 + "px";


    });


}



/* ==========================
   CUSTOM CURSOR EFFECT
========================== */


const cursor =
    document.createElement("div");


cursor.className="cursor";


document.body.appendChild(cursor);



document.addEventListener(
    "mousemove",
    (e)=>{


        cursor.style.left=
            e.clientX+"px";


        cursor.style.top=
            e.clientY+"px";


    });


document.querySelectorAll(
    "a,button,.card,img"
)
    .forEach(element=>{


        element.addEventListener(
            "mouseenter",
            ()=>{

                cursor.classList.add("active");

            });


        element.addEventListener(
            "mouseleave",
            ()=>{

                cursor.classList.remove("active");

            });


    });



/* ==========================
   AUTO YEAR FOOTER
========================== */


const year =
    document.querySelector(".year");


if(year){

    year.innerText=
        new Date().getFullYear();

}


/* ==========================
   PREVENT EMPTY LINKS
========================== */


document.querySelectorAll("a")
    .forEach(link=>{


        link.addEventListener(
            "click",
            ()=>{


                if(link.getAttribute("href")==="#"){

                    event.preventDefault();

                }


            });


    });


console.log(
    "GLAMBYBKY premium effects loaded ✨"
);
