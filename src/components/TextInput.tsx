import { Path, UseFormRegister } from "react-hook-form";

type InputProps = {
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  formError: string | undefined;
  required?: boolean;
};

const TextInput = ({
  label,
  register,
  formError,
  required = false,
}: InputProps) => (
  <div className="flex flex-col gap-1 w-full">
    <label className="text-sm" htmlFor={label}>
      {label.charAt(0).toUpperCase() + label.slice(1)}
    </label>
    <input {...register(label, { required })} />
    {formError && <span className="text-sm">{formError}</span>}
  </div>
);

export default TextInput;
