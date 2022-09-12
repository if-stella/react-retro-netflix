const key = process.env.REACT_APP_IMDB_API_KEY

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=2`,
  requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
  requestCrime: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1&with_genres=80`,
  requestAni: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1&with_genres=16`,
};

export default requests
