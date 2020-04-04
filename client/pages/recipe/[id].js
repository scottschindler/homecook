import { useContext, useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import { Pane, Text, Heading } from "evergreen-ui";
import Link from "next/link";
import { useRouter } from "next/router";
import { BigRecipeContext } from "../../context/BigRecipeContext";

const Recipe = () => {
  const [bigRecipes, setBigRecipes] = useContext(BigRecipeContext);
  const [recipeInfo, setRecipeInfo] = useState([]);

  const router = useRouter();
  const { id } = router.query;

  const getRecipeInfo = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=0713bac886d245648e7d89a46033da15`
    );
    const res = await data.json();
    setRecipeInfo(res);
  };

  useEffect(() => {
    getRecipeInfo();
  }, []);

  // const tryin = () => {
  //   if (recipeInfo) {
  //     return recipeInfo.analyzedInstructions.map(i => i.steps);
  //   }
  //   console.log(tryin());
  // };

  // tryin();

  return (
    <>
      <Header />
      <div className="container">
        <Heading marginBottom={20} size={900}>
          {recipeInfo.title}
        </Heading>
        <img src={`https://spoonacular.com/recipeImages/${id}-556x370.jpg`} />
        <Heading size={600}>Author: {recipeInfo.sourceName}</Heading>
        <ul className="top-items">
          <li>Time to Prepare: {recipeInfo.preparationMinutes}</li>
          <li>Time to cook: {recipeInfo.cookingMinutes}</li>
          <li>Servings: {recipeInfo.servings}</li>
        </ul>
        <ul className="ingredients">
          {recipeInfo.extendedIngredients &&
            recipeInfo.extendedIngredients.map(i => {
              return (
                <>
                  <div className="ingredient-items">
                    <li>{`${i.amount}, ${i.unit}`}</li>
                    <li>{i.originalName}</li>
                  </div>
                </>
              );
            })}
        </ul>
      </div>
      <style jsx>{`
        .container {
          width: 70%;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 5em auto 5rem auto;
        }
        .top-items {
          display: flex;
          margin: 2rem;
        }
        .ingredient-items {
          display: flex;
        }
      `}</style>
    </>
  );
};

export default Recipe;
