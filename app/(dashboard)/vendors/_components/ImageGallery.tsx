import { Card } from "@/components/ui/card";
import { Eye, ImageOff, X } from "lucide-react";
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

  const [viewImage, setViewImage] = useState<{
    state: boolean,
    src: string
  }>({
    state: false,
    src: ''
  })
  return (
    <>
      <div className=" py-3 grid grid-cols-5 h-full gap-4">
        <Card onClick={() => {
          images.selfphoto &&
            setViewImage({
              src: `${images.selfphoto}`,
              state: true
            })
        }} className=" w-full h-full cursor-pointer">
          <div className=" bg-white h-[20%] p-2 text-black text-center">
            <p>Self Photo</p>
          </div>
          <div className="flex items-center justify-center w-full h-[80%]">
            {
              images.selfphoto ?
                <Image src={images.selfphoto} alt="Shop photo" height={100} width={100} className="w-full h-full object-cover" /> : (
                  <ImageOff size={28} />
                )
            }
          </div>
        </Card>
        <Card onClick={() => {
          images.shopphoto &&
            setViewImage({
              src: `${images.shopphoto}`,
              state: true
            })
        }} className=" w-full h-full cursor-pointer">
          <div className=" bg-white h-[20%] p-2 text-black text-center">
            <p>Shop Photo</p>
          </div>
          <div className="flex items-center justify-center w-full h-[80%]">
            {
              images.shopphoto ?
                <Image src={images.shopphoto} alt="Shop photo" height={100} width={100} className="w-full h-full object-cover" /> : (
                  <ImageOff size={28} />
                )
            }
          </div>
        </Card>
        <Card onClick={() => {
          images.aadharcardimgback &&
            setViewImage({
              src: `${images.aadharcardimgback}`,
              state: true
            })
        }} className=" w-full h-full cursor-pointer">
          <div className=" bg-white h-[20%] p-2 text-black text-center">
            <p>Aadharcard Back</p>
          </div>
          <div className="flex items-center justify-center w-full h-[80%]">
            {
              images.aadharcardimgback ?
                <Image src={images.aadharcardimgback} alt="Aadharcard Back" height={100} width={100} className="w-full h-full object-cover" /> : (
                  <ImageOff size={28} />
                )
            }
          </div>
        </Card>
        <Card onClick={() => {
          images.aadharcardimgfront &&
            setViewImage({
              src: `${images.aadharcardimgfront}`,
              state: true
            })
        }} className=" w-full h-full cursor-pointer">
          <div className=" bg-white h-[20%] p-2 text-black text-center">
            <p>Aadharcard front</p>
          </div>
          <div className="flex items-center justify-center w-full h-[80%]">
            {
              images.aadharcardimgfront ?
                <Image src={images.aadharcardimgfront} alt="Aadharcardimg Front" height={100} width={100} className="w-full h-full object-cover" /> : (
                  <ImageOff size={28} />
                )
            }
          </div>
        </Card>
        <Card onClick={() => {
          images.pancardimg &&
            setViewImage({
              src: `${images.pancardimg}`,
              state: true
            })
        }} className=" w-full h-full cursor-pointer">
          <div className=" bg-white h-[20%] p-2 text-black text-center">
            <p>Pancard Image</p>
          </div>
          <div className="flex items-center justify-center w-full h-[80%]">
            {
              images.pancardimg ?
                <Image src={images.pancardimg} alt="Pancard Image" height={100} width={100} className="w-full h-full object-cover" /> : (
                  <ImageOff size={28} />
                )
            }
          </div>
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
