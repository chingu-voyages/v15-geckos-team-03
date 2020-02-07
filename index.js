const giphy_api_key = "xOsO9SpwmmPd30XSkhzM7x9nB5GLIXva";

//Connect API key and Search Endpoint url
const getGifs = () => {
  const gif = document.getElementById("gifs").value;
  const search_endpoint = `https://api.giphy.com/v1/gifs/search?q=${gif}&api_key=${giphy_api_key}`;

  //Fetching Data from API
  fetch(search_endpoint)
    .then(api_res => api_res.json())
    .then(api_output => {
      const gif_array = api_output.data.map(gif => gif.images.fixed_width.url);
      console.log(gif_array);

      const gifs = gif_array
        .map(
          gif =>
            `<div class="flex-fill">
			<img src=${gif}>
			</div>`
        )
        .join();
      document.getElementById("display_gif").innerHTML = gifs;
    })
    .catch(err => console.log(err));
};
//Eding
document.getElementById("search_gif").addEventListener("click", getGifs);
