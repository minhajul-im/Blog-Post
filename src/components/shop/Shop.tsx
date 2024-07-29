import { PRODUCTS, ProductType } from '../../constant/mock-data';
import Heading from '../common/Heading';

const Shop = () => {
  return (
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
            <button className="absolute right-2 top-2 bg-yellow-600 text-TX-main rounded-lg text-xs font-light py-1 px-2">
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
  );
};

export default Shop;
