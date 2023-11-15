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
