import Header from "./Header/Header";

// @hey! the Layout component simply returns the children along with elements that appear on every page
export default ({ children }) => (
  <>
    <Header />
    {children}
  </>
);
