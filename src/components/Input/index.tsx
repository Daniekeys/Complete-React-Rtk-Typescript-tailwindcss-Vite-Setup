import { ChangeEvent } from "react";

interface inputProps {
  id?: string;
  name?: string;
  placeholder?: string;
  classes?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  label?: string;
  required: boolean;
}

export const InputField = ({
  name,
  id,
  placeholder,
  classes,
  onChange,
  type,
  required,
}: inputProps) => {
  return (
    <input
      className={`${classes} block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 `}
      type={type ? type : "text"}
      name={name}
      id={id}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
    />
  );
};
