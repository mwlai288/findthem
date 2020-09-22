// import SearchState from "../context/search/SearchState";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../src/theme";

function MyApp({ Component, pageProps }) {
  return (
    // <SearchState>
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
    // </SearchState>
  );
}

export default MyApp;
