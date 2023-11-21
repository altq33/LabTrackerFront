import { TaskPriority, TaskType } from "types/api";

export const getBadgeColor = (type: TaskType | null) => {
  switch (type) {
    case TaskType.lab:
      return "#00B884";
    case TaskType.presentation:
      return "#FFC800";
    case TaskType.coursework:
      return "#e42020";
    case TaskType.report:
      return "#7B68EE";
    case TaskType.typical:
      return "#FD71AF";
    default:
      return "#00B884";
  }
};

export const getPriorityColor = (priority: TaskPriority) => {
  switch (priority) {
    case TaskPriority.low:
      return "#00B884";
    case TaskPriority.medium:
      return "#FFC800";
    case TaskPriority.high:
      return "#e42020";
  }
};

export const normalizeDate = (dateString: string): string => {
  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return formattedDate;
};
