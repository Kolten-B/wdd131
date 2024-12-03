const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
  ];
  
  window.onload = function() {
    const productSelect = document.getElementById("product");
  
    // Dynamically add product options
    products.forEach(product => {
      const option = document.createElement("option");
      option.value = product.id;
      option.textContent = product.name;
      productSelect.appendChild(option);
    });
  };
  
  // On form submission (when navigating to review.html), update the review count
  const form = document.querySelector("form");
  form.onsubmit = function() {
    let submissionCount = localStorage.getItem("submissionCount") || 0;
    submissionCount = parseInt(submissionCount) + 1;
    localStorage.setItem("submissionCount", submissionCount);
  };
  