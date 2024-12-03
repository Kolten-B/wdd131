window.onload = function() {
    // Get the review count from localStorage
    const reviewCount = localStorage.getItem("submissionCount") || 0;
  
    // Display the review count on the page
    document.getElementById("reviewCount").textContent = reviewCount;
  };
  