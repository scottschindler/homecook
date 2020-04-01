import { Button, Heading } from "evergreen-ui";

const Header = () => {
  return (
    <>
      <nav>
        <ul>
          <li className="left">
            {" "}
            <Heading size={900}>Homecook</Heading>
          </li>
          <div className="right">
            <li className="one-li">
              <Button appearance="primary">Sign-in</Button>
            </li>
            <li>
              <Button appearance="primary">Sign-up</Button>
            </li>
          </div>
        </ul>
      </nav>
      <style jsx>{`
        nav {
          background-color: lightgreen;
 

        }
        nav ul {
            list-style-type: none;
            display: flex;
            justify-content: space-between;
   
    
        }
        nav ul li {
            cursor: pointer:
            border: 2px solid blue;
        }
        .left {
          margin: 1rem 5rem;
        }
        .right {
          display: flex;  
          margin: 1rem 5rem;
                }
          .one-li {
            padding-right: 3rem;
          }
      `}</style>
    </>
  );
};

export default Header;
