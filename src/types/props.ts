import { ReactElement } from "react";
import { Subject, Task } from "./api";

export interface NavigationLink {
  path: string;
  text: string;
  selectedIcon: string;
  notSelectedIcon: string;
}

export interface NavigationProps {
  links: NavigationLink[];
}

export interface MiniProfileProps {
  name: string;
  link: string;
}

export interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

export interface ListComponentProps<T> {
  data: T[];
}

export interface TeachersFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface SidebarListProps {
  title: string;
  data: Subject[] | Extract<Task, Subject["tasks_count"]>[];
  render: (id: string, title: string, count?: number) => ReactElement;
  link: string;
}

export interface SubjectSidebarListItemProps {
  id: string;
  name: string;
  count: number;
}

export interface NumberPickerProps {
  value: number;
  onChange: (value: number) => void;
  style?: React.CSSProperties;
  max?: number;
  min?: number;
  readOnly?: boolean;
}

export interface SelectTeacherOptions {
  value: string | null;
  label: string;
}

export interface FormSelectProps {
  onChange: (value: SelectTeacherOptions) => void;
  options: SelectTeacherOptions[];
  value: SelectTeacherOptions;
}

export interface PathTrackProps {
  mainId: string;
  secondaryId: string;
  mainTitle: string;
  secondaryTitle: string;
  category: string;
  icon: string;
}

export type AllTaskListItemProps = Pick<
  Task,
  "name" | "status" | "priority" | "type" | "deadline" | "id"
>;
