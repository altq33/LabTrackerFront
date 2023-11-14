import { Outlet } from "react-router-dom";
import { styled, ThemeProvider } from "styled-components";
import { GlobalStyle } from "../theme/globalStyle";
import { theme } from "../theme/theme";
import { Provider } from "react-redux";
import { persistor, store } from "store/store";
import { PersistGate } from "redux-persist/integration/react";

const SWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const Wrapper = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <SWrapper>
          <Outlet />
        </SWrapper>
      </ThemeProvider>
    </PersistGate>
  </Provider>
);
