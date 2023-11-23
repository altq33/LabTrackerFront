import { User } from "./store";

export enum TaskType {
  lab = "Lab",
  coursework = "Coursework",
  report = "Report",
  presentation = "Presentation",
  typical = "Typical",
}

export enum TaskPriority {
  low = "Low",
  medium = "Medium",
  high = "High",
}

export interface UserLog {
  username: string;
  password: string;
}

export interface UserRegResponse {
  username: string;
  email: string;
  password: string;
}

export interface UserLogResponse {
  access_token: string;
  tokenType: string;
  user: User;
}

export interface Teacher {
  id: string;
  name: string;
  surname: string;
  father_name: string | null;
  phone_number: string | null;
}

export interface Task {
  id: string;
  name: string;
  deadline: string | null;
  description: string | null;
  type: TaskType | null;
  priority: TaskPriority;
  status: boolean;
}

export interface AugmentedTask extends Task {
  subject: Omit<Subject, "tasks_count" | "tasks">;
}

export interface Subject {
  id: string;
  name: string;
  course: number;
  teacher: Teacher | null;
  tasks_count: number | null;
  tasks: Task[];
}

export interface PostSubject {
  name: string;
  course: number;
  teacher_id: string | null;
}

export interface DescFilter {
  label: "desc";
  value: boolean;
}

export interface TeachersSortFilter {
  label: "sort";
  value: "name" | "surname" | "father_name";
}

export interface SubjectsSortFilter {
  label: "sort";
  value: "name" | "course" | "tasks_count";
}

export interface TasksSortFilter {
  label: "sort";
  value: "deadline" | "name" | "priority" | "type" | "status";
}

export interface PriorityFilter {
  label: "priority";
  value: TaskPriority;
}

export interface TypeFilter {
  label: "task_type";
  value: TaskType;
}

export interface ExpiredFilter {
  label: "include_expired";
  value: boolean;
}

export type FilterParam =
  | DescFilter
  | TeachersSortFilter
  | SubjectsSortFilter
  | TasksSortFilter
  | PriorityFilter
  | TypeFilter
  | ExpiredFilter;
