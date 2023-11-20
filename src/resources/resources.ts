import { NavigationLink } from "types/props";

export const navLinksList: NavigationLink[] = [
  {
    path: "/workspace/overview",
    text: "Overview",
    selectedIcon:
      "/src/assets/icons/menu-navigation-grid-1529-svgrepo-com-wh.svg",
    notSelectedIcon:
      "/src/assets/icons/menu-navigation-grid-1529-svgrepo-com-gr.svg",
  },
  {
    path: "/workspace/subjects",
    text: "Subjects",
    selectedIcon: "/src/assets/icons/book-svgrepo-com-wh.svg",
    notSelectedIcon: "/src/assets/icons/book-svgrepo-com-gr.svg",
  },
  {
    path: "/workspace/teachers",
    text: "Teachers",
    selectedIcon: "/src/assets/icons/teacher-svgrepo-com-wh.svg",
    notSelectedIcon: "/src/assets/icons/teacher-svgrepo-com-gr.svg",
  },
  {
    path: "/workspace/tasks",
    text: "Tasks",
    selectedIcon: "/src/assets/icons/tasks-list-svgrepo-com-wh.svg",
    notSelectedIcon: "/src/assets/icons/tasks-list-svgrepo-com-gr.svg",
  },
];

export const covers = [
  "Rectangle 28.jpg",
  "Rectangle 29.jpg",
  "Rectangle 30.jpg",
  "Rectangle 31.jpg",
  "Rectangle 32.jpg",
];

export const coversBig = [
  "cover28.jpg",
  "cover29.jpg",
  "cover30.jpg",
  "cover31.jpg",
  "cover32.jpg",
];
