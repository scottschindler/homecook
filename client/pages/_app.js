// pages/_app.js
import "../css/tailwind.css";
import { BigRecipeProvider } from "../context/BigRecipeContext";
import { SmallRecipeProvider } from "../context/SmallRecipeContext";

export default function App({ Component, pageProps }) {
  return (
    <BigRecipeProvider>
      <Component {...pageProps} />
    </BigRecipeProvider>
  );
}
