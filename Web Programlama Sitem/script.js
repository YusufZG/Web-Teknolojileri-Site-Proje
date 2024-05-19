
const API_KEY = 'api_key=cfa7b10fdb9ab9ff5070f5dd7ae0a98a';
const BASE_URL = 'https://api.themoviedb.org/3';
const SEARCH_URL = BASE_URL + '/search/movie?' + API_KEY + '&query=';

// Function to fetch movies based on multiple search queries
function searchMovies(queries) {
    const promises = queries.map(query => {
        const url = SEARCH_URL + encodeURIComponent(query);
        return fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                const movie = data.results.find(movie => movie.title.toLowerCase() === query.toLowerCase());
                return movie || null;
            })
            .catch(error => {
                console.error('Error fetching movies:', error);
                return null;
            });
    });

    Promise.all(promises).then(movies => {
        const validMovies = movies.filter(movie => movie !== null);
        if (validMovies.length > 0) {
            showMovies(validMovies);
        } else {
            console.error('No movies found');
        }
    });
}

// Function to display movies
function showMovies(movies) {
    const container = document.getElementById('movie-container');
    container.innerHTML = ''; // Clear previous movie elements

    movies.forEach(movie => {
        const { title, poster_path, vote_average } = movie;
        const formattedVoteAverage = vote_average.toFixed(1); // Format to 1 decimal place
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        
        movieEl.innerHTML = `
        
            <div class="img-container ">
                <img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}">
            </div>
            <div class="movie-info">
                <h3 style = "font-weight: 700; ; ">${title}</h3>
                <span class="rating"> IMDB Puanı: <strong>${formattedVoteAverage}</strong></span>
            </div>
        `;

        container.appendChild(movieEl);
    });
}

// Example: Search for multiple specific movies
searchMovies(['The Dark Knight Rises', 'Django  ', 'The Matrix', 'Encanto','Nimona','Yahşi Batı','The Departed','Rush','Pulp Fiction'
    ,'Green Road','GoodFellas','Puss İn Boots','Neon Genesis Evangelion: The End of Evangelion','Coco','Life Is Beautiful'
]);