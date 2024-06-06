import Image from 'next/image'
import logo from '@/public/images/logo.svg'
import IosBtn from '@/src/app/components/Global/IosBtn'
import MacBtn from '@/src/app/components/Global/MacBtn'


const index = () => {
  return (
    <div className="md:bg-desktop bg-mobile bg-center bg-cover bg-no-repeat flex flex-col justify-center items-center gap-4 pt-32 ">
      <Image src={logo} alt="logo" className="md:size-20" />
      <h1 className="text-3xl font-bold text-DarkGrayishBlue font-Bai md:text-start text-center">
        {" "}
        A history of everything you copy
      </h1>
      <p className="text-DarkGrayishBlue text-center w-[310px]  md:max-w-[480px]">
        {" "}
        Clipboard allows you to track and organize everything you copy.
        Instantly access your clipboard on all your devices.
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center mt-8 md:mt-0 gap-3">
<IosBtn />
        <MacBtn />
      </div>

    </div>
  );
}

export default index