document.addEventListener("DOMContentLoaded", function() {

  const baseURL = 'http://localhost:3000';

  const textList = document.getElementById("textList");
  const imageDetails = document.getElementById("imageDetails");
  const placeholderImage = document.getElementById("image1"); // Define placeholderImage globally
   const filmItems = document.querySelectorAll('.film.item a');

  textList.addEventListener("click", function(event) {
    event.preventDefault();
    if (event.target.tagName === "A") {
      const imageUrl = event.target.getAttribute("href");
      placeholderImage.src = imageUrl; // Replace placeholder image with new image
    }
  });

  filmItems.forEach(item => {
    item.addEventListener('click', function() {
      const filmId = this.dataset.filmId; // Retrieve the film ID from the data attribute
      fetchMovieDetails(filmId); // Fetch details of the clicked film
    });
  });


function displayMovieDetails(details) {
 
 const titleElement = document.getElementById("Title");
  const runtimeElement = document.getElementById("runtime");
  const descriptionElement = document.getElementById("film-info");
  const showtimeElement = document.getElementById("showtime");
  const ticketsRemainingElement = document.getElementById("Ticket-num");
  const posterElement = document.getElementById("image1");

  titleElement.textContent = details.title;
  runtimeElement.textContent =  details.runtime + " minutes";
  descriptionElement.textContent = details.description;
  showtimeElement.textContent =  details.showtime;
  ticketsRemainingElement.textContent =  (details.capacity - details.tickets_sold)+" remaining tickets" ;
  posterElement.src = details.poster;
}

const movies = [
    {
    "id": "1",
    "title": "The Giant Gila Monster",
    "runtime": "108",
    "capacity": 30,
    "showtime": "04:00PM",
    "tickets_sold": 27,
    "description": "A giant lizard terrorizes a rural Texas community and a heroic teenager attempts to destroy the creature.",
    "poster": "https://www.gstatic.com/tv/thumb/v22vodart/2157/p2157_v_v8_ab.jpg"
  },{
    "id": "2",
    "title": "Manos: The Hands Of Fate",
    "runtime": "118",
    "capacity": 50,
    "showtime": "06:45PM",
    "tickets_sold": 44,
    "description": "A family gets lost on the road and stumbles upon a hidden, underground, devil-worshiping cult led by the fearsome Master and his servant Torgo.",
    "poster": "https://www.gstatic.com/tv/thumb/v22vodart/47781/p47781_v_v8_ac.jpg"
  },
  {
    "id": "3",
    "title": "Time Chasers",
    "runtime": "93",
    "capacity": 50,
    "showtime": "09:30PM",
    "tickets_sold": 31,
    "description": "An inventor comes up with a time machine, but must prevent its abuse at the hands of an evil C.E.O.",
    "poster": "https://www.gstatic.com/tv/thumb/v22vodart/23342/p23342_v_v8_ab.jpg"
  },
  {
    "id": "4",
    "title": "The Touch Of Satan",
    "runtime": "101",
    "capacity": 40,
    "showtime": "09:00PM",
    "tickets_sold": 31,
    "description": "A young man meets a farm girl who is actually a witch.",
    "poster": "https://www.gstatic.com/tv/thumb/v22vodart/43468/p43468_v_v8_aa.jpg"
  }, {
    "id": "5",
    "title": "Santa Claus Conquers The Martians",
    "runtime": "96",
    "capacity": 50,
    "showtime": "03:30PM",
    "tickets_sold": 45,
    "description": "The Martians kidnap Santa Claus because there is nobody on Mars to give their children presents.",
    "poster": "https://www.gstatic.com/tv/thumb/v22vodart/4232/p4232_v_v8_aa.jpg"
  },
  {
    "id": "6",
    "title": "Track Of The Moon Beast",
    "runtime": "112",
    "capacity": 30,
    "showtime": "10:30PM",
    "tickets_sold": 16,
    "description": "A young man is transformed into a hideous 'moon beast' due to a meteor fragment lodged in his body.",
    "poster": "https://www.gstatic.com/tv/thumb/v22vodart/39804/p39804_v_v8_ab.jpg"
  },
  {
    "id": "7",
    "title": "The Skydivers",
    "runtime": "94",
    "capacity": 30,
    "showtime": "07:30PM",
    "tickets_sold": 22,
    "description": "A woman seeks revenge on her former lover, who owns a skydiving business.",
    "poster": "https://www.gstatic.com/tv/thumb/v22vodart/40518/p40518_v_v8_aa.jpg"
  },
  {
    "id": "8",
    "title": "The Killer Shrews",
    "runtime": "115",
    "capacity": 40,
    "showtime": "08:30PM",
    "tickets_sold": 32,
    "description": "On an isolated island, a small group of people are terrorized by giant voracious shrews in the midst of a hurricane.",
    "poster": "https://www.gstatic.com/tv/thumb/v22vodart/1466/p1466_v_v8_ab.jpg"
  },
  {
    "id": "9",
    "title": "Project Moon Base",
    "runtime": "99",
    "capacity": 40,
    "showtime": "07:30PM",
    "tickets_sold": 22,
    "description": "A saboteur posing as a scientist strives to destroy the world's first space station.",
    "poster": "https://www.gstatic.com/tv/thumb/v22vodart/46755/p46755_v_v8_aa.jpg"
  },
  {
    "id": "10",
    "title": "The Giant Spider Invasion",
    "runtime": "122",
    "capacity": 50,
    "showtime": "10:00PM",
    "tickets_sold": 44,
    "description": "Giant spiders from another dimension invade Wisconsin.",
    "poster": "https://www.gstatic.com/tv/thumb/v22vodart/42171/p42171_v_v8_ab.jpg"
  },
  {
    "id": "11",
    "title": "Catalina Caper",
    "runtime": "104",
    "capacity": 30,
    "showtime": "06:00PM",
    "tickets_sold": 12,
    "description": "A group of swingin' teens take time out from having fun in the sun to try to foil a group of crooks searching for a stolen scroll.",
    "poster": "https://www.gstatic.com/tv/thumb/v22vodart/58122/p58122_v_v8_aa.jpg"
  },
  {
    "id": "12",
    "title": "Secret Agent Super Dragon",
    "runtime": "104",
    "capacity": 30,
    "showtime": "07:00PM",
    "tickets_sold": 20,
    "description": "A series of murders in Michigan lead an American secret agent to Amsterdam, where he uncovers a plot to imperil the world with a potent new drug.",
    "poster": "https://www.gstatic.com/tv/thumb/v22vodart/93417/p93417_v_v8_aa.jpg",
    "showing_id": "12"
  },
  {
    "id": "13",
    "title": "Wild Rebels",
    "runtime": "100",
    "capacity": 40,
    "showtime": "09:00PM",
    "tickets_sold": 31,
    "description": "A stock car driver goes undercover as the wheel man for a motorcycle gang.",
    "poster": "https://www.gstatic.com/tv/thumb/v22vodart/45367/p45367_v_v8_aa.jpg"
  },
  {
    "id": "14",
    "title": "Danger: Diabolik",
    "runtime": "111",
    "capacity": 50,
    "showtime": "08:00PM",
    "tickets_sold": 40,
    "description": "International man of mystery Diabolik and his lover pull off heist after heist, all while European cops led by Inspector Ginko and envious mobsters led by Ralph Valmont are closing in on them.",
    "poster": "https://www.gstatic.com/tv/thumb/v22vodart/11850/p11850_v_v8_aa.jpg"
  },
  {
    "id": "15",
    "title": "Village Of The Giants",
    "runtime": "98",
    "capacity": 50,
    "showtime": "04:45PM",
    "tickets_sold": 33,
    "description": "Delinquent teen-agers ingest a substance and grow thirty feet tall, then proceed to take over a small town.",
    "poster": "https://www.gstatic.com/tv/thumb/v22vodart/37991/p37991_v_v8_aa.jpg"
  }// Add more movie objects here
];
// Display movie details for the first movie in the array


function getMovieDetails(title) {
  let movieIndex;
  switch (title) {
    case "The Giant Gila Monster":
      movieIndex = 0;
      break;
    case "Manos: The Hands Of Fate":
      movieIndex = 1;
      break;
    case "Time Chasers":
      movieIndex = 2;
      break;
      case "The Touch of satan":
      movieIndex = 3;
      break;
      case "Santa Claus Conquers The Martians":
      movieIndex = 4;
      break;
      case "Track Of The Moon Beast":
      movieIndex = 5;
      break;
      case "The Skydivers":
      movieIndex = 6;
      break;
      case "The Killer Shrews":
      movieIndex = 7;
      break;
      case "Project Moon Base":
      movieIndex = 8;
      break;
      case "The Giant Spider Invasion":
      movieIndex = 9;
      break;
      case "Catalina Caper":
      movieIndex = 10;
      break;
      case "Secret Agent Super Dragon":
      movieIndex = 11;
      break;
      case "Wild Rebels":
      movieIndex = 12;
      break;
      case "Danger: Diabolik":
      movieIndex = 13;
      break;
      case "Village Of The Giants":
      movieIndex = 14;
      break;

    // Add more cases for other movie titles
    default:
      }
  return movies[movieIndex]; // Return details of the movie
}
// Call getMovieDetails and displayMovieDetails for each movie title
function getMovieDetails(filmId) {
  return movies.find(movie => movie.id === filmId) || null;
}
filmItems.forEach(item => {
  item.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default action of following the link
    
    const filmId = this.parentElement.getAttribute("film-id"); // Retrieve the film ID from the data attribute of the parent li
    fetchMovieDetails(filmId); // Fetch details of the clicked film
  });
});

