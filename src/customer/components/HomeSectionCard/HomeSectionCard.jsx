import React from "react";
import { useNavigate } from "react-router-dom";

const HomeSectionCard = ({ product }) => {
  const navigate = useNavigate();

  // return (
  //   <>
  //     <div className="cursor-pointer flex flex-col items-center justify-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 border">
  //       <div className="h-[13rem] w-[10rem]">
  //         <img src={product.image} alt="product_image" />
  //       </div>
  //       <div className="p-4">
  //         <h3 className="text-lg font-medium text-gray-900">{product.brand}</h3>
  //         <p className="mt-2 text-sm text-gray-600">{product.title}</p>
  //       </div>
  //     </div>
  //   </>
  // );

  return (
    <div
      onClick={() => navigate(`/product/mobile/apple`)}
      className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3"
    >
      <div className="h-[13rem] w-[10rem]">
        <img
          className="object-cover object-top w-full h-full"
          src={product?.image || product?.imageUrl}
          alt={product?.title}
        />
      </div>

      <div className="p-4 ">
        <h3 className="text-lg font-medium text-gray-900">
          {product?.brand || product?.title}
        </h3>
        <p className="mt-2 text-sm text-gray-500">{product?.title}</p>
      </div>
    </div>
  );
};

export default HomeSectionCard;
