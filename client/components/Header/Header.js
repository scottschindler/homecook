import { Button, Heading } from "evergreen-ui";

const Header = () => {
  return (
    <nav>
      <ul>
        <li className="left">
          {" "}
          <Heading size={900}>Homecook</Heading>
        </li>
        <li>
          <Button appearance="primary">Sign-in</Button>
        </li>
        <li>
          <Button appearance="primary">Sign-up</Button>
        </li>
      </ul>
      <style jsx>{`
        nav {
          font-size: 2rem;
          background-color: lightgreen;
        }
        nav ul {
            list-style-type: none;
            margin: auto;
            padding: 1rem;
            display: flex;
    
        }
        nav ul li {
            cursor: pointer:
            padding: 2rem;
            flex: auto;
            justify-self: flex-start;
            text-align:center;
            margin-left: 2rem;
        }
        .left {
            margin:auto;
        }
      `}</style>
    </nav>
  );
};

export default Header;
