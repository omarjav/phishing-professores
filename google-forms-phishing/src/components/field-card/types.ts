export type FieldCardProps<T> = {
  label: string;
  required?: boolean;
  errorMessage?: string;
  component: React.ComponentType<T>;
} & T;
