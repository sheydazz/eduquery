"use client"
import CardQuestionComponent from '../componentes/CardQuestionComponent';
const detallePage = () => {
    return(
<div className="w-full h-full bg-gray-200 flex flex-col ">
<div className="w-full h-32 bg-white shadow-lg flex items-center justify-center mb-[40px]">
<h1 className="text-4xl">Formulario generado ✨ </h1>
</div>
<div className=' flex gap-[40px]'>
<CardQuestionComponent />
<CardQuestionComponent />
<CardQuestionComponent />
</div>
</div>
    )
}



export default  detallePage
