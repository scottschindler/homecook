import Head from "next/head";
import { Pane, Text } from "evergreen-ui";
import BigCards from "../components/Cards/Big/Cards";
import Header from "../components/Header/Header";
import Search from "../components/Search/Search";
import TestCard from "../components/Cards/TestCard";
import { BigRecipeProvider } from "../context/BigRecipeContext";
import { SmallRecipeProvider } from "../context/SmallRecipeContext";

const Home = () => {
  return (
    <BigRecipeProvider>
      <SmallRecipeProvider>
        <Pane>
          <div>
            <Header />
            <Search />
            <BigCards />
          </div>
        </Pane>
      </SmallRecipeProvider>
    </BigRecipeProvider>
  );
};

export default Home;
