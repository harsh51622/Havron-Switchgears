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



