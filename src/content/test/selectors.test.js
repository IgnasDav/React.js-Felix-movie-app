import * as selectors from "../selectors";
const state = {
  content: {
    favorites: [],
    movies: {
      isLoading: false,
      error: null,
      list: [],
    },
  },
};

describe("content module selectors", () => {
  it("returns empty array when no movies are in state", () => {
    expect(selectors.getMovies(state)).toBe("");
  });
});
