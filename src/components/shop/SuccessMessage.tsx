type Success = {
  pack: number;
  price: number;
  location: string;
};

const SuccessMessage = ({ pack, price, location }: Success) => {
  const cost = location === 'dhaka' ? 60 : 120;

  return (
    <section className="p-6 md:p-8">
      <h2 className="text-2xl font-bold text-TX-soft text-center my-4">
        Thank you for your order!
      </h2>
      <div className="p-4">
        <h5 className="text-xl font-bold text-yellow-600 pb-2 text-center">
          ORDER CONFIRMATION
        </h5>
        <p className="text-center text-TX-main">
          Your order
          <span className="font-bold text-red-600 tracking-wide">
            {' '}
            {pack} {pack > 1 ? 'Pack' : 'Packs'}{' '}
          </span>
          Nic Out has been successful!
        </p>
        <div className="flex justify-between items-center pt-4">
          <p>Nic Out Filters</p>
          <p className="text-bold text-TX-soft">{price}.00</p>
        </div>
        <div className="flex justify-between items-center pb-2">
          <p>Delivery Cost</p>
          <p className="text-bold text-TX-soft">{cost}.00</p>
        </div>

        <hr />
        <div className="flex justify-between items-center py-2">
          <p>Total Taka</p>
          <p className="text-bold text-TX-soft">{cost + price}.00</p>
        </div>
        <p className="text-center pt-6 text-sm text-TX-soft">
          Thank you for choosing Nic out!
        </p>
      </div>
    </section>
  );
};

export default SuccessMessage;
