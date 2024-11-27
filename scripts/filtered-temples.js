// Array of Temple Objects
const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    
    {
        templeName: "Birmingham England",
        location: "Royal Sutton Coldfield, Birmingham, United Kingdom",
        dedicated: "Planning",
        area: 10800,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/birmingham-england-temple/birmingham-england-temple-45435-thumb.jpg"
      }
   
    ,
    {
        templeName: "Helsinki Finland",
        location: "Espoo, Finland",
        dedicated: "2006, October, 22",
        area: 16350,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/helsinki-finland-temple/helsinki-finland-temple-22169-main.jpg",
        imageAlt: "Helsinki Finland Temple"
      },
      {
        templeName: "Preston England",
        location: "Chorley, Lancashire, England",
        dedicated: "1998, June, 7-10",
        area: 69630,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/preston-england-temple/preston-england-temple-45357-main.jpg",
        imageAlt: "Preston England Temple"
      }
  ];
  
  // Function to dynamically create temple cards
  function displayTemples(templeArray) {
    const templeGallery = document.querySelector('.temple-gallery');
    templeGallery.innerHTML = ''; // Clear the gallery before re-rendering
  
    templeArray.forEach(temple => {
      const templeCard = document.createElement('figure');
      templeCard.classList.add('temple-card');
  
      // Create and append temple image with lazy loading
      const templeImage = document.createElement('img');
      templeImage.setAttribute('src', temple.imageUrl);
      templeImage.setAttribute('alt', `Image of ${temple.templeName}`);
      templeImage.setAttribute('loading', 'lazy');
      templeCard.appendChild(templeImage);
  
      // Create and append temple name
      const templeName = document.createElement('figcaption');
      templeName.textContent = temple.templeName;
      templeCard.appendChild(templeName);
  
      // Create and append temple location
      const templeLocation = document.createElement('p');
      templeLocation.textContent = `Location: ${temple.location}`;
      templeCard.appendChild(templeLocation);
  
      // Create and append temple dedication date
      const templeDedicated = document.createElement('p');
      templeDedicated.textContent = `Dedicated: ${temple.dedicated}`;
      templeCard.appendChild(templeDedicated);
  
      // Create and append temple area
      const templeArea = document.createElement('p');
      templeArea.textContent = `Area: ${temple.area} sq ft`;
      templeCard.appendChild(templeArea);
  
      // Append the temple card to the gallery
      templeGallery.appendChild(templeCard);
    });
  }
  
  // Call the function to display all temples on page load
  displayTemples(temples);
  
  // Function to handle the filtering based on user interaction
  document.getElementById('home').addEventListener('click', () => displayTemples(temples));
  document.getElementById('old').addEventListener('click', () => {
    const oldTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
    displayTemples(oldTemples);
  });
  document.getElementById('new').addEventListener('click', () => {
    const newTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
    displayTemples(newTemples);
  });
  document.getElementById('large').addEventListener('click', () => {
    const largeTemples = temples.filter(temple => temple.area > 90000);
    displayTemples(largeTemples);
  });
  document.getElementById('small').addEventListener('click', () => {
    const smallTemples = temples.filter(temple => temple.area < 10000);
    displayTemples(smallTemples);
  });
  // Set the current year
document.getElementById("year").textContent = new Date().getFullYear();

// Set the last modified date of the document
document.getElementById("last-modified").textContent = document.lastModified;
