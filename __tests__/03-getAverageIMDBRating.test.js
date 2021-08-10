const { getAverageIMDBRating } = require("..");

const movies = require("../movies");
const alternative = require("./fixtures/alternative-movies");

describe("getAverageIMDBRating()", () => {
  test("should return the average IMDB rating across all movies", () => {
    const actual = getAverageIMDBRating(movies);
    const expected = 7.76;
    expect(actual).toBeCloseTo(expected, 2);
  });
  test("should dynamically change depending on the movies inputted", () => {
    const actual = getAverageIMDBRating(alternative);
    const expected = 7.6;
    expect(actual).toBeCloseTo(expected, 2);
  });
  test("should return `0` if there are no movies", () => {
    const actual = getAverageIMDBRating([]);
    const expected = 0;
    expect(actual).toBeCloseTo(expected, 2);
  });
});
