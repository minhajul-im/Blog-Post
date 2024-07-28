import Heading from './Heading';
import { FEATURE, FEATURES } from '../../constant/mock-data';

const FeatureHighlights = () => {
  return (
    <section className="container my-20">
      <Heading>Product Description</Heading>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
        {FEATURES.map((item: FEATURE) => (
          <div key={item.title} className="w-[300px] h-auto m-4">
            <div className="w-full h-auto">
              <img
                className="w-full h-full object-cover rounded"
                src={item.img}
                alt={item.title}
              />
            </div>
            <h4 className="text-TX-main font-semibold text-lg my-2">
              {item.title}
            </h4>
            <p className="text-TX-soft text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureHighlights;
