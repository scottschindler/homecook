import { Pane, Text, Heading } from "evergreen-ui";

const Card = () => {
  return (
    <div>
      <Pane
        height={120}
        width={240}
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
