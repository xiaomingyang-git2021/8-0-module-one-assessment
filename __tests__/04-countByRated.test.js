const { countByRated } = require("..");

const movies = require("../movies");
const alternative = require("./fixtures/alternative-movies");

describe("countByRated()", () => {
  test("should return an object where the keys are ratings and the values are the number of movies with that rating", () => {
    const actual = countByRated(movies);
    const expected = { G: 3, PG: 7 };
    expect(actual).toEqual(expected);
  });
  test("should dynamically change depending on the movies inputted", () => {
    const actual = countByRated(alternative);
    const expected = { PG: 1, "PG-13": 3 };
    expect(actual).toEqual(expected);
  });
  test("should return an empty object if there are no movies", () => {
    const actual = countByRated([]);
    const expected = {};
    expect(actual).toEqual(expected);
  });
});
