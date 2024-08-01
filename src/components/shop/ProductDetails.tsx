import { PRODUCTS, ProductType } from '../../constant/mock-data';

type ID = { id: number | null };

const ProductDetails = ({ id }: ID) => {
  const product = PRODUCTS.find((item: ProductType) => item.id === id);

  return (
    <div className="p-4 md:p-6 w-[340px] md:w-[700px] lg:w-[750px] flex flex-col justify-center md:flex-row md:items-center gap-5">
      <div className="w-[320px] md:w-[330px] lg:w-[340px] h-[300px] md:h-[350px] rounded-lg md:rounded">
        <img
          src={product?.img}
          alt={product?.name}
          className="w-full h-full object-cover rounded-lg md:rounded"
        />
      </div>
      <div className="flex gap-2 flex-col w-[w-320px] md:w-[350px] lg:w-[350px]">
        <h2 className="text-base md:text-2xl font-bold text-wrap text-TX-main">
          {product?.name}
        </h2>
        <p className="text-sm text-TX-soft font-medium">{product?.pis}</p>
        <h4 className="font-semibold text-base text-TX-main">
          ৳ {product?.price}
        </h4>
        <h5 className="font-extrabold text-sm text-green-600 ml-4">Details!</h5>
        <ul className="list-disc flex flex-col gap-2 ml-6">
          {product?.desc.map((item: string, idx: number) => (
            <li className="text-xs text-TX-soft" key={idx}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductDetails;
