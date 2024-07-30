import Heading from '../common/Heading';
import { IconType } from '../../icons';
import { PRODUCTS, ProductType } from '../../constant/mock-data';
import React, { useState } from 'react';
import CustomModal from '../common/CustomModal';
import ProductDetails from './ProductDetails';

const Shop = ({ isDark }: IconType) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [id, setId] = useState<number | null>(null);

  const handleDetails = (id: number) => {
    setId(id);
    setIsOpen(true);
  };

  return (
    <React.Fragment>
      <CustomModal
        isDark={isDark}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <ProductDetails id={id} />
      </CustomModal>

      <section id="shop" className="container my-16">
        <Heading>Nic Out</Heading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-16 justify-items-center">
          {PRODUCTS.map((item: ProductType) => (
            <div
              key={item?.id}
              className="w-[320px] md:w-[350px] lg:w-[320px] h-[348px] md:h-[420px] my-4 transition-transform duration-500 ease-in-out hover:scale-110 relative rounded"
            >
              <label className="absolute text-TX-main bg-[#ff1a1a] rounded px-3 py-1 transform -rotate-45 top-8 font-semibold font-mono">
                ৳{item?.price}
              </label>
              <button
                onClick={() => handleDetails(item?.id)}
                className="absolute right-2 top-2 bg-[#3586ff] text-TX-main rounded-lg text-xs font-light py-1 px-2"
              >
                details
              </button>

              <button className="py-2 px-6 rounded-full bg-green-600 absolute bottom-4 left-1/2 transform -translate-x-1/2 font-bold text-sm hover:bg-green-700 hover:transition-all hover:duration-100">
                BUY NOW
              </button>
              <img
                className="w-full h-full object-cover rounded"
                src={item?.img}
                alt={item?.name}
              />
            </div>
          ))}
        </div>
      </section>
    </React.Fragment>
  );
};

export default Shop;

// https://www.youtube.com/watch?v=l8knG0BPr-o

// <div className="w-[320px] md:w-[350px] h-[348px] md:h-[420px] rounded">
//             <img src="" alt="" className="w-full h-full object-cover rounded" />
//           </div>
//           <div className="flex gap-2 flex-col">
//             <h2 className="text-2xl font-bold text-wrap text-TX-main"></h2>
//             <p className="text-sm text-TX-soft font-medium"></p>
//             <h4 className="font-semibold text-base ml-4"></h4>
//             <ul className="list-disc flex flex-col gap-2">
//               <li className="text-xs text-TX-soft"></li>
//             </ul>
//           </div>
