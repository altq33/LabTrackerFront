import { useForm, SubmitHandler } from "react-hook-form";
import * as S from "./styles";
import { RegFormInputs } from "types/formInputs";
import { useState } from "react";
import { UserRegResponse } from "types/api";
import { $api } from "../../http/index";

export const RegForm = () => {
  const [registrationResult, setRegistrationResult] = useState<boolean | null>(
    null,
  );
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<RegFormInputs>({ mode: "onChange" });

  const onSubmit: SubmitHandler<RegFormInputs> = (data) => {
    $api
      .post<UserRegResponse>("/users", data)
      .then(() => {
        setRegistrationResult(true);
      })
      .catch(() => {
        setRegistrationResult(false);
      });
  };

  return (
    <S.RegistrationForm onSubmit={handleSubmit(onSubmit)}>
      <S.AuthFormLabel>
        Username
        <S.AuthFormInput
          type="text"
          {...register("username", {
            required: "The field is mandatory for filling out",
            minLength: {
              value: 4,
              message: "Username should contain min 4ch",
            },
            maxLength: {
              value: 100,
              message: "Username should contain max 100ch",
            },
            pattern: {
              value: /^[a-zA-Z0-9_]+$/,
              message:
                "Username should contain only letters and numbers, as well as lower emphasis",
            },
          })}
        />
      </S.AuthFormLabel>
      <S.AuthFormLabel>
        Email
        <S.AuthFormInput
          type="email"
          {...register("email", {
            required: "The field is mandatory for filling out",
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Incorrect email format",
            },
          })}
        />
      </S.AuthFormLabel>
      <S.AuthFormLabel>
        Password
        <S.AuthFormInput
          type="password"
          {...register("password", {
            required: "The field is mandatory for filling out",
            minLength: {
              value: 10,
              message: "The password must have at least 10 characters",
            },
            pattern: {
              value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/,
              message:
                "The password must contain lowerctime and capital Latin letters and numbers",
            },
          })}
        />
      </S.AuthFormLabel>
      <S.AuthFormLabel>
        Repeat Password
        <S.AuthFormInput
          type="password"
          {...register("repeatPassword", {
            required: "The field is mandatory for filling out",
            validate: (val: string) => {
              if (watch("password") != val) {
                return "Password mismatch";
              }
            },
          })}
        />
      </S.AuthFormLabel>
      <S.AuthFormSubmitBtn type="submit" value="Submit" disabled={!isValid} />
      {/* Прошу простить за этот кринж */}
      <S.ErrorBlock>
        {errors.username?.message ||
          errors.email?.message ||
          errors.password?.message ||
          errors.repeatPassword?.message}
        {registrationResult === true
          ? "Successful registration!"
          : registrationResult === false
          ? "Registration error!"
          : null}
      </S.ErrorBlock>
    </S.RegistrationForm>
  );
};
