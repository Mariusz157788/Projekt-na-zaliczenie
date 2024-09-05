 import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";
import Header from "./Header";
import Searchbar from "./Searchbar";
import RecipeList from "./RecipeList";
import fetchRecipes from "./fetchRecipes";
const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    console.log("Fetching recipes with query:", query); // Debugging log
    fetchRecipes(query, setRecipes);
  }, [query]);

  console.log("Current recipes:", recipes); // Debugging log

  return (
    <Container>
      <Header />
      <Searchbar setQuery={setQuery} />
      <RecipeList recipes={recipes} />
    </Container>
  );
};
export default App;

