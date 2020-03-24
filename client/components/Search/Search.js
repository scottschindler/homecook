const Search = () => {
  return (
    <main>
      <ul>
        <li>
          <input></input>
        </li>
        <li>
          <button>Browse</button>
        </li>
        <li>
          {" "}
          <button>Healthy</button>
        </li>
        <li>
          {" "}
          <button>Top Recipes</button>
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
