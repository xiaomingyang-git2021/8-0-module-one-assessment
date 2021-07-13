/**
 * getAllMovieTitles()
 * -----------------------------
 * Returns all of titles from an array of movies.
 * @param {Object[]} movies - An array of movies. See the instructions and `movies.js` file for examples of inputs.
 * @returns {string[]} An array of strings, which are movie titles.
 */

/**
 * getHighestMetascore()
 * -----------------------------
 * Returns the highest `metascore` among all movies.
 * @param {Object[]} movies - An array of movies. See the instructions and `movies.js` file for examples of inputs.
 * @returns {number} The highest `metascore` of all movies.
 */

/**
 * getAverageIMDBRating()
 * -----------------------------
 * Averages all of the IMDB ratings from all movies and returns it, as a number.
 * @param {Object[]} movies - An array of movies. See the instructions and `movies.js` file for examples of inputs.
 * @returns {number} The average IMDB rating across all movies.
 */

/**
 * countByRating()
 * -----------------------------
 * Returns an object where the keys are movie ratings and the values are the number of movies in the array with that rating.
 * @param {Object[]} movies - An array of movies. See the instructions and `movies.js` file for examples of inputs.
 * @returns {Object} An object where keys are movie ratings (e.g. "PG") and the values are how many movies in the array have that rating (e.g. 7).
 */

/**
 * findById()
 * -----------------------------
 * Returns a movie object from an array of objects based on the ID.
 * @param {Object[]} movies - An array of movies. See the instructions and `movies.js` file for examples of inputs.
 * @param {string} id - A unique `imdbID`.
 * @returns {Object} The movie object with the matching `imdbID`.
 */

/**
 * filterByGenre()
 * -----------------------------
 * Returns all movie objects with a matching genre. Case-insensitive.
 * @param {Object[]} movies - An array of movies. See the instructions and `movies.js` file for examples of inputs.
 * @param {string} genre - The genre of a movie. (e.g. "Fantasy")
 * @returns {Object[]} An array of movies where at least one of the genres matches the `genre` inputted.
 */

/**
 * getAllMoviesReleasedAtOrBeforeYear()
 * -----------------------------
 * Returns all movie objects with a `released` year equal to or less than the given year.
 * @param {Object[]} movies - An array of movies. See the instructions and `movies.js` file for examples of inputs.
 * @param {number} year - A year as a number. (e.g. 2000)
 * @returns {Object[]} An array of movies where the `released` year is equal to or less than the inputted year.
 */

/**
 * getBiggestBoxOfficeMovie()
 * -----------------------------
 * Returns the name of the movie with the highest `boxOffice` amount.
 * @param {Object[]} movies - An array of movies. See the instructions and `movies.js` file for examples of inputs.
 * @returns {string} The name of the movie that made the most money at the box office.
 */

// Do not change anything below this line.
module.exports = {
  getAllMovieTitles,
  getHighestMetascore,
  getAverageIMDBRating,
  countByRating,
  findById,
  filterByGenre,
  getAllMoviesReleasedAtOrBeforeYear,
  getBiggestBoxOfficeMovie,
};
