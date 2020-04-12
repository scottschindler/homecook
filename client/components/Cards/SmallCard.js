import { useContext } from "react";
import { Pane, Text, Heading } from "evergreen-ui";
import { RecipeContext } from "../../context/BigRecipeContext";
import Link from "next/link";

const SmallCard = ({ smallAttr }) => {
  return (
    <div>
      <Link href="/recipe/[id]" as={`recipe/${attr.id}`}>
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
      </Link>
    </div>
  );
};

export default SmallCard;
