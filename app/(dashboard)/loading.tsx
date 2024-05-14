import Image from "next/image";
import loaderBar from "../../public/Images/loaderBar.gif";

export default function Loading() {
  return (
    <div className=" flex h-[100vh] w-full items-center justify-center">
      <Image alt="loading" src={loaderBar} unoptimized />
    </div>
  );
}
