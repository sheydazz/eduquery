"use client";




import InputField from "@/components/InputField";
import ButtonLogin from "@/components/ButtonLogin";


const Login = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-lg shadow-md">
                <h2 className="text-3xl font-bold text-center text-white">Inicia Sesión</h2>
                <form className="space-y-4">
                    <InputField
                        label="Correo Electrónico"
                        id="email"
                        type="email"
                        placeholder="Ingresa tu correo"
                    />
                    <InputField
                        label="Contraseña"
                        id="password"
                        type="password"
                        placeholder="Ingresa tu contraseña"
                    />
                    <div className="flex items-center justify-between">
                        <label className="flex items-center text-gray-300">
                            <input
                                type="checkbox"
                                className="text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <span className="ml-2">Recordarme</span>
                        </label>
                        <a href="#" className="text-sm text-blue-500 hover:underline">
                            ¿Olvidaste tu contraseña?
                        </a>
                    </div>
                    <ButtonLogin label="Iniciar Sesión" type="submit" />
                </form>
                <p className="text-sm text-center text-gray-300">
                    ¿No tienes una cuenta?{" "}
                    <a href="#" className="text-blue-500 hover:underline">
                        Regístrate
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Login;
