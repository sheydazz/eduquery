"use client"
import Image from 'next/image'
import React from 'react'
import useLoginGoogle from '../Hooks/useLoginGoogle'
import imagelogin from '../Assets/vista-fotorrealista-arbol-naturaleza-ramas-tronco_23-2151478040.avif'

const LoginPages = () => {
    const {signInWithGoogle} = useLoginGoogle();

    return (
        <section className='max-h-[100vh] bg-white flex items-center justify-evenly' >

            <div>
                <button onClick={() => signInWithGoogle()} className=' flex items-center gap-2 text-black bg-slate-100 py-2 px-4 rounded-[8px] shadow-md hover:scale-[1.02] transition-all ease-in-out'>
                <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        style={{
                            fill: "#000",
                        }}
                    >
                        <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z" />
                    </svg>
                    login con Google 
                </button>
            </div>
            <Image src={imagelogin} alt='' className='max-h-[100vh] w-1/2'  />
        </section>
    )
}

export default LoginPages