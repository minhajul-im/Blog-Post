import Heading from '../common/Heading';
import { IconType } from '../../icons';
import { PRODUCTS, ProductType } from '../../constant/mock-data';
import React, { useState } from 'react';
import CustomModal from '../common/CustomModal';

const Shop = ({ isDark }: IconType) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <React.Fragment>
      <CustomModal
        isDark={isDark}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <div className="p-6">
          <h1>hey there how is it going!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            voluptatum in corrupti sunt commodi accusantium odit, ab, culpa
            deleniti beatae aliquam autem doloremque consequatur assumenda
            obcaecati perspiciatis omnis sed laboriosam!
          </p>
        </div>
      </CustomModal>

      <section id="shop" className="container my-16">
        <Heading>Nic Out</Heading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-16 justify-items-center">
          {PRODUCTS.map((item: ProductType) => (
            <div
              key={item?.id}
              className="w-[320px] md:w-[350px] h-[348px] md:h-[420px] my-4 transition-transform duration-500 ease-in-out hover:scale-110 relative rounded"
            >
              <label className="absolute text-TX-main bg-[#3586ff] rounded px-3 py-1 transform -rotate-45 top-8 font-semibold font-mono">
                ৳{item?.price}
              </label>
              <button
                onClick={() => setIsOpen(true)}
                className="absolute right-2 top-2 bg-yellow-600 text-TX-main rounded-lg text-xs font-light py-1 px-2"
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
