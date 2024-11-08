"use client"
import CardQuestionComponent from '../components/CardQuestionComponent';
import { SiGoogleforms } from "react-icons/si";
const detallePage = () => {
    return(
<div className="w-full h-full bg-gray-200 flex flex-col relative">
<div className="w-full h-32 bg-white shadow-lg flex items-center justify-center mb-[40px]">
<h1 className="text-4xl">Formulario generado ✨ </h1>
</div>
<div className=' flex gap-[40px]'>
<CardQuestionComponent />
<CardQuestionComponent />
<CardQuestionComponent />
</div>
<div className="sticky bottom-0 flex justify-center p-4">
<button className='bg-violet-700 m-[20px] border rounded-full w-[200px] h-[70px] text-white flex justify-center flex-row content-center flex-wrap text-2xl gap-[10px]'> generar <SiGoogleforms /></button>
</div>
</div>
    )
}

export default  detallePage
