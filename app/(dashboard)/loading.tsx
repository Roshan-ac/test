import Image from "next/image";

export default function Loading() {
  return (
    <div className=" flex h-[100vh] w-full items-center justify-center">
      <Image alt="" height={80} width={80} src={"/images/loaderBar.gif"} />
    </div>
  );
}
