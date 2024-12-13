"use client";

const ButtonLogin = ({ label, onClick, type = "button", className }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${className}`}
        >
            {label}
        </button>
    );
};

export default ButtonLogin;
