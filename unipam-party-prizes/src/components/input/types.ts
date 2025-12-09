export type InputProps = {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  name?: string;
  id?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  errorMessage?: string;
};

