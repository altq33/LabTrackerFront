export interface NavigationLink {
  path: string;
  text: string;
  selectedIcon: string;
  notSelectedIcon: string;
}

export interface NavigationProps {
  links: NavigationLink[];
}
