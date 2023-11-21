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
  deadline: string;
  description: string;
  type: TaskType;
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
