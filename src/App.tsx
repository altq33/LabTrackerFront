import { styled } from "styled-components";
import "./App.css";

export const App = () => {
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
        <span>Oh shit i am pridurok </span>
        Ya tot eshe ubludok
      </Block>
    </>
  );
};
