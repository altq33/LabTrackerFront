import { styled } from "styled-components";
import "./App.css";

const App = () => {
  const Block = styled.div`
    color: red;
    background: ${(props) => props.theme.colors.blue};
    width: 100px;
    height: 100px;
    span {
      color: black;
    }
  `;

  return (
    <>
      <Block>
        <span>kdfjkfds </span> sdfsd
      </Block>
    </>
  );
};

export default App;
