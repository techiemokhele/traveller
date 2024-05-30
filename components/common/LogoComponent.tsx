import Image from "next/image";

const LogoComponent = () => {
  return (
    <div className="flex flex-row justify-center items-center">
      <Image src={"/logo.svg"} alt="logo" width={24} height={24} />
      &nbsp;
      <h1 className="font-bold text-[22px]">
        Trav<span className="text-blue-700">e</span>ller
        <span className="text-blue-700">.</span>
      </h1>
    </div>
  );
};

export default LogoComponent;
