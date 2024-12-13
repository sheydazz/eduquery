"use client";

import { useRouter } from "next/navigation";
import ButtonLogin from "./ButtonLogin";

const MenuHome = () => {
    const router = useRouter();

    return (
        <div className="w-80 h-screen bg-gray-900 flex flex-col items-center justify-center">
            <div className="flex justify-center mb-8">
                <span>Logo</span>
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
