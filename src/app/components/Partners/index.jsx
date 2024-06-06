import Image from "next/image";
import Marquee from "react-fast-marquee";
import google from "@/public/images/logo-google.png";
import ibm from "@/public/images/logo-ibm.png";
import microsoft from "@/public/images/logo-microsoft.png";
import hp from "@/public/images/logo-hp.png";
import vector from "@/public/images/logo-vector-graphics.png";

const logos = [
  {
    name: "Google",
    src: google,
    alt: "Google logo",
  },
  {
    name: "IBM",
    src: ibm,
    alt: "IBM logo",
  },
  {
    name: "Microsoft",
    src: microsoft,
    alt: "Microsoft logo",
  },
  {
    name: "HP",
    src: hp,
    alt: "HP logo",
  },
  {
    name: "Vector Graphics",
    src: vector,
    alt: "Vector Graphics logo",
  },
];

const Index = () => {
  return (
    <>
        <div className="md:flex hidden w-[80%] mx-auto mb-10 mt-28">
      {" "}
      <Marquee className="" pauseOnHover speed={60} gradient >
        {logos.map((logo) => (
          <div key={logo.name} className="ml-56">
            <Image
              src={logo.src}
              className=""
              alt={logo.alt}
              width={100}
              height={50}
            />
          </div>
        ))}
      </Marquee>
    </div>
    <div className="md:hidden flex flex-col justify-center items-center gap-14 mb-16">
      {
        logos.map((logo) => (
          <div key={logo.name} className="  ">
            <Image
              src={logo.src}
              className=""
              alt={logo.alt}
              width={150}
              height={150}
            />
          </div>
        ))
      }
    </div>
    </>

  );
};

export default Index;
