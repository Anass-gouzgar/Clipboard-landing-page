import Image from 'next/image'
import devices from "@/public/images/image-devices.png"

const index = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-16">
      <div className="flex flex-col text-DarkGrayishBlue justify-center items-center gap-6">
        <h1 className="text-2xl font-bold "> Access Clipboard anywhere</h1>
        <p className="whitespace-pre-line text-center text-GrayishBlue max-w-[74%] md:hidden">
          {
            "  Whether you're on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks."
          }
        </p>
        <p className="whitespace-pre-line text-center text-GrayishBlue hidden lg:flex">
          {
            "  Whether you're on the go, or at your computer, you can access all your Clipboard \n snippets in a few simple clicks."
          }
        </p>
      </div>
      <Image src={devices} alt='devices img' />
    </div>
  );
}

export default index