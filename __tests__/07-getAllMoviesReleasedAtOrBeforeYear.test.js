const { getAllMoviesReleasedAtOrBeforeYear } = require("..");

const movies = require("../movies");
const alternative = require("./fixtures/alternative-movies");

describe("getAllMoviesReleasedAtOrBeforeYear()", () => {
  test("should return all movies where the `released` date is equal to or less than the year given", () => {
    const year = 2000;
    const actual = getAllMoviesReleasedAtOrBeforeYear(movies, year);
    const expected = [
      movies[7], // The Lion King
      movies[8], // Fantasia
      movies[9], // James and the Giant Peach
    ];
    expect(actual).toEqual(expected);
  });
  test("should dynamically change depending on the year inputted", () => {
    const year = 1950;
    const actual = getAllMoviesReleasedAtOrBeforeYear(movies, year);
    const expected = [
      movies[8], // Fantasia
    ];
    expect(actual).toEqual(expected);
  });
  test("should dynamically change depending on the movies inputted", () => {
    const year = 2017;
    const actual = getAllMoviesReleasedAtOrBeforeYear(alternative, year);
    const expected = [
      alternative[1], // Wonder Woman
      alternative[2], // Jaws
      alternative[3], // Skyfall
    ];
    expect(actual).toEqual(expected);
  });
  test("should return an empty array if no movies were released at or before the given year", () => {
    const year = 1940;
    const actual = getAllMoviesReleasedAtOrBeforeYear(movies, year);
    const expected = [];
    expect(actual).toEqual(expected);
  });
  test("should return an empty array if there are no movies", () => {
    const year = 2000;
    const actual = getAllMoviesReleasedAtOrBeforeYear([], year);
    const expected = [];
    expect(actual).toEqual(expected);
  });
});
