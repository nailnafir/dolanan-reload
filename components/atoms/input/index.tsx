export interface InputProps {
  label: string;
  inputType: "text" | "password" | "email" | "tel" | "number";
  idName: string;
}

export default function Input(props: Partial<InputProps>) {
  const { label, inputType, idName, ...nativeProps } = props;
  
  return (
    <>
      <label
        htmlFor="name"
        className="form-label text-lg fw-medium color-palette-1 mb-10"
      >
        {label}
      </label>
      <input
        type={inputType}
        className="form-control rounded-pill text-lg"
        id={idName}
        name={inputType}
        aria-describedby={inputType}
        placeholder="Enter your name"
        {...nativeProps}
      />
    </>
  );
}
