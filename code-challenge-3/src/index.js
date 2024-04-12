document.addEventListener("DOMContentLoaded", function() {
    const textList = document.getElementById("textList");
    const imageDetails = document.getElementById("imageDetails");
    

    textList.addEventListener("click", function(event) {
      event.preventDefault();
      if (event.target.tagName === "A") {
        const imageUrl = event.target.getAttribute("href");
        getImageDetails(imageUrl)
          .then(details => {
            displayImageDetails(imageDetails, imageUrl, details);
          })
          .catch(error => {
            console.error("Error fetching image details:", error);
          });
      }
    });

    function getImageDetails(imageUrl) {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = function() {
          const averageSize = (this.naturalWidth + this.naturalHeight) / 2;
          resolve({
            width: this.naturalWidth,
            height: this.naturalHeight,
            averageSize: averageSize.toFixed(2) // Round to 2 decimal places
          });
        };
        img.onerror = function() {
          reject("Failed to load image");
        };
        img.src = imageUrl;
      });
    }

    function displayImageDetails(container, imageUrl, details) {
        container.innerHTML = `
           <img src="${imageUrl}" alt="Image">
          <p>URL: ${imageUrl}</p>
                  `;
                }
              
                
    });
    const textlistDiv = document.getElementById("textlist");
    
    // Get all movie title elements
    const movieTitleElements = document.querySelectorAll(".textlist");
    
    // Add click event listener to each movie title element
    movieTitleElements.forEach(titleElement => {
      titleElement.addEventListener("click", function() {
        // Extract movie title from clicked text
        const textlist = this.textContent;
        
        // Assuming you have a function to get movie details based on title
        const textList= getMovieDetails(textList);
        
        // Display movie details in the movie details div
        displayMovieDetails(textList,textList);
      });
    });
    
    // Function to get movie details based on title (replace with your implementation)
    function getMovieDetails(textList) {
      // Here you would fetch movie details based on the title
      // For this example, I'll just return a dummy object
      return {
        title:"The Giant Gila Monster", 
        runtime: "108 minutes",
        capacity: 30,
        showtime: "04:00 PM",
        tickets_sold: 27,
        description: "A giant lizard terrorizes a rural Texas community and a heroic teenager attempts to destroy the creature."
      };
    }
    
    // Function to display movie details in the specified div
    function displayMovieDetails(container, details) {
      container.innerHTML = `
        <h2>${details.title}</h2>
        <p>Runtime: ${details.runtime}</p>
        <p>Capacity: ${details.capacity}</p>
        <p>Showtime: ${details.showtime}</p>
        <p>Tickets Sold: ${details.tickets_sold}</p>
        <p>Description: ${details.description}</p>
      `;
    }
  ;
  
