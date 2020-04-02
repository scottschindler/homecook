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

  const recipe = bigRecipes.find(item => item.id === Number(id));

  const getRecipeInfo = async () => {
    console.log(id);
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false`
    );
    const res = await data.json();
    setRecipeInfo(res);
  };

  useEffect(() => {
    getRecipeInfo();
  }, []);

  console.log(recipeInfo);

  return (
    <>
      <Header />
      <div className="container">
        <Heading marginBottom={20} size={900}>
          {recipe.title}
        </Heading>
        <img src={`https://spoonacular.com/recipeImages/${id}-556x370.jpg`} />
      </div>
      <style jsx>{`
        .container {
          width: 70%;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 5em auto 5rem auto;
        }
      `}</style>
    </>
  );
};

export default Recipe;
