"use client";

import { useRouter } from "next/navigation";
import ButtonLogin from "./ButtonLogin";

const MenuHome = () => {
    const router = useRouter();

    return (
        <div className="w-80 h-screen bg-gray-800 flex flex-col items-center justify-center">
           <div className="flex justify-center mb-8">
                <img 
                    className="w-full h-full object-contain max-w-[100px] max-h-[100px]" 
                    src="https://files.oaiusercontent.com/file-GQJiRTphhvzgPc6D5QgdTy?se=2024-12-13T20%3A39%3A01Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D2b5ffc01-8348-4e25-9c91-093f70550502.webp&sig=ZPm5UXHA1FXHdInqmQjj0JOVArY6qgGfLKVnd/0UUIM%3D"/>
                </div>
            <div className="w-1/2 border-b border-gray-600 mb-12"></div>
            <div className="flex flex-col items-center space-y-6">
                <ButtonLogin
                    label="Inicia Sesión"
                    onClick={() => router.push("/login")}
                    className="w-fit"
                />
            </div>
        </div>
    );
};

export default MenuHome;
