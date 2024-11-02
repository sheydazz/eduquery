import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";

const useLoginGoogle = () => {
  const {push} = useRouter();
  // Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB1J_m6SXz5hacmwwAS2mbXeq9C8zbD6Mc",
  authDomain: "eduquery-d5831.firebaseapp.com",
  projectId: "eduquery-d5831",
  storageBucket: "eduquery-d5831.firebasestorage.app",
  messagingSenderId: "118809415771",
  appId: "1:118809415771:web:2234a9639a0c06b1c5af7e"
};

  // Inicialización de Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  // Función para iniciar sesión con Google
  const signInWithGoogle = async () => {
    try {
      const user = await signInWithPopup(auth, provider);
      push("/");
    } catch (error) {
      console.error("Error al iniciar sesión con Google", error);
    }
  };

  return {
    signInWithGoogle,
  };
};

export default useLoginGoogle;