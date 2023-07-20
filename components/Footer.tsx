import Image from "next/image";

const Footer = () => (
  <section className="flexStart footer">
    <div className="flex flex-col w-full ">
      <div className="flex flex-row justify-between  ">
        <div className="pl-2">
          <Image src="/logo.svg" width={116} height={40} alt="logo" />
        </div>
        <div className="pr-2">
          <p>@ {new Date().getFullYear()} Byte Craft. All rights reserved</p>
        </div>
      </div>
    </div>
  </section>
);

export default Footer;
