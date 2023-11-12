import { useForm, SubmitHandler } from "react-hook-form";
import { LogFormInputs } from "types/formInputs";
import * as S from "components/RegForm/styles";

export const LogForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LogFormInputs>({ mode: "onChange" });

  const onSubmit: SubmitHandler<LogFormInputs> = (data) => console.log(data);

  return (
    <S.RegistrationForm onSubmit={handleSubmit(onSubmit)}>
      <S.AuthFormLabel>
        Username or Email
        <S.AuthFormInput
          type="email"
          {...register("usernameOrEmail", {
            required: {
              value: true,
              message: "Username or Email are required",
            },
          })}
        />
      </S.AuthFormLabel>
      <S.AuthFormLabel>
        Password
        <S.AuthFormInput
          type="password"
          {...register("password", {
            required: {
              value: true,
              message: "Password are required",
            },
          })}
        />
      </S.AuthFormLabel>
      <S.AuthFormSubmitBtn type="submit" value="Submit" disabled={!isValid} />
      <S.ErrorBlock>
        {errors.usernameOrEmail?.message || errors.password?.message}
      </S.ErrorBlock>
    </S.RegistrationForm>
  );
};
