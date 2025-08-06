let searchicon = document.querySelector(".searchbutton")
let headerright = document.querySelector(".headerright")
let searchbar = document.querySelector("#searchbar")
let submit = document.querySelector(".submit")
let header = document.querySelector(".header")




const heroes = document.querySelectorAll(".hero")
let hIndex = 0;
setInterval(() => {
  heroes.forEach(h => h.style.opacity = 0)
  heroes[hIndex].style.opacity = 1;
  hIndex = (hIndex + 1) % heroes.length;
}, 2000);

const counterBox1 = document.getElementById("counter-box1");
let i1 = 1;
const intervalId1 = setInterval(() => {
  counterBox1.textContent = i1;
  i1++;
  if (i1 > 2) {
    clearInterval(intervalId1);
  }
}, 1000);

const counterBox2 = document.getElementById("counter-box2");
let i2 = 1;
const intervalId2 = setInterval(() => {
  counterBox2.textContent = i2;
  i2++;
  if (i2 > 10) {
    clearInterval(intervalId2);
  }
}, 100);

const counterBox3 = document.getElementById("counter-box3");
let i3 = 1;
const intervalId3 = setInterval(() => {
  counterBox3.textContent = i3;
  i3++;
  if (i3 > 100) {
    clearInterval(intervalId3);
  }
}, 10);

const counterBox4 = document.getElementById("counter-box4");
let i4 = 1;
const intervalId4 = setInterval(() => {
  counterBox4.textContent = i4;
  i4++;
  if (i4 > 5000) {
    clearInterval(intervalId4);
  }
}, 1);

const counterBox5 = document.getElementById("counter-box5");
let i5 = 1;
const intervalId5 = setInterval(() => {
  counterBox5.textContent = i5;
  i5++;
  if (i5 > 10) {
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

function navigateToPage() {
  const dropdown = document.getElementById('pageDropdown');
  const selectedValue = dropdown.value;
  if (selectedValue) {
    window.location.href = selectedValue;
  }
}