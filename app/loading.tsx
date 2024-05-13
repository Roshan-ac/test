import Image from "next/image";

export default function Loading() {
  return (
    <div className=" flex h-[100vh] w-[100vw] items-center justify-center bg-secondaryBackground">
      <Image
        alt=""
        height={80}
        width={80}
        src={"/images/loaderBar.gif"}
        unoptimized={true}
      />
    </div>
  );
}
