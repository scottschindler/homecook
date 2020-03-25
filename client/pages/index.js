import Head from "next/head";
import { Pane, Text } from "evergreen-ui";
import BigCards from "../components/Cards/Big/Cards";
import SmallCards from "../components/Cards/Small/Cards";
import Header from "../components/Header/Header";
import Search from "../components/Search/Search";

const Home = () => (
  <Pane>
    <div>
      <Header />
      <Search />
      <BigCards />
      <SmallCards />
    </div>
  </Pane>
);

export default Home;
