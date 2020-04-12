// pages/_app.js
import "../css/tailwind.css";
import { BigRecipeProvider } from "../context/BigRecipeContext";
import "../css/index.css";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <BigRecipeProvider>
      {/* elements that appear on every page can be stored in a Layout component */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </BigRecipeProvider>
  );
}
