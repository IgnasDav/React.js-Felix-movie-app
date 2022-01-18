const apiSettings = {
  fetchFreeMovies: async () => {
    const response = await fetch(
      "https://academy-video-api.herokuapp.com/content/free-items"
    );
    return await response.json();
  },
  fetchMovies: async (token) => {
    const response = await fetch(
      "https://academy-video-api.herokuapp.com/content/items",
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: token,
        },
      }
    );
    return response.json();
  },
  signIn: async (username, password) => {
    const response = await fetch(
      "https://academy-video-api.herokuapp.com/auth/login",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      }
    );
    return await response.json();
  },
  fetchSingleMovie: async (id, token) => {
    if (token) {
      const response = await fetch(
        `https://academy-video-api.herokuapp.com/content/items/${id}`,
        {
          method: "GET",
          headers: {
            "content-type": "application/json",
            authorization: token,
          },
        }
      );
      return await response.json();
    } else {
      const response = await fetch(
        `https://academy-video-api.herokuapp.com/content/items/${id}`
      );
      return await response.json();
    }
  },
};

export default apiSettings;
