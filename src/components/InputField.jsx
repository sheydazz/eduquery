"use client";

const InputField = ({ label, id, type = "text", placeholder }) => {
    return (
        <div>
            <label htmlFor={id} className="block text-sm font-medium text-gray-300">
                {label}
            </label>
            <input
                type={type}
                id={id}
                name={id}
                className="w-full px-4 py-2 mt-2 text-gray-900 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={placeholder}
            />
        </div>
    );
};

export default InputField;
