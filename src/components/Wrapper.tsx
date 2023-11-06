import { Outlet } from "react-router-dom";
import { styled, ThemeProvider } from "styled-components";
import { GlobalStyle } from "../theme/globalStyle";
import { theme } from "../theme/theme";

const SWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const Wrapper = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SWrapper>
        <Outlet />
      </SWrapper>
    </ThemeProvider>
  );
};
