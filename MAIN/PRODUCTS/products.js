// to use items open and close in a new window 
 
 function showProduct(id) {
        document.getElementById("main-page").style.display = "none";
        document.getElementById("product" + id).style.display = "block";
      }
    
    
//open dropdown to open a all items using in dropdown click

function showProductPage() {
  const selection = document.getElementById("productSelect").value;
  document.querySelectorAll(".product-page").forEach(div => div.style.display = "none");
  if (selection) {
    document.getElementById("product"+selection).style.display = "block";
  }
}



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

//to show a dropdown in search box and items

function toggleDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function toggleDropdowns() {
  document.querySelector(".search-box").classList.toggle("show");
}


// Optional: Close dropdown when clicking outside


//using search on searchbar

const input = document.getElementById('searchInput');
  const results = document.getElementById('searchResults');
  const pages = document.querySelectorAll('.page');

  input.addEventListener('input', () => {
    const query = input.value.toLowerCase();
    results.innerHTML = '';

    if (query.length === 0) return;

    pages.forEach(page => {
      const text = page.textContent.toLowerCase();
      const title = page.dataset.title;

      if (text.includes(query)) {
        const div = document.createElement('div');
        div.className = 'result';
        div.innerHTML = `<strong>${title}</strong><br>${page.textContent}`;
        results.appendChild(div);
      }
    });
  });
const dropdown = document.getElementsByClassName("dropdown-content");
  document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove('open');
    }})
