import { useState, createContext, useEffect } from "react";

// Create Context

export const SmallRecipeContext = createContext();

// Provider component

export const SmallRecipeProvider = props => {
  const APPKEY = "7302084e7245317238e2810a3dec449a";
  const APPID = "5ad89785";

  const [smallRecipes, setSmallRecipes] = useState([]);

  const getSmallRecipes = async () => {
    const data = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APPID}&app_key=${APPKEY}&from=0&to=8&calories=591-722&health=alcohol-free`
    );
    let res = await data.json();
    setSmallRecipes(res.hits);
  };

  useEffect(() => {
    getSmallRecipes();
  }, []);

  return (
    <SmallRecipeContext.Provider value={[smallRecipes, setSmallRecipes]}>
      {props.children}
    </SmallRecipeContext.Provider>
  );
};
