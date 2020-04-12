import { useContext, useState, useEffect } from "react";
import { Heading } from "evergreen-ui";
import { useRouter } from "next/router";
import { BigRecipeContext } from "../../context/BigRecipeContext";
import styled from "styled-components";

// here's a styled.div from styled-components
// all styles are scoped to within this element! so no worries about name clashes.
// it's also SASS, so you can do fancy stuff like nesting your selectors.
const RecipePageStyles = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  margin: 5em auto 5rem auto;
  .top-items {
    display: flex;
    margin: 2rem;
  }
  .ingredient-step-section {
    display: flex;
    .ingredient-items {
      display: flex;
    }
  }
`;

const Recipe = () => {
  const [bigRecipes, setBigRecipes] = useContext(BigRecipeContext);
  const [recipeInfo, setRecipeInfo] = useState([]);
  const [nutrition, setNutrition] = useState([]);

  const router = useRouter();
  const { id } = router.query;

  const getRecipeInfo = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=0713bac886d245648e7d89a46033da15`
    );
    const res = await data.json();
    setRecipeInfo(res);
  };

  // NUTRITION

  const getNutrition = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=true&apiKey=0713bac886d245648e7d89a46033da15`
    );
    const res = await data.json();
    // @hey! I was getting a "cannot read nutrients of undefined" error so added a null check here
    if (res.nutrition) {
      setNutrition(res.nutrition.nutrients);
    }
  };

  useEffect(() => {
    getRecipeInfo();
    getNutrition();
  }, []);

  // get list of steps

  const steps = () => {
    let stepsArr = recipeInfo.analyzedInstructions.map((i) => i.steps);
    return stepsArr[0].map((i) => `Step ${i.number}: ${i.step}`);
  };

  const getNutritionArray = () => {
    return nutrition.slice(0, 9).map((i) => {
      return `${i.title}: ${i.amount}`;
    });
  };

  return (
    <RecipePageStyles>
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
      <div className="ingredient-step-section">
        <ul className="ingredients">
          <li>
            <Heading size={700}>Ingredients</Heading>
          </li>
          {recipeInfo.extendedIngredients &&
            recipeInfo.extendedIngredients.map((i) => {
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
        <ul className="steps">
          <li>
            <Heading size={700}>Preparation</Heading>
          </li>
          {recipeInfo.extendedIngredients &&
            steps().map((i) => {
              return <li>{i}</li>;
            })}
        </ul>
      </div>
      <ul className="nutrition">
        <li>
          <Heading size={700}>Nutrition</Heading>
        </li>
        {nutrition &&
          getNutritionArray().map((i) => {
            return <li>{i}</li>;
          })}
      </ul>
    </RecipePageStyles>
  );
};

export default Recipe;
