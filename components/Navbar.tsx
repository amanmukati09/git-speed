import Link from "next/link";
import Image from "next/image";
import AuthProviders from "./AuthProviders";

export default function Navbar() {
  const session = {};
  return (
    <nav className="flexBetween navbar ">
      <div className="flex-1 gap-10 flexStart">
        <Link href="/">
          <Image src="/logo.svg" height={43} width={115} alt="Byte Craft" />
        </Link>
      </div>
      <div className="flexCenter gap-4">
        {session ? (
          <>
            User Photo
            <Link href="/create-project">Share Work</Link>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  );
}
