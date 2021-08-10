const { getHighestMetascore } = require("..");

const movies = require("../movies");
const alternative = require("./fixtures/alternative-movies");

describe("getHighestMetascore()", () => {
  test("should return highest Metascore of all movies as a number", () => {
    const actual = getHighestMetascore(movies);
    const expected = 96;
    expect(actual).toEqual(expected);
  });
  test("should dynamically change depending on the movies inputted", () => {
    const actual = getHighestMetascore(alternative);
    const expected = 88;
    expect(actual).toEqual(expected);
  });
  test("should return `0` if there are no movies", () => {
    const actual = getHighestMetascore([]);
    const expected = 0;
    expect(actual).toEqual(expected);
  });
});
