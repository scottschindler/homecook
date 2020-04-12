import { SearchInput, Button } from "evergreen-ui";
// @hey! https://material-ui.com/components/icons/
// to find a material-ui icon, search at material.io https://material.io/resources/icons/?search=search&style=baseline
// then transform the name from snake_case to PascalCase and import from @material-ui/icons/PascalCase
import SearchIcon from "@material-ui/icons/Search";

// const searchItem = () => {

// }

// const submitSearch = () => {

// }

const Search = () => {
  return (
    <main>
      <ul>
        <li>
          <div className="search-list">
            <input
              type="text"
              className="search"
              placeholder={"search recipes"}
            />
            <button type="submit" className="searchButton">
              <SearchIcon icon="search" color="muted" fontSize="large" />
            </button>
          </div>
        </li>
        <div className="search-buttons">
          <li>
            <Button
              marginRight={16}
              appearance="minimal"
              size="50"
              height={40}
              intent="none"
            >
              Browse
            </Button>
          </li>
          <li>
            {" "}
            <Button
              marginRight={16}
              appearance="minimal"
              size="40"
              height={40}
              intent="none"
            >
              Healthy
            </Button>
          </li>
          <li>
            {" "}
            <Button
              marginRight={16}
              appearance="minimal"
              size="40"
              height={40}
              intent="none"
            >
              Top Recipes
            </Button>
          </li>
        </div>
      </ul>

      <style jsx>{`
          main {
            font-size: 2rem;
            background-color: #C4C4C4;
            height: 96px;
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
          .search-buttons {
            display: flex;

          }
          .search {
            border: 3px solid #00B4CC;
            border-right: none;
            padding: 5px;
            height: 50px;
            border-radius: 5px 0 0 5px;
            outline: none;
            color: #9DBFAF;
          }
          .searchButton {
            width: 40px;
            height: 50px;
            border: 1px solid #00B4CC;
            background: #00B4CC;
            text-align: center;
            color: #fff;
            border-radius: 0 5px 5px 0;
            cursor: pointer;
            font-size: 20px;
          }

          .search-list {
            display: flex;
          }
        `}</style>
    </main>
  );
};

export default Search;
