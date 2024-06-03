import { Card } from "@/components/ui/card";
import { Eye, X } from "lucide-react";
import Image from "next/image";
import React, { useContext, useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const ImageGallery = ({
  images,
}: {
  images: {
    aadharcardimgback: string;
    aadharcardimgfront: string;
    pancardimg: string;
    selfphoto: string;
    shopphoto: string;
  };
}) => {
  console.log(images.selfphoto)
  const [viewImage, setViewImage] = useState<{
    state: boolean,
    src: string
  }>({
    state: false,
    src: ''
  })
  return (
    <>
      <div className=" py-2 grid grid-cols-5 h-full gap-4">
        {/* <PhotoProvider className=" !z-[100]">
        <PhotoView src={images.selfphoto}>
        <img
        className=" h-40 cursor-pointer rounded-md border bg-tertiaryBackground object-cover transition-all duration-500 hover:scale-100 hover:border-green-400"
        src={images.selfphoto}
        alt=""
        />
        </PhotoView>
        <PhotoView src={images.shopphoto}>
        <img
        className=" h-40 cursor-pointer rounded-md border bg-tertiaryBackground object-cover transition-all duration-500 hover:scale-100 hover:border-green-400"
        src={images.shopphoto}
        alt=""
        />
        </PhotoView>
        <PhotoView src={images.aadharcardimgback}>
        <img
        className=" h-40 cursor-pointer rounded-md border bg-tertiaryBackground object-cover transition-all duration-500 hover:scale-100 hover:border-green-400"
        src={images.aadharcardimgback}
        alt=""
        />
        </PhotoView>
        <PhotoView src={images.aadharcardimgfront}>
        <img
        className=" h-40 cursor-pointer rounded-md border bg-tertiaryBackground object-cover transition-all duration-500 hover:scale-100 hover:border-green-400"
        src={images.aadharcardimgfront}
        alt=""
        />
        </PhotoView>
        <PhotoView src={images.pancardimg}>
        <img
        className=" h-40 cursor-pointer rounded-md border bg-tertiaryBackground object-cover transition-all duration-500 hover:scale-100 hover:border-green-400"
        src={images.pancardimg}
        alt=""
        />
        </PhotoView>
      </PhotoProvider> */}

        <Card onClick={() => {
          setViewImage({
            src: `${images.selfphoto}`,
            state: true
          })
        }} className=" w-full overflow-hidden cursor-pointer">
          <div className=" bg-white p-2 text-black text-center">
            <p>Self Photo</p>
          </div>
          <Image src={images.selfphoto} alt="Self photo" height={100} width={100} className="w-full h-full object-cover" />
        </Card>
        <Card onClick={() => {
          setViewImage({
            src: `${images.aadharcardimgback}`,
            state: true
          })
        }} className=" w-full overflow-hidden cursor-pointer">
          <div className=" bg-white p-2 text-black text-center">
            <p>Aadharcard Back</p>
          </div>
          <Image src={images.aadharcardimgback} alt="Self photo" height={100} width={100} className="w-full h-full object-cover" />
        </Card>
        <Card onClick={() => {
          setViewImage({
            src: `${images.aadharcardimgfront}`,
            state: true
          })
        }} className=" w-full overflow-hidden cursor-pointer">
          <div className=" bg-white p-2 text-black text-center">
            <p>Aadharcard Front</p>
          </div>
          <Image src={images.aadharcardimgfront} alt="Self photo" height={100} width={100} className="w-full h-full object-cover" />
        </Card>
        <Card onClick={() => {
          setViewImage({
            src: `${images.pancardimg}`,
            state: true
          })
        }} className=" w-full overflow-hidden cursor-pointer">
          <div className=" bg-white p-2 text-black text-center">
            <p>Pancard</p>
          </div>
          <Image src={images.pancardimg} alt="Self photo" height={100} width={100} className="w-full h-full object-cover" />
        </Card>
        <Card onClick={() => {
          setViewImage({
            src: `${images.shopphoto}`,
            state: true
          })
        }} className=" w-full overflow-hidden cursor-pointer">
          <div className=" bg-white p-2 text-black text-center">
            <p>Shop Photo</p>
          </div>
          <Image src={images.shopphoto} alt="Self photo" height={100} width={100} className="w-full h-full object-cover" />
        </Card>
      </div>
      {
        viewImage.state &&
        <Card className=" fixed h-full bg-black w-[80%] z-40 top-0 flex items-center justify-center">
          <X onClick={() => {
            setViewImage({ state: false, src: '' })
          }} className=" fixed  right-8 z-50 top-8 text-white cursor-pointer hover:text-red-400" />
          <div className=" w-1/2 h-[80%] aspect-square p-1 rounded-md ">

            <Image src={images.selfphoto} alt="Self photo" height={100} width={100} className="m-auto w-full h-full aspect-square  bg-slate-200 p-2 object-contain" />
          </div>
        </Card>
      }
    </>
  );
};

export default ImageGallery;
