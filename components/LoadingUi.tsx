import Image from "next/image";

export default function LoadingUI() {
  return (
    <div className=" flex h-[100vh] w-full items-center justify-center">
    {/* <Image src={'/images/loading.gif'} alt="" height={50} width={50} /> */}
    <h1>Loading..</h1>
    </div>
  );
}
