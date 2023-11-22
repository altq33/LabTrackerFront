import { TeachersFormProps } from "types/props";
import * as S from "components/TeachersForm/styles";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { SubjectFormInputs } from "types/formInputs";
import { useDispatch } from "react-redux";
import { AppDispatch } from "types/store";
import { NumberPicker } from "components/NumberPicker/NumberPicker";
import { AddInputSubject, SubmitSubject } from "./styles";
import { FormSelect } from "components/FormSelect/FormSelect";
import { addSubject } from "store/actionCreators/subjects";
import { useTypedSelector } from "hooks/useTypedSelector";

export const SubjectsForm: React.FC<TeachersFormProps> = ({
  isOpen,
  onClose,
}) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<SubjectFormInputs>({
    mode: "onChange",
    defaultValues: {
      course: 1,
    },
  });
  const dispatch: AppDispatch = useDispatch();
  const state = useTypedSelector((state) => {
    const options = [{ value: null, label: "None" }];
    return [
      ...options,
      ...state.teacher.teachers.map((el) => ({
        value: el.id,
        label: `${el.surname} ${el.name}`,
      })),
    ];
  });

  const onSubmit: SubmitHandler<SubjectFormInputs> = (data) => {
    dispatch(
      addSubject({
        name: data.name,
        course: data.course,
        teacher_id: data.teacher_id.value,
      }),
    );
  };

  return (
    <S.FormContainer $isOpen={isOpen}>
      <S.CloseBtn onClick={onClose} />
      <S.AddForm onSubmit={handleSubmit(onSubmit)}>
        <S.FormTitle>Subject</S.FormTitle>
        <S.Label>
          Name
          <AddInputSubject
            {...register("name", {
              required: "Name is required",
              maxLength: { value: 100, message: "Max len of name 100" },
            })}
          />
        </S.Label>
        <S.Label>
          Course
          <Controller
            control={control}
            name="course"
            render={({ field: { onChange, value } }) => (
              <NumberPicker
                onChange={onChange}
                value={value}
                min={1}
                max={8}
                readOnly
              />
            )}
          />
        </S.Label>
        <S.Label>
          Teacher
          <Controller
            control={control}
            name="teacher_id"
            render={({ field: { onChange, value } }) => (
              <FormSelect onChange={onChange} options={state} value={value} />
            )}
            defaultValue={state[0]}
          />
        </S.Label>

        <S.ErrorContainer>
          {errors.course?.message ||
            errors.name?.message ||
            errors.teacher_id?.message}
        </S.ErrorContainer>
        <SubmitSubject type="submit" disabled={!isValid} value="Add" />
      </S.AddForm>
    </S.FormContainer>
  );
};
