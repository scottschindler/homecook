import { useContext } from "react";
import { Pane, Text, Heading } from "evergreen-ui";
import { RecipeContext } from "../../../context/BigRecipeContext";

const SmallCard = ({ smallAttr }) => {
  return (
    <div>
      <Pane
        elevation={1}
        width={250}
        height={270}
        display="flex"
        margin={20}
        padding={40}
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Heading size={600}>{smallAttr.recipe.label}</Heading>
        <Heading size={300}>Author Name</Heading>
        <img src={smallAttr.recipe.image} />
      </Pane>
    </div>
  );
};

export default SmallCard;
