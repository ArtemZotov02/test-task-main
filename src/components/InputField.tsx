import React from "react";

interface InputFieldProps {
  label: string;
  type: string;
  register: any;
  name: string;
  errors: any;
  validation: object;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  register,
  name,
  errors,
  validation,
}) => (
  <div className="mb-4">
    <label className="block text-sm font-semibold text-gray-700">{label}</label>
    <input
      type={type}
      {...register(name, validation)}
      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    {errors[name] && (
      <span className="text-red-500 text-sm">{errors[name]?.message}</span>
    )}
  </div>
);

export default InputField;
