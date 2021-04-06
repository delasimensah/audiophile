import React from "react";

const TextInput = ({ label, type, placeholder }) => {
  return (
    <div className="space-y-[5px]">
      <label className="text-sm font-semibold tracking-wide capitalize">
        {label}
      </label>
      <input
        type={type}
        className="block w-full p-3 border-gray-500 rounded-lg focus:ring-0 focus:border-primary focus:border-2"
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextInput;
