import { TaskPriority, TaskType } from "./api";
import { SelectSubjectOptions, SelectTeacherOptions } from "./props";

export interface RegFormInputs {
  username: string;
  email: string;
  password: string;
  repeatPassword: string;
}

export interface LogFormInputs {
  username: string;
  password: string;
}

export interface TeacherFormInputs {
  name: string;
  surname: string;
  father_name: string;
  phone_number: string;
}

export interface SubjectFormInputs {
  name: string;
  course: number;
  teacher_id: SelectTeacherOptions;
}

export interface TaskFormInputs {
  name: string;
  deadline: Date;
  description: string;
  type: TaskType;
  priority: TaskPriority;
  subject_id: SelectSubjectOptions;
}
