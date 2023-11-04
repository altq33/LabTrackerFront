import "styled-components";
import { MainTheme } from "types/theme";

declare module "styled-components" {
  export interface DefaultTheme extends MainTheme {}
}
