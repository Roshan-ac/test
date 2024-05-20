import { Eye } from "lucide-react";
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
  return (
    <div className=" my-2 grid grid-cols-5 gap-4">
      <PhotoProvider>
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
      </PhotoProvider>
    </div>
  );
};

export default ImageGallery;
