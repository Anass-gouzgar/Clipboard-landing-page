/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'


const data = [
  {
    icon: "../../../../images/icon-blacklist.svg",
    title: "Create blacklists",
    description:
      "  Ensure sensitive information never makes its way to your clipboard by excluding certain sources.",
  },
  {
    icon: "../../../../images/icon-text.svg",
    title: "Plain text snippets",
    description:
      "   Remove unwanted formatting from copied text for a consistent look.",
  },
  {
    icon: "../../../../images/icon-preview.svg",
    title: "  Sneak preview",
    description:
      "  Quick preview of all snippets on your Clipboard for easy access.",
  },
];




const index = () => {
  return (
    <div className="flex flex-col gap-20 md:gap-14  justify-center items-center mb-6">
      <div className="flex flex-col gap-5 md:gap-3 justify-center items-center">
        <h1 className="text-3xl text-DarkGrayishBlue font-bold md:w-auto w-[80%] text-center md:text-start mt-16 md:mt-0">
          {" "}
          Supercharge your workflow
        </h1>
        <p className="text-GrayishBlue md:w-auto w-[80%] text-center md:text-start">
          We've got the tools to boost your productivity.
        </p>
      </div>
      <div className="flex md:flex-row flex-col gap-4 justify-center">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col md:gap-3 gap-8 items-center mb-10 md:mb-0">
            <Image
              src={item.icon}
              className="w-[3rem] h-[3rem] hover:rotate-[360deg] transition-all ease-in-out duration-700"
              width={0}
              height={0}
              alt="icon"
            />
            <h1 className="text-2xl text-DarkGrayishBlue font-bold">
              {item.title}
            </h1>
            <p className="text-GrayishBlue text-center md:max-w-[22rem]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default index