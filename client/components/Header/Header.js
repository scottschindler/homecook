import { Heading } from "evergreen-ui";
// @hey!
// here's a material-ui button, check out the demos https://material-ui.com/components/buttons/ and the api https://material-ui.com/api/button/
// material-ui follows the Google Material design spec, ensuring your components give great user feedback and are accessible to all types of users
// it gives a nice, familiar app-y look, great for side projects or startups without their own design system (I use it at work!)
import { Button } from "@material-ui/core";
import Link from "next/link";
import styled from "styled-components";

// @hey! here's a styled.nav
const HeaderStyles = styled.nav`
  background-color: #3ddc97;
  ul {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    /* @hey! a nested selector: this will select your nav ul li */
    li {
      cursor: pointer;
    }
    .left {
      margin: 1rem 5rem;
    }
    /* @hey! we can nest all the selectors to reflect the HTML nesting if you like */
    .right {
      display: flex;
      margin: 1rem 5rem;
      .one-li {
        padding-right: 3rem;
      }
    }
    button {
      text-transform: none;
    }
  }
`;

const Header = () => {
  return (
    <HeaderStyles>
      <ul>
        <li className="left">
          {" "}
          <Link href="/">
            <a>
              <Heading size={900}>Homecook</Heading>
            </a>
          </Link>
        </li>
        <div className="right">
          <li className="one-li">
            <Button variant="contained" color="primary">
              Sign-in
            </Button>
          </li>
          <li>
            <Button variant="contained" color="primary">
              Sign-up
            </Button>
          </li>
        </div>
      </ul>
    </HeaderStyles>
  );
};

export default Header;
