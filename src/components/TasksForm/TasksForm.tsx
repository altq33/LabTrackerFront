import * as S from "components/TeachersForm/styles";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { TaskFormInputs } from "types/formInputs";
import { useDispatch } from "react-redux";
import { AppDispatch } from "types/store";
import { useTypedSelector } from "hooks/useTypedSelector";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AddInputSubject, SubmitSubject } from "components/SubjectsForm/styles";
import { TeachersFormProps } from "types/props";
import { DateInput } from "components/DateInput/DateInput";
import { Area } from "./styles";
import { PriorityOptions, TypeOptions } from "resources/resources";
import Select from "react-select";
import { SubjectSelectItem } from "components/SubjectSelectItem/SubjectSelectItem";
import { addTask } from "store/actionCreators/tasks";
import { useLocation } from "react-router-dom";

export const TasksForm: React.FC<TeachersFormProps> = ({ isOpen, onClose }) => {
  const location = useLocation();

  const dispatch: AppDispatch = useDispatch();
  const state = useTypedSelector((state) => {
    return state.subject.subjects.map((el) => ({
      value: el.id,
      label: el.name,
    }));
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm<TaskFormInputs>({
    mode: "onChange",
    defaultValues: {
      deadline: new Date(),
      subject_id: state.find(
        (el) => el.value === location.state?.selectedSubject,
      ),
    },
  });

  const onSubmit: SubmitHandler<TaskFormInputs> = (data) => {
    dispatch(
      addTask({
        ...data,
        deadline: data.deadline ? data.deadline.toISOString() : null,
        type: data.type.value,
        priority: data.priority.value,
        subject_id: data.subject_id.value,
      }),
    );
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
              <DatePicker
                selected={value}
                onChange={onChange}
                showTimeSelect
                isClearable
                placeholderText="None"
                customInput={<DateInput />}
              />
            )}
          />
        </S.Label>
        <S.Label>
          Description
          <Area {...register("description")}></Area>
        </S.Label>
        <S.Label>
          Type
          <Controller
            control={control}
            name="type"
            defaultValue={TypeOptions[0]}
            render={({ field: { onChange, value } }) => (
              <Select
                options={TypeOptions}
                value={value}
                onChange={onChange}
                menuShouldScrollIntoView
                styles={{
                  control: (baseStyles) => ({
                    ...baseStyles,
                    borderColor: "#7B68EE",
                    boxShadow: "none",
                    ":hover": {
                      boxShadow: "none",
                      borderColor: "#7B68EE",
                    },
                  }),
                  container: (baseStyles) => ({
                    ...baseStyles,
                    width: "100%",
                    fontSize: "1.3rem",
                  }),
                  indicatorSeparator: () => ({
                    display: "none",
                  }),
                  dropdownIndicator: (baseStyles) => ({
                    ...baseStyles,
                    color: "#7B68EE",
                    opacity: 1,
                    ":hover": {
                      color: "#7B68EE",
                      opacity: 1,
                    },
                  }),
                  menuList: (baseStyles) => ({
                    ...baseStyles,
                    padding: 0,
                  }),
                  menu: (baseStyles) => ({
                    ...baseStyles,
                    backgroundColor: "white",
                  }),
                  option: (baseStyles, { isFocused, isSelected }) => ({
                    ...baseStyles,
                    ":hover": {
                      backgroundColor: "#7B68EE",
                      color: "white",
                    },
                    backgroundColor:
                      isFocused || isSelected ? "#7B68EE" : "white",
                    color: isFocused || isSelected ? "white" : "black",
                  }),
                }}
              />
            )}
          />
        </S.Label>
        <S.Label>
          Priority
          <Controller
            control={control}
            name="priority"
            defaultValue={PriorityOptions[0]}
            render={({ field: { onChange, value } }) => (
              <Select
                options={PriorityOptions}
                value={value}
                onChange={onChange}
                menuShouldScrollIntoView
                styles={{
                  control: (baseStyles) => ({
                    ...baseStyles,
                    borderColor: "#7B68EE",
                    boxShadow: "none",
                    ":hover": {
                      boxShadow: "none",
                      borderColor: "#7B68EE",
                    },
                  }),
                  container: (baseStyles) => ({
                    ...baseStyles,
                    width: "100%",
                    fontSize: "1.3rem",
                  }),
                  indicatorSeparator: () => ({
                    display: "none",
                  }),
                  dropdownIndicator: (baseStyles) => ({
                    ...baseStyles,
                    color: "#7B68EE",
                    opacity: 1,
                    ":hover": {
                      color: "#7B68EE",
                      opacity: 1,
                    },
                  }),
                  menuList: (baseStyles) => ({
                    ...baseStyles,
                    padding: 0,
                  }),
                  menu: (baseStyles) => ({
                    ...baseStyles,
                    backgroundColor: "white",
                  }),
                  option: (baseStyles, { isFocused, isSelected }) => ({
                    ...baseStyles,
                    ":hover": {
                      backgroundColor: "#7B68EE",
                      color: "white",
                    },
                    backgroundColor:
                      isFocused || isSelected ? "#7B68EE" : "white",
                    color: isFocused || isSelected ? "white" : "black",
                  }),
                }}
              />
            )}
          />
        </S.Label>
        <S.Label>
          Subject
          <Controller
            control={control}
            name="subject_id"
            defaultValue={state[0]}
            render={({ field: { onChange, value } }) => (
              <Select
                options={state}
                value={value}
                onChange={onChange}
                components={{ Option: SubjectSelectItem }}
                menuShouldScrollIntoView
                isSearchable
                menuPlacement="top"
                styles={{
                  control: (baseStyles) => ({
                    ...baseStyles,
                    borderColor: "#7B68EE",
                    boxShadow: "none",
                    ":hover": {
                      boxShadow: "none",
                      borderColor: "#7B68EE",
                    },
                  }),
                  container: (baseStyles) => ({
                    ...baseStyles,
                    width: "100%",
                    fontSize: "1.3rem",
                  }),
                  indicatorSeparator: () => ({
                    display: "none",
                  }),
                  dropdownIndicator: (baseStyles) => ({
                    ...baseStyles,
                    color: "#7B68EE",
                    opacity: 1,
                    ":hover": {
                      color: "#7B68EE",
                      opacity: 1,
                    },
                  }),
                  menuList: (baseStyles) => ({
                    ...baseStyles,
                    padding: 0,
                  }),
                  menu: (baseStyles) => ({
                    ...baseStyles,
                    backgroundColor: "white",
                  }),
                  option: (baseStyles, { isFocused, isSelected }) => ({
                    ...baseStyles,
                    ":hover": {
                      backgroundColor: "#7B68EE",
                      color: "white",
                    },
                    backgroundColor:
                      isFocused || isSelected ? "#7B68EE" : "white",
                    color: isFocused || isSelected ? "white" : "black",
                  }),
                }}
              />
            )}
          />
        </S.Label>
        <SubmitSubject type="submit" disabled={!isValid} value="Add" />
      </S.AddForm>
    </S.FormContainer>
  );
};
