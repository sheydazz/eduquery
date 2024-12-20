import Image from "next/image";

const promptTitle = () => {
  return (
    <div className="flex flex-col items-center">
      {/* <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 animate-gradient bg-[length:200%_200%] mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold ">
        Eduquery
      </h1> */}
      <Image
        src="/assets/logo.png"
        width={700}
        height={500}
        alt="Descripción de la imagen"
      />
      <h6 className="font-monaco  text-purple-700  mb-5 text-2xl">
        Genera automáticamente Google Forms con AI ✨
      </h6>
    </div>
  );
};

export default promptTitle;
