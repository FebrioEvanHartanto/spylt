import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 md:p-9 p-3">
      <Image
        src="/images/nav-logo.svg"
        alt="logo"
        width={150}
        height={150}
        priority
        className="md:w-24 w-20"
      />
    </nav>
  );
}
