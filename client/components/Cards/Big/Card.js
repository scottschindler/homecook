import { Pane, Text, Heading } from "evergreen-ui";

const Card = () => {
  return (
    <div>
      <Heading size={900}>Featured Recipes</Heading>

      <Pane
        height={220}
        width={340}
        display="flex"
        alignItems="center"
        justifyContent="center"
        border="default"
      >
        <Text>Pane</Text>
      </Pane>
      <Heading size={600}>Recipe Name</Heading>
      <Heading size={300}>Author Name</Heading>
    </div>
  );
};

export default Card;
