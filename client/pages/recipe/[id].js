import { useContext } from "react";
import Header from "../../components/Header/Header";
import { Pane, Text, Heading } from "evergreen-ui";
import Link from "next/link";
import { BigRecipeContext } from "../../context/BigRecipeContext";
import { SmallRecipeContext } from "../../context/SmallRecipeContext";
import { BigRecipeProvider } from "../../context/BigRecipeContext";

const Recipe = () => {
  const [bigRecipes, setBigRecipes] = useContext(BigRecipeContext);

  console.log(bigRecipes);
  return (
    <>
      <Header />
      <div className="container">
        <Heading>Recipe Name</Heading>

        <Pane
          height={460}
          width={1000}
          margin={20}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          border="default"
        >
          {/* <img
            src={`https://spoonacular.com/recipeImages/${attr.id}-556x370.jpg`}
          /> */}
        </Pane>
      </div>
      <style jsx>{`
        .container {
          width: 70%;
          display: flex;
          flex-direction: column;
          align-items: center;
          border: 2px solid red;
          margin: 5em auto 5rem auto;
        }
      `}</style>
    </>
  );
};

export default Recipe;
