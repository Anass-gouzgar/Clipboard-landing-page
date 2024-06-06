import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import logo from "@/public/images/logo.svg";
import Link from "next/link";

const Index = () => {
  return (
    <div className="bg-GrayishBlue/25 flex md:flex-row flex-col md:justify-around md:items-center gap-8 md:gap-0 p-16 mt-6">
      {/* 1st section */}
      <div className="flex md:flex-row flex-col gap-10 items-center">
        {/* img */}
        <div className="p-6">
          <Image src={logo} alt="logo" className=" w-12 h-12" />
        </div>
        {/* links */}
        <div className="flex md:flex-row flex-col md:gap-20 gap-8 text-DarkGrayishBlue">
          <div className="flex flex-col items-center md:items-start gap-8 md:gap-2">
            <Link href="/">FAQs</Link>
            <Link href="/">Contact Us</Link>
          </div>
          <div className="flex flex-col items-center md:items-start gap-8 md:gap-2">
            <Link href="/">Privacy Policy</Link>
            <Link href="/">Press Kit</Link>
          </div>
          <div className="flex flex-col items-center md:items-start gap-8 md:gap-2">
            <Link href="/">Install Guide</Link>
          </div>
        </div>
      </div>
      {/* icons */}
      <div className="flex justify-center items-center gap-10 md:gap-6">
        <FontAwesomeIcon
          icon={faTwitter}
          className="md:w-5 md:h-5 w-10 h-10 text-DarkGrayishBlue hover:text-StrongCyan cursor-pointer hover:scale-150 transition ease-in duration-300"
        />
        <FontAwesomeIcon
          icon={faFacebook}
          className="md:w-5 md:h-5 w-10 h-10 text-DarkGrayishBlue hover:text-StrongCyan cursor-pointer hover:scale-150 transition ease-in duration-300"
        />
        <FontAwesomeIcon
          icon={faInstagram}
          className="md:w-5 md:h-5 w-10 h-10 text-DarkGrayishBlue hover:text-StrongCyan cursor-pointer hover:scale-150 transition ease-in duration-300"
        />
      </div>
    </div>
  );
};

export default Index;
