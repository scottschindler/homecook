import BigCards from "../components/Cards/Cards";
import Search from "../components/Search/Search";

const Home = () => {
  return (
    // you already had the Provider in the _app file
    <>
      <Search />
      <BigCards />
    </>
  );
};

export default Home;
