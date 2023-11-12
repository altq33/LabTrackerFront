import { Outlet } from "react-router-dom";
import { styled, ThemeProvider } from "styled-components";
import { GlobalStyle } from "../theme/globalStyle";
import { theme } from "../theme/theme";
import { Provider } from "react-redux";
import { store } from "store/store";

const SWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const Wrapper = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SWrapper>
        <Outlet />
      </SWrapper>
    </ThemeProvider>
  </Provider>
);
