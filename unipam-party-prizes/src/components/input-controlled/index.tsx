'use client';

import { Controller, FieldValues } from "react-hook-form";
import { InputControlledProps } from "./types";
import { Input } from "../input";

export function InputControlled<T extends FieldValues>({
  control,
  name,
  ...rest
}: InputControlledProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Input
          {...rest}
          {...field}
        />
      )}
    />
  );
}
