import { type } from "os";
import { HTMLInputTypeAttribute } from "react";

interface InputProps {
  label: string;
  type: HTMLInputTypeAttribute;
}

export default function Input(props: InputProps) {
  const { label, ...nativeProps } = props;
  let id = 1;
  while (id < 100) {
    id++;
  }
  
  return (
    <>
      <label
        htmlFor="name"
        className="form-label text-lg fw-medium color-palette-1 mb-10"
      >
        {label}
      </label>
      <input
        {...type}
        className="form-control rounded-pill text-lg"
        id={`${type}-${id}`}
        name={`${type}`}
        aria-describedby={`${type}`}
        placeholder="Enter your name"
        {...nativeProps}
      />
    </>
  );
}
