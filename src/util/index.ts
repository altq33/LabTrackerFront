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

export const normalizeDateTime = (dateString: string): string => {
  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const hours = date
    .toLocaleString("en-US", {
      hour: "2-digit",
      hour12: true,
    })
    .slice(0, -2);
  const minutes = date.getMinutes();
  const time12HourFormat = `${hours}:${(minutes < 10 ? "0" : "") + minutes} ${
    date.getHours() >= 12 ? "PM" : "AM"
  }`;
  return `${formattedDate} ${time12HourFormat}`;
};
