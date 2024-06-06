import React from 'react'
import IosBtn from "@/src/app/components/Global/IosBtn";
import MacBtn from "@/src/app/components/Global/MacBtn";


const index = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-6 md:gap-4  pt-28 pb-16">
      <h1 className="text-3xl font-bold text-DarkGrayishBlue font-Bai md:text-start text-center w-[80%] md:w-auto">
        {" "}
        Clipboard for iOS and Mac OS
      </h1>
      <p className="text-DarkGrayishBlue text-center max-w-[74%] lg:max-w-[480px] ">
        {" "}
        Available for free on the App Store. Download for Mac or iOS, sync with
        iCloud and you’re ready to start adding to your clipboard.
      </p>
      <div className="flex md:flex-row flex-col mt-4 md:mt-0 gap-3">
<IosBtn />
        <MacBtn />

      </div>
    </div>
  );
}

export default index