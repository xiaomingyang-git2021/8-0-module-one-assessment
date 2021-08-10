const { filterByGenre } = require("..");

const movies = require("../movies");
const alternative = require("./fixtures/alternative-movies");

describe("filterByGenre()", () => {
  test("should return all movies that include the specified genre", () => {
    const genre = "Mystery";
    const actual = filterByGenre(movies, genre);
    const expected = [
      movies[2], // Coco
    ];
    expect(actual).toEqual(expected);
  });
  test("should dynamically change depending on the genre inputted", () => {
    const genre = "Fantasy";
    const actual = filterByGenre(movies, genre);
    const expected = [
      movies[0], // Toy Story 4
      movies[1], // Inside Out
      movies[2], // Coco
      movies[5], // How to Train Your Dragon
      movies[8], // Fantasia
      movies[9], // James and the Giant Peach
    ];
    expect(actual).toEqual(expected);
  });
  test("should dynamically change depending on the movies inputted", () => {
    const genre = "Action";
    const actual = filterByGenre(alternative, genre);
    const expected = [
      alternative[0], // Black Panther
      alternative[1], // Wonder Woman
      alternative[3], // Skyfall
    ];
    expect(actual).toEqual(expected);
  });
  test("should be case-insensitive", () => {
    const genre = "FANTASY";
    const actual = filterByGenre(movies, genre);
    const expected = [
      movies[0], // Toy Story 4
      movies[1], // Inside Out
      movies[2], // Coco
      movies[5], // How to Train Your Dragon
      movies[8], // Fantasia
      movies[9], // James and the Giant Peach
    ];
    expect(actual).toEqual(expected);
  });
  test("should return an empty array if no movies match the genre", () => {
    const genre = "Horror";
    const actual = filterByGenre(movies, genre);
    const expected = [];
    expect(actual).toEqual(expected);
  });
  test("should return an empty array if there are no movies", () => {
    const genre = "Action";
    const actual = filterByGenre([], genre);
    const expected = [];
    expect(actual).toEqual(expected);
  });
});
