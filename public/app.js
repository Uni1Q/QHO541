function deleteMovie(id){

  axios.delete(`/content/${id}`, {})
  .then(response => {
    // Reload the page


    console.log('Delete request successful:', response.data);
    window.location.reload();
  })
  .catch(error => {
    console.error('Error occurred during delete request:', error);
    alert("Error occurred during delete request")
  });
  
}

function onEdit(id){

  window.location.href=`/edit/${id}`



}

function saveEdit(id) {
  const description = document.getElementById("description").value;
  const type = document.getElementById("type").value;
  const title = document.getElementById("title").value;
  const cast = document.getElementById("cast").value;
  const country = document.getElementById("country").value;
  const date_added = document.getElementById("date_added").value;
  const release_year = document.getElementById("release_year").value;
  const rating = document.getElementById("rating").value;
  const duration = document.getElementById("duration").value;
  const listed_in = document.getElementById("listed_in").value;

  const data = {
    description,
    type,
    title,
    cast,
    country,
    date_added,
    release_year,
    rating,
    duration,
    listed_in
  };

  axios.put(`/content/${id}`, data)
    .then(response => {
      // Handle the response data
      console.log('Response:', response.data);
      alert("Edited Successfully");
      window.location.href = "/";
    })
    .catch(error => {
      // Handle any errors that occurred during the request
      console.error('Error:', error);
      alert("Unable to Edit. Please try again later!");
    });
}


function handleSearch(){

 searchText=document.getElementById("search").value
  window.location.href=`/?searchText=${searchText}`



}


function saveAdd() {
  const title = document.getElementById("title").value;
  const type = document.getElementById("type").value;
  const description = document.getElementById("description").value;
  const cast = document.getElementById("cast").value;
  const country = document.getElementById("country").value;
  const date_added = document.getElementById("date_added").value;
  const release_year = document.getElementById("release_year").value;
  const rating = document.getElementById("rating").value;
  const duration = document.getElementById("duration").value;
  const listed_in = document.getElementById("listed_in").value;

  // Perform field validation
  if (!title || !type || !description) {
    alert("Please fill in all required fields.");
    return;
  }

  const data = {
    title,
    type,
    description,
    cast,
    country,
    date_added,
    release_year,
    rating,
    duration,
    listed_in
  };

  axios.post('/addMovie', data)
    .then(response => {
      // Handle the response data
      console.log('Response:', response.data);
      alert("Added Successfully");
      window.location.href = "/";
    })
    .catch(error => {
      // Handle any errors that occurred during the request
      console.error('Error:', error);
      alert("Unable to Add. Please try again later!");
    });
}



// // Function to get a random item of a specific type from the database
// async function getRandomItemByType(type) {
//   try {
//     const client = await MongoClient.connect(uri);
//     const db = client.db();

//     // Find items of the specified type
//     const items = await db.collection(collectionName).find({ type }).toArray();

//     // Choose a random item from the filtered items
//     const randomItem = items[Math.floor(Math.random() * items.length)];

//     client.close();

//     return randomItem;
//   } catch (error) {
//     console.error('Error:', error);
//   }
// }

// // Function to display the item details in the console
// function displayItemDetails(item) {
//   console.log('Title:', item.title);
//   console.log('Type:', item.type);
//   console.log('Genre:', item.listed_in);
//   console.log('Release Year:', item.release_year);
// }

// // Function to fetch a random item from the API and display its details
// async function fetchRandomItem() {
//   try {
//     // Fetch a random item from the API
//     const response = await axios.get('mongodb://127.0.0.1:27017/Netflix');
//     const items = response.data;

//     // Choose a random item from the fetched items
//     const randomItem = items[Math.floor(Math.random() * items.length)];

//     // Display the item details
//     displayItemDetails(randomItem);
//   } catch (error) {
//     console.error('Error:', error);
//   }
// }




// // Function to dynamically create HTML elements for item details
// function createItemElement(item, containerId) {
//     const container = document.getElementById(containerId);
  
//     const title = document.createElement('div');
//     title.classList.add('movie-title');
//     title.textContent = item.title;
//     container.appendChild(title);
  
//     const description = document.createElement('div');
//     description.textContent = item.description;
//     container.appendChild(description);
  
//     // Add more properties as needed
//   }
  
//   // Function to display the item details on the website
//   ///function displayItemOnWebsite(item, containerId) {
//   //  const container = document.getElementById(containerId);
//   //  container.innerHTML = ''; // Clear previous content
//   //  createItemElement(item, containerId);
//  // }
  
//   // Fetch a random TV show from the API and display it on the website
//   function fetchRandomTVShow() {
//     axios.get('mongodb://127.0.0.1:27017/Netflix')
//       .then(response => {
//         const tvShows = response.data;
//         const randomTVShow = tvShows[Math.floor(Math.random() * tvShows.length)];
//         displayItemOnWebsite(randomTVShow, 'tvShow');
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
//   }
  
//   // Fetch a random movie from the API and display it on the website
//   function fetchRandomMovie() {
//     axios.get('mongodb://127.0.0.1:27017/Netflix')
//       .then(response => {
//         const movies = response.data;
//         const randomMovie = movies[Math.floor(Math.random() * movies.length)];
//         displayItemOnWebsite(randomMovie, 'movie');
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
//   }
  



  
//   // Call the functions to fetch and display a random TV show and movie
//   fetchRandomTVShow();
//   fetchRandomMovie();
  

// // Call the functions to fetch and display a random TV show and movie
// const tvShowPromise = getRandomItemByType('TV Show');
// const moviePromise = getRandomItemByType('Movie');

// Promise.all([tvShowPromise, moviePromise])
//   .then(([tvShow, movie]) => {
//     if (tvShow) {
//       console.log('TV Show:');
//       displayItemDetails(tvShow);
//     } else {
//       console.log('Fetching a random TV show:');
//       fetchRandomItem();
//     }

//     if (movie) {
//       // If a random movie is found in the database, display its details
//       console.log('Movie:');
//       displayItemDetails(movie);
//     } else {
//       // If no random movie is found in the database, fetch a random movie from the API
//       console.log('Fetching a random movie:');
//       fetchRandomItem();
//     }
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });

// // Display data to the HTML page

// function displayToFrontend() {
//     axios.get('mongodb://127.0.0.1:27017/Netflix')
//         .then(response => {
//             const tvShows = response.data;
//             let divCards = document.querySelector("div.card-list")
//             divCards.innerHTML = tvShows.title
//         })
//         .catch(error => {
//             console.error('Error:', error);
//         });
// }


