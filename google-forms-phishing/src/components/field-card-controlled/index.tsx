'use client';

import { Controller, FieldValues } from "react-hook-form";
import { FieldCardControlledProps } from "./types";
import { FieldCard } from "../field-card";

export function FieldCardControlled<T extends FieldValues>({
  control,
  name,
  ...rest
}: FieldCardControlledProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FieldCard
          {...rest}
          {...field}
        />
      )}
    />
  );
}
