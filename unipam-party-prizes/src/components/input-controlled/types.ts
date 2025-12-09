import { Control, FieldValues, Path } from "react-hook-form";
import { InputProps } from "../input/types";

export type InputControlledProps<T extends FieldValues> = Omit<
  InputProps,
  "value" | "onChange" | "onBlur" | "name" | "ref"
> & {
  name: Path<T>;
  control: Control<T>;
};
