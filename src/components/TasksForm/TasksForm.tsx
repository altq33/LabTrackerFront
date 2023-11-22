import * as S from "components/TeachersForm/styles";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { TaskFormInputs } from "types/formInputs";
import { useDispatch } from "react-redux";
import { AppDispatch } from "types/store";
import { NumberPicker } from "components/NumberPicker/NumberPicker";
import { FormSelect } from "components/FormSelect/FormSelect";
import { useTypedSelector } from "hooks/useTypedSelector";
import { addTask } from "store/actionCreators/tasks";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AddInputSubject, SubmitSubject } from "components/SubjectsForm/styles";
import { TeachersFormProps } from "types/props";

export const TasksForm: React.FC<TeachersFormProps> = ({ isOpen, onClose }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<TaskFormInputs>({
    mode: "onChange",
    defaultValues: {
      deadline: new Date(),
    },
  });
  const dispatch: AppDispatch = useDispatch();
  const state = useTypedSelector((state) => {
    return state.subject.subjects.map((el) => ({
      value: el.id,
      label: el.name,
    }));
  });

  const onSubmit: SubmitHandler<TaskFormInputs> = (data) => {
    console.log(data);
    // dispatch(addTask(data));
  };

  return (
    <S.FormContainer $isOpen={isOpen}>
      <S.CloseBtn onClick={onClose} />
      <S.AddForm onSubmit={handleSubmit(onSubmit)}>
        <S.FormTitle>Task</S.FormTitle>
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
          Deadline
          <Controller
            control={control}
            name="deadline"
            render={({ field: { onChange, value } }) => (
              <DatePicker selected={value} onChange={onChange} />
            )}
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
