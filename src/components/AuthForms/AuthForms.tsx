import { FlexContainer } from "pages/Welcome/styles";
import * as S from "./styles";
import regImg from "assets/img/14571492_5495722 1.jpg";
import { RegForm } from "components/RegForm/RegForm";
import { useState } from "react";
import { LogForm } from "components/LogForm/LogForm";

export const AuthForms = () => {
  const [isRegistration, setIsRegistration] = useState(true);

  return (
    <FlexContainer>
      <S.FormContainer>
        <S.LeftSideImage src={regImg} />
        <S.RightSideContainer>
          <S.FormTitle>{isRegistration ? "Sign up" : "Sign in"}</S.FormTitle>
          <S.AlreadyRegBtn onClick={() => setIsRegistration((prev) => !prev)}>
            {isRegistration ? "Sign in" : "Sign up"}
          </S.AlreadyRegBtn>
          {isRegistration ? <RegForm /> : <LogForm />}
        </S.RightSideContainer>
      </S.FormContainer>
    </FlexContainer>
  );
};
