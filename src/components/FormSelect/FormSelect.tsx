import { TeacherSelectItem } from "components/TeacherSelectItem/TeacherSelectItem";
import Select from "react-select";

import { FormSelectProps, SelectTeacherOptions } from "types/props";

export const FormSelect: React.FC<FormSelectProps> = ({
  onChange,
  options,
  value,
}) => {
  return (
    <Select
      options={options}
      value={value}
      components={{ Option: TeacherSelectItem }}
      onChange={(value) => onChange(value as SelectTeacherOptions)}
      menuPlacement={"top"}
      menuShouldScrollIntoView
      styles={{
        control: (baseStyles) => ({
          ...baseStyles,
          borderColor: "#7B68EE",
          boxShadow: "none",
          ":hover": {
            boxShadow: "none",
            borderColor: "#7B68EE",
          },
        }),
        container: (baseStyles) => ({
          ...baseStyles,
          width: "100%",
          fontSize: "1.3rem",
        }),
        indicatorSeparator: () => ({
          display: "none",
        }),
        dropdownIndicator: (baseStyles) => ({
          ...baseStyles,
          color: "#7B68EE",
          opacity: 1,
          ":hover": {
            color: "#7B68EE",
            opacity: 1,
          },
        }),
        menuList: (baseStyles) => ({
          ...baseStyles,
          padding: 0,
        }),
        menu: (baseStyles) => ({
          ...baseStyles,
          backgroundColor: "white",
        }),
      }}
    />
  );
};
