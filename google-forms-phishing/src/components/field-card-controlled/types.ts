/* eslint-disable @typescript-eslint/no-explicit-any */
import { Control, FieldValues, Path } from "react-hook-form";
import { FieldCardProps } from "../field-card/types";

type RHFFieldProps<T extends FieldValues, K extends Path<T>> = {
  value: any;
  onChange: (...event: any[]) => void;
  onBlur: () => void;
  name: K;
  disabled?: boolean;
  ref: (instance: HTMLInputElement | null) => void;
  placeholder?: string;
};


export type FieldCardControlledProps<T extends FieldValues> = Omit<
  FieldCardProps<RHFFieldProps<T, Path<T>>>,
  "value" | "onChange" | "onBlur" | "name" | "ref"
> & {
  name: Path<T>;
  control: Control<T>;
};