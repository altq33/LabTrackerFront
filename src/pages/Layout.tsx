import { ThemeProvider, styled } from "styled-components";
import { GlobalStyle } from "../theme/globalStyle";
import { theme } from "../theme/theme";
import { Sidebar } from "components/Sidebar";

const SWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const Layout = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SWrapper>
        <Sidebar />
      </SWrapper>
    </ThemeProvider>
  );
};
