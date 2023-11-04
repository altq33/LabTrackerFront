export interface NavigationLink {
  path: string;
  text: string;
}

export interface NavigationProps {
  links: NavigationLink[];
}
