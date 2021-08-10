const { findById } = require("..");

const movies = require("../movies");
const alternative = require("./fixtures/alternative-movies");

describe("findById()", () => {
  test("should return the entire movie based on the IMDB ID", () => {
    const id = "tt0892769";
    const actual = findById(movies, id);
    expect(actual.imdbID).toEqual("tt0892769");
    expect(actual.title).toEqual("How to Train Your Dragon");
    expect(actual.poster).toEqual(
      "https://m.media-amazon.com/images/M/MV5BMjA5NDQyMjc2NF5BMl5BanBnXkFtZTcwMjg5ODcyMw@@._V1_SX300.jpg"
    );
  });
  test("should dynamically change depending on the IMDB ID inputted", () => {
    const id = "tt1979376";
    const actual = findById(movies, id);
    expect(actual.imdbID).toEqual("tt1979376");
    expect(actual.title).toEqual("Toy Story 4");
    expect(actual.poster).toEqual(
      "https://m.media-amazon.com/images/M/MV5BMTYzMDM4NzkxOV5BMl5BanBnXkFtZTgwNzM1Mzg2NzM@._V1_SX300.jpg"
    );
  });
  test("should dynamically change depending on the movies inputted", () => {
    const id = "tt1074638";
    const actual = findById(alternative, id);
    expect(actual.imdbID).toEqual("tt1074638");
    expect(actual.title).toEqual("Skyfall");
    expect(actual.poster).toEqual(
      "https://m.media-amazon.com/images/M/MV5BMWZiNjE2OWItMTkwNy00ZWQzLWI0NTgtMWE0NjNiYTljN2Q1XkEyXkFqcGdeQXVyNzAwMjYxMzA@._V1_SX300.jpg"
    );
  });
  test("should return `null` if the movie cannot be found", () => {
    const id = "tt1074638";
    const actual = findById(movies, id);
    const expected = null;
    expect(actual).toEqual(expected);
  });
  test("should return `null` if there are no movies", () => {
    const id = "tt1074638";
    const actual = findById([], id);
    const expected = null;
    expect(actual).toEqual(expected);
  });
});
