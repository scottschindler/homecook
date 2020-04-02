import BigCards from "../components/Cards/Cards";
import Header from "../components/Header/Header";
import Search from "../components/Search/Search";
import { BigRecipeProvider } from "../context/BigRecipeContext";

const Home = () => {
  return (
    <>
      <BigRecipeProvider>
        <Header />
        <Search />
        <BigCards />
      </BigRecipeProvider>
    </>
  );
};

export default Home;
