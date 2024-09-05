const fetchRecipes = async (query, setRecipes) => {
  const APP_ID = "c457123e";
  const APP_KEY = "059f042bae1f9879db417c82bc316436";
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Fetched data:", data); // Debugging log
    setRecipes(data.hits);
  } catch (error) {
    console.error("Error fetching recipes:", error);
    setRecipes([]);
  }
};

export default fetchRecipes;
