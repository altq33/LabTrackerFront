import { TeachersFormProps } from "types/props";
import * as S from "./styles";
import { SubmitHandler, useForm } from "react-hook-form";
import { TeacherFormInputs } from "types/formInputs";
import { useDispatch } from "react-redux";
import { AppDispatch } from "types/store";
import { addTeacher } from "store/actionCreators/teachers";

export const TeachersForm: React.FC<TeachersFormProps> = ({
  isOpen,
  onClose,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<TeacherFormInputs>({ mode: "onChange" });
  const dispatch: AppDispatch = useDispatch();

  const onSubmit: SubmitHandler<TeacherFormInputs> = (data) => {
    dispatch(
      addTeacher({
        ...data,
        father_name: data.father_name || null,
        phone_number: data.phone_number || null,
      }),
    );
  };

  return (
    <S.FormContainer isOpen={isOpen}>
      <S.CloseBtn onClick={onClose} />
      <S.AddForm onSubmit={handleSubmit(onSubmit)}>
        <S.FormTitle>Teacher</S.FormTitle>
        <S.Label>
          Name
          <S.AddInput
            {...register("name", {
              required: "Name is required",
              maxLength: { value: 100, message: "Max len of name 100" },
            })}
          />
        </S.Label>
        <S.Label>
          Surname
          <S.AddInput
            {...register("surname", {
              required: "Surname is required",
              maxLength: { value: 100, message: "Max len of name 100" },
            })}
          />
        </S.Label>
        <S.Label>
          Father name
          <S.AddInput {...register("father_name")} />
        </S.Label>
        <S.Label>
          Phone number
          <S.AddInput
            type="tel"
            {...register("phone_number", {
              pattern: {
                value: /^(?:\+7|8)?9\d{9}$/,
                message: "Not valid phone number",
              },
            })}
          />
        </S.Label>
        <S.ErrorContainer>
          {errors.father_name?.message ||
            errors.name?.message ||
            errors.phone_number?.message ||
            errors.surname?.message}
        </S.ErrorContainer>
        <S.Submit type="submit" disabled={!isValid} />
      </S.AddForm>
    </S.FormContainer>
  );
};
