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
