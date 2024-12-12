"use client"

const MenuHome = () => {
    return (
    <div className="w-80 h-screen bg-gray-900 flex flex-col items-center justify-center">
        <div className="flex justify-center mb-8"> 
            <span>Logo</span>
        </div>
        <div className="w-1/2 border-b border-gray-600 mb-12"></div> 
        <div className="flex flex-col items-center space-y-6"> 
            <span className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-800 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer transition duration-300 ease-in-out w-fit">
                Menú
            </span>
            <span className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-800 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer transition duration-300 ease-in-out w-fit">
                Regístrate
            </span>
            <span className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-800 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer transition duration-300 ease-in-out w-fit">
                Inicia Sesión
            </span>
            <span className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-800 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer transition duration-300 ease-in-out w-fit">
                Contacto
            </span>
        </div>
    </div>
    );
};

export default MenuHome;