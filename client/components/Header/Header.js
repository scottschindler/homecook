const Header = () => {
  return (
    <nav>
      <ul>
        <li>Homecook</li>
        <li>Sign-in</li>
        <li>Sign-up</li>
      </ul>
      <style jsx>{`
        nav {
          font-size: 2rem;
          background-color: lightgreen;
        }
        nav ul {
            list-style-type: none;
            margin: 0;
            padding: 1rem;
            display: flex;
        }
        nav ul li {
            cursor: pointer:
            padding: 2rem;
            flex: auto;
            text-align:center;
            margin-left: 2rem;
        }
      `}</style>
    </nav>
  );
};

export default Header;
