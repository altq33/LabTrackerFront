import { NavigationLink } from "types/props";

export const navLinksList: NavigationLink[] = [
  {
    path: "/",
    text: "Overview",
    selectedIcon:
      "src/assets/icons/menu-navigation-grid-1529-svgrepo-com-wh.svg",
    notSelectedIcon:
      "src/assets/icons/menu-navigation-grid-1529-svgrepo-com-gr.svg",
  },
  {
    path: "/subjects",
    text: "Subjects",
    selectedIcon: "src/assets/icons/book-svgrepo-com-wh.svg",
    notSelectedIcon: "src/assets/icons/book-svgrepo-com-gr.svg",
  },
  {
    path: "/teachers",
    text: "Teachers",
    selectedIcon: "src/assets/icons/teacher-svgrepo-com-wh.svg",
    notSelectedIcon: "src/assets/icons/teacher-svgrepo-com-gr.svg",
  },
  {
    path: "/tasks",
    text: "Tasks",
    selectedIcon: "src/assets/icons/tasks-list-svgrepo-com-wh.svg",
    notSelectedIcon: "src/assets/icons/tasks-list-svgrepo-com-gr.svg",
  },
];
