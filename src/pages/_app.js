import { CanvasProvider } from "../context/CanvasContext";
import { GlobalStyle } from "../../styles/GlobalStyles";

function MyApp({ Component, pageProps }) {
  return (
    <CanvasProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </CanvasProvider>
  );
}

export default MyApp;
