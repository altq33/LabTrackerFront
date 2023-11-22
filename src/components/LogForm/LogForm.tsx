import { useForm, SubmitHandler } from "react-hook-form";
import { LogFormInputs } from "types/formInputs";
import * as S from "components/RegForm/styles";
import { login } from "store/actionCreators/user";
import { useDispatch } from "react-redux";
import { AppDispatch } from "types/store";
import { Navigate } from "react-router-dom";
import { useTypedSelector } from "hooks/useTypedSelector";

export const LogForm = () => {
  const dispatch: AppDispatch = useDispatch();
  const selector = useTypedSelector((state) => state.user);
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<LogFormInputs>({ mode: "onChange" });

  const onSubmit: SubmitHandler<LogFormInputs> = (data) => {
    dispatch(login(data));
  };
  return (
    <S.RegistrationForm onSubmit={handleSubmit(onSubmit)}>
      <S.AuthFormLabel>
        Username or Email
        <S.AuthFormInput type="text" {...register("username")} />
      </S.AuthFormLabel>
      <S.AuthFormLabel>
        Password
        <S.AuthFormInput type="password" {...register("password")} />
      </S.AuthFormLabel>
      <S.AuthFormSubmitBtn type="submit" value="Submit" disabled={!isValid} />
      <S.ErrorBlock>
        {selector.error ||
          (selector.success ? <Navigate to="/workspace" /> : null)}
      </S.ErrorBlock>
    </S.RegistrationForm>
  );
};
