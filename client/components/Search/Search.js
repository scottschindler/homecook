import { SearchInput, Button } from "evergreen-ui";

const Search = () => {
  return (
    <main>
      <ul>
        <li>
          <SearchInput placeholder="Filter traits..." height={40} />
        </li>
        <li>
          <Button marginRight={16} appearance="minimal" intent="none">
            Browse
          </Button>
        </li>
        <li>
          {" "}
          <Button marginRight={16} appearance="minimal" intent="none">
            Healthy
          </Button>
        </li>
        <li>
          {" "}
          <Button marginRight={16} appearance="minimal" intent="none">
            Top Recipes
          </Button>
        </li>
      </ul>
      <style jsx>{`
          main {
            font-size: 2rem;
            background-color: lightgrey;
          }
          main ul {
              list-style-type: none;
              margin: 0;
              padding: 1rem;
              display: flex;
          }
          main ul li {
              cursor: pointer:
              padding: 2rem;
              flex: auto;
              text-align:center;
              margin-left: 2rem;
          }
        `}</style>
    </main>
  );
};

export default Search;
