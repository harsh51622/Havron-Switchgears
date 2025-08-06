const form = document.getElementById("enquiryForm");
    const modal = document.getElementById("enquiryModal");
    const closeBtn = document.getElementById("closeBtn");

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const formData = new FormData(form);

      fetch("http://127.0.0.1:5000/submit", {
        method: "POST",
        body: formData
      })
      .then(res => {
        if (res.ok) {
          alert("✅ Your enquiry is received. Our team will contact you shortly.");
          form.reset();
          modal.classList.add("hidden");
        } else {
          alert("❌ Submission failed.");
        }
      })
      .catch(err => {
        alert("❌ Error occurred.");
        console.error(err);
      });
    });

    closeBtn.addEventListener("click", () => {
      modal.classList.add("hidden");
      form.requestSubmit(); // Trigger submit on close
    });

    const slidesContainer = document.getElementById("slides");
    const dotsContainer = document.getElementById("dots");
    let slideItems = slidesContainer.children;
    const totalOriginalSlides = slideItems.length;
    let currentIndex = 1;
    let interval;

    // Clone first and last slide
    const firstClone = slideItems[0].cloneNode(true);
    const lastClone = slideItems[totalOriginalSlides - 1].cloneNode(true);

    slidesContainer.appendChild(firstClone);
    slidesContainer.insertBefore(lastClone, slideItems[0]);

    const totalSlides = slidesContainer.children.length;

    // Set initial position (because of clone at start)
    slidesContainer.style.transform = `translateX(-100%)`;

    // Create dots
    for (let i = 0; i < totalOriginalSlides; i++) {
      const dot = document.createElement("span");
      dot.classList.add("dot");
      dot.dataset.index = i + 1;
      dot.addEventListener("click", (e) => {
        currentIndex = Number(e.target.dataset.index);
        updateSlider(true);
        resetInterval();
      });
      dotsContainer.appendChild(dot);
    }

    const updateDots = () => {
      [...dotsContainer.children].forEach(dot => dot.classList.remove("active"));
      let realIndex = currentIndex - 1;
      if (realIndex < 0) realIndex = totalOriginalSlides - 1;
      if (realIndex >= totalOriginalSlides) realIndex = 0;
      dotsContainer.children[realIndex].classList.add("active");
    };

    const updateSlider = (animate = true) => {
      if (animate) {
        slidesContainer.style.transition = 'transform 0.5s ease-in-out';
      } else {
        slidesContainer.style.transition = 'none';
      }
      slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
      updateDots();
    };

    const nextSlide = () => {
      currentIndex++;
      updateSlider(true);
      if (currentIndex === totalSlides - 1) {
        setTimeout(() => {
          currentIndex = 1;
          updateSlider(false);
        }, 500);
      }
    };

    const prevSlide = () => {
      currentIndex--;
      updateSlider(true);
      if (currentIndex === 0) {
        setTimeout(() => {
          currentIndex = totalOriginalSlides;
          updateSlider(false);
        }, 500);
      }
    };

    const startInterval = () => {
      interval = setInterval(nextSlide, 3000);
    };

    const resetInterval = () => {
      clearInterval(interval);
      startInterval();
    };

    // Arrow button listeners
    document.getElementById("nextBtn").addEventListener("click", () => {
      nextSlide();
      resetInterval();
    });

    document.getElementById("prevBtn").addEventListener("click", () => {
      prevSlide();
      resetInterval();
    });

    // Keyboard arrow support (optional)
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") {
        nextSlide();
        resetInterval();
      } else if (e.key === "ArrowLeft") {
        prevSlide();
        resetInterval();
      }
    });

    // Swipe support
    let startX = 0;
    slidesContainer.addEventListener("touchstart", e => startX = e.touches[0].clientX);
    slidesContainer.addEventListener("touchend", e => {
      const endX = e.changedTouches[0].clientX;
      if (endX < startX - 50) {
        nextSlide();
        resetInterval();
      } else if (endX > startX + 50) {
        prevSlide();
        resetInterval();
      }
    });

    // Initial setup
    updateSlider(false);
    startInterval();








let searchicon = document.querySelector(".searchbutton")
let headerright = document.querySelector(".headerright")
let searchbar = document.querySelector("#searchbar")
let submit = document.querySelector(".submit")
let header = document.querySelector(".header")



const counterBox1 = document.getElementById("counter-box1");
let i1 = 1;
const intervalId1 = setInterval(() => {
  counterBox1.textContent = i1;
  i1++;
  if (i1 > 15) {
    clearInterval(intervalId1);
  }
}, 1000);

const counterBox2 = document.getElementById("counter-box2");
let i2 = 1;
const intervalId2 = setInterval(() => {
  counterBox2.textContent = i2;
  i2++;
  if (i2 > 100) {
    clearInterval(intervalId2);
  }
}, 100);

const counterBox3 = document.getElementById("counter-box3");
let i3 = 1;
const intervalId3 = setInterval(() => {
  counterBox3.textContent = i3;
  i3++;
  if (i3 > 50) {
    clearInterval(intervalId3);
  }
}, 10);

const counterBox4 = document.getElementById("counter-box4");
let i4 = 1;
const intervalId4 = setInterval(() => {
  counterBox4.textContent = i4;
  i4++;
  if (i4 > 10000) {
    clearInterval(intervalId4);
  }
}, 1);

const counterBox5 = document.getElementById("counter-box5");
let i5 = 1;
const intervalId5 = setInterval(() => {
  counterBox5.textContent = i5;
  i5++;
  if (i5 > 80) {
    clearInterval(intervalId5);
  }
}, 100);

function opendropdown() 
{
  const dropdown =document.getElementById("productSelect").value;
  if (dropdown) {
    window.location.href = dropdown;
  }
}
  const button = document.getElementsByClassName('mcbs');

    button.addEventListener('click', () => {
      button.classList.toggle('active');
    });


    //header ko access karna ka leya 


function knowmore  ()  {

  window.location.href ="/MAIN/ABOUT US/about us.html"
}


 const box = document.querySelector('.advertising1');

    box.addEventListener('click', () => {
      box.classList.toggle('active');
    });

 