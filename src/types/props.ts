import { Teacher } from "./api";

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

export interface TeacherListProps {
  data: Teacher[];
}

export interface TeacherListItemProps extends Teacher {}

export interface TeachersFormProps {
  isOpen: boolean;
  onClose: () => void;
}
