document.addEventListener('DOMContentLoaded', function () {
    const filmsList = document.getElementById('film');
    const movieDetails = document.getElementById('movie-details');
  
    // Function to fetch movie data and populate the menu
    function fetchMoviesAndPopulateMenu() {
      fetch('http://localhost:3000/')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          // Remove placeholder li element
          const placeholderLi = document.querySelector('#films li.placeholder');
          if (placeholderLi) {
            filmsList.removeChild(placeholderLi);
          }
  
          // Populate the films list
          data.forEach(movie => {
            const filmItem = document.createElement('li');
            filmItem.classList.add('film', 'item');
            filmItem.setAttribute('data-id', movie.id);
            filmItem.textContent = movie.title;
            if (movie.tickets_sold >= movie.capacity) {
              filmItem.classList.add('sold-out');
            }
            filmItem.addEventListener('click', function () {
              fetchMovieDetails(movie.id);
            });
  
            filmsList.appendChild(filmItem);
          });
        })
        .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
        });
    }
  
    // Function to fetch movie details and display them
    function fetchMovieDetails(movieId) {
      fetch(`http://localhost:3000/`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(movie => {
          // Display movie details
          const availableTickets = movie.capacity - movie.tickets_sold;
          movieDetails.innerHTML = `
            <h2> Manos: The Hands Of Fate </h2>
            <img src="https://www.gstatic.com/tv/thumb/v22vodart/47781/p47781_v_v8_ac.jpg" alt=" Poster">
            <p>Runtime: 118 minutes</p>
            <p>Showtime: "06:45PM"</p>
            <p>Available Tickets: 6 Tickets remaining</p>
            <p> Description:A family gets lost on the road and stumbles upon a hidden, 
            underground, devil-worshiping cult led by the fearsome Master and his servant Torgo 
            </p>
            <button id="Buy-ticket" data-id="${movie.id}" ${availableTickets === 0 ? 'disabled' : ''}>
              ${availableTickets === 0 ? 'Sold Out' : 'Buy Ticket'}
            </button>
          `;
          // Add event listener to Buy Ticket button
          const buyTicketBtn = document.getElementById('Buy-ticket');
          buyTicketBtn.addEventListener('click', function () {
            buyTicket(movie.id);
          });
        })
        .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
        });
    }
  
    // Function to buy a ticket
    function buyTicket(movieId) {
      fetch(`http://localhost:3000/`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          tickets_sold: 'increment' // Increment the tickets_sold count on the server
        })
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to buy ticket');
          }
          return response.json();
        })
        .then(movie => {
          fetchMovieDetails(movieId); // Refresh movie details after buying ticket
        })
        .catch(error => {
          console.error('There was a problem with the buy ticket operation:', error);
        });
    }
  
    // Fetch movies and populate the menu when the page loads
    fetchMoviesAndPopulateMenu();
  
  });