displayMovieDetails(movies[0]);

function checkAvailability(button) {
  var isSoldOut = true; // Replace this with your actual logic to check if the movie is sold out

  if (isSoldOut) {
    // Change button text to "Sold Out"
    button.textContent = "Sold Out";

    // Add class "sold-out" to the parent li element
    var filmItem = button.parentElement;
    filmItem.classList.add("sold-out");
  } else {
    // Perform other actions if the movie is not sold out
    // For example, redirect to booking page or show available tickets
  }
}
function buyTicket(button) {
  var filmItem = button.parentElement;
  var ticketCountElement = filmItem.querySelector('.count');
  var availableTickets = parseInt(ticketCountElement.textContent);

  // Check if tickets are available
  if (availableTickets > 0) {
    // Decrease the available ticket count
    availableTickets--;

    // Update the ticket count on the frontend
    ticketCountElement.textContent = availableTickets;

    // Update the ticket count on the backend (simulated with localStorage)
    var filmId = filmItem.getAttribute('data-id');
    localStorage.setItem('film_' + filmId, availableTickets);
  } else {
    // If tickets are sold out, display a message (you can customize this according to your UI)
    alert('Tickets are sold out for this movie!');
  }
}

// Function to initialize ticket counts from localStorage
function initializeTicketCounts() {
  var filmItems = document.querySelectorAll('.film-item');
  filmItems.forEach(function(item) {
    var filmId = item.getAttribute('data-id');
    var ticketCountElement = item.querySelector('.count');
    var availableTickets = parseInt(localStorage.getItem('film_' + filmId));

    if (!isNaN(availableTickets)) {
      ticketCountElement.textContent = availableTickets;
    }
  });
}

// Initialize ticket counts when the page loads
initializeTicketCounts();

});



  