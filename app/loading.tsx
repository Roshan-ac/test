import Image from "next/image";

export default function Loading() {
  return (
    <div className=" bg-secondaryBackground flex h-[100vh] w-[100vw] items-center justify-center">
      <Image alt="" height={80} width={80} src={"/images/loaderBar.gif"} />
    </div>
  );
}
