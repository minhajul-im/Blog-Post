import Order from './Order';
import Heading from '../common/Heading';
import { IconType } from '../../icons';
import React, { useState } from 'react';
import CustomModal from '../common/CustomModal';
import ProductDetails from './ProductDetails';
import { PRODUCTS, ProductType } from '../../constant/mock-data';

type Open = { details: boolean; buy: boolean };

const Shop = ({ isDark }: IconType) => {
  const [id, setId] = useState<number | null>(null);

  const [ui, setUi] = useState<Open>({ details: false, buy: false });

  const handleDetails = (id: number) => {
    setId(id);
    setUi({ ...ui, details: true });
  };

  const handleBuy = () => {
    setUi({ ...ui, buy: true });
  };

  return (
    <React.Fragment>
      <CustomModal
        isDark={isDark}
        isOpen={ui.details}
        onClose={() => setUi({ ...ui, details: false })}
      >
        <ProductDetails id={id} />
      </CustomModal>

      <CustomModal
        isDark={isDark}
        isOpen={ui.buy}
        onClose={() => setUi({ ...ui, buy: false })}
      >
        <Order />
      </CustomModal>

      <section id="shop" className="container my-16">
        <Heading side="right">Nic Out</Heading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-16 justify-items-center transition-all duration-300">
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

              <button
                onClick={handleBuy}
                className="py-2 px-6 rounded-full bg-gradient-to-r from-[#335c99] to-[#1a2438] absolute bottom-4 left-1/2 transform -translate-x-1/2 font-bold text-sm "
              >
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
