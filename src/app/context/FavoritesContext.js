import { createContext, useEffect, useState } from "react";
const FAVORITES_KEY = "movies/favorites";
const DEFAULT_FAVORITES = JSON.parse(localStorage.getItem(FAVORITES_KEY)) || [];

const FavoritesContext = createContext({
  favorites: DEFAULT_FAVORITES,
});

const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(DEFAULT_FAVORITES);
  const setFavoritesArr = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favorite) => favorite !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };
  useEffect(() => {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }, [favorites]);
  return (
    <FavoritesContext.Provider
      value={{ setFavorites: setFavoritesArr, favorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
export default FavoritesContext;
export { FavoritesProvider };
