const { getAllMovieTitles } = require("..");

const movies = require("../movies");
const alternative = require("./fixtures/alternative-movies");

describe("getAllMovieTitles()", () => {
  test("should return all of the movie titles in an array", () => {
    const actual = getAllMovieTitles(movies);
    const expected = [
      "Toy Story 4",
      "Inside Out",
      "Coco",
      "Incredibles 2",
      "Moana",
      "How to Train Your Dragon",
      "Paddington",
      "The Lion King",
      "Fantasia",
      "James and the Giant Peach",
    ];
    expect(actual).toEqual(expected);
  });
  test("should dynamically change depending on the movies inputted", () => {
    const actual = getAllMovieTitles(alternative);
    const expected = ["Black Panther", "Wonder Woman", "Jaws", "Skyfall"];
    expect(actual).toEqual(expected);
  });
  test("should return an empty array if there are no movies", () => {
    const actual = getAllMovieTitles([]);
    const expected = [];
    expect(actual).toEqual(expected);
  });
});
