import Image from 'next/image'
import computer from '@/public/images/image-computer.png'


const data = [
  {
    "title":"Quick Search",
    "description" : "  Easily search your snippets by content, \ncategory, web address, application, and more."
  },
  {
    "title":"iCloud Sync",
    "description" : "  Instantly saves and syncs snippets across all your devices."
  },
  {
    "title":"Complete History",
    "description" : "  Retrieve any snippets from the first moment you started using the app."
  }
]


const index = () => {
  return (
    <div className="flex flex-col gap-10 pt-20 md:pb-20 pb-44">
      {/* header */}
      <div className='flex flex-col justify-center items-center gap-4 '>
        <h2 className='text-2xl font-bold text-DarkGrayishBlue w-[60%] md:w-auto md:text-start text-center'> Keep track of your snippets</h2>
        <p className='max-w-[560px] text-GrayishBlue text-center text-sm w-[63%] md:w-auto'>
          {" "}
          Clipboard instantly stores any item you copy in the cloud, meaning you
          can access your snippets immediately on all your devices. Our Mac and
          iOS apps will help you organize everything.
        </p>
      </div>
      {/* body */}
      <div className="flex md:flex-row flex-col gap-20 items-center w-full ">
        {/* img */}
        <div className='md:w-[1000px] '>
          <Image src={computer} alt="computer" className='bg-cover lg:-translate-x-16 w-full '/>
        </div>
        {/* details */}
        <div className='flex flex-col gap-10 lg:pt-16 '>
          {data.map((item, index) => (
            <div key={index} className='flex flex-col items-center lg:items-start gap-2'>
              <h1 className='text-2xl font-bold text-DarkGrayishBlue'>{item.title}</h1>
              <p className='text-GrayishBlue text-sm lg:whitespace-pre-line lg:max-w-[300px] text-center md:text-start w-[67%]'>{item.description}</p>
            </div>
          ))}


        </div>
      </div>
    </div>
  );
}

export default